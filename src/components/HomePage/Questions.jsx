/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../Shared/Container';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import { Accordion } from 'flowbite-react';

const Questions = () => {
  return (
    <div className='py-6' data-aos='zoom-in'>
      <Container>
        <SectionHeader
          heading={'Frequently Asked'}
          headingSpan={'Questions'}
          headingDescription={`Explore Skill UP's FAQs for quick answers to common queries about our diverse online courses.`}
        />
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>What courses does SkillUP offer?</Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                SkillUP provides a diverse range of courses to cater to
                different interests and career paths. Our offerings include
                courses in web development, programming, finance, accounting,
                and more. You can explore our course catalog to find the perfect
                learning path for your aspirations.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How can I enroll in a course on SkillUP?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Enrolling in a course at SkillUP is simple! Visit our
                website, browse through the available courses, and select the
                one that aligns with your goals. Click on the course to view
                details, and you'll find an enrollment option there. Follow the
                prompts to complete the enrollment process and start your
                learning journey.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Are there any prerequisites for the courses on SkillUP?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                The prerequisites for courses on SkillUP vary depending on
                the specific course. While some courses may be suitable for
                beginners, others might require a certain level of prior
                knowledge or experience. Check the course description and
                prerequisites section on the course page for detailed
                information. We aim to provide a diverse range of courses
                suitable for learners at different skill levels.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Is there any support available for students during their learning
              journey?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Absolutely! SkillUP is committed to supporting students
                throughout their learning journey. We offer a range of
                resources, including discussion forums, Q&A sessions, and
                dedicated support channels. If you have questions about the
                course content, assignments, or any technical issues, our
                support team is here to assist you. Additionally, our community
                provides a platform for learners to connect, share experiences,
                and collaborate.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can I access course materials on SkillUP at any time, and are
              there deadlines for assignments?
            </Accordion.Title>
            <Accordion.Content>
              <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Yes, one of the benefits of SkillUP is the flexibility it
                offers. You can access course materials at any time that suits
                your schedule. Our platform is designed to accommodate learners
                from around the world in different time zones. While there are
                suggested timelines for completing assignments to help you stay
                on track, many courses are self-paced, allowing you to learn at
                your own speed. This flexibility ensures that learning with
                SkillUP fits seamlessly into your busy lifestyle.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Container>
    </div>
  );
};

export default Questions;
