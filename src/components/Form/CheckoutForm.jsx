import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import './CheckoutForm.css';
import { ImSpinner9 } from 'react-icons/im';
import { createPaymentIntent, makePayment } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ payInfo, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  // Create Payment Intent
  useEffect(() => {
    if (parseFloat(payInfo?.class?.price) > 0) {
      createPaymentIntent({ price: payInfo?.class?.price }).then((data) => {
        setClientSecret(data?.clientSecret);
      });
    }
  }, [payInfo]);

  const { mutate } = useMutation({
    mutationKey: ['storePaymentInfo'],
    mutationFn: async (paymentInfo) => {
      const data = await makePayment({
        id: payInfo?.class?.classId,
        paymentInfo,
      });
      if (data?.insertedId) {
        toast.success('Payment Successful!');
      }
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment method', paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: payInfo?.student?.name,
            email: payInfo?.student?.email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log('payment intent', paymentIntent);

    if (paymentIntent.status === 'succeeded') {
      const paymentInfo = {
        ...payInfo,
        payInfo: {
          transactionId: paymentIntent.id,
          date: new Date(),
        },
      };
      try {
        mutate(paymentInfo);
        navigate('/dashboard/my-enroll-class');
      } catch (error) {
        toast.error(error.message);
      } finally {
        setProcessing(false);
      }
      setProcessing(false);
    }
  };

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <div className='divider after:bg-[#03b97c] before:bg-[#03b97c]'></div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='divider after:bg-[#03b97c] before:bg-[#03b97c]'></div>
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-sm border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-sm border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 cursor-pointer'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay Now`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
