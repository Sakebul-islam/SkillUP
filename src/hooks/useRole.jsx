import useAuth from './useAuth';
import { getRole } from '../api/auth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['userRole'],
    queryFn: async () => await getRole(user?.email),
  });
  return [role, isLoading];
};

export default useRole;
