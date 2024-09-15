import { useMutation } from '@apollo/client';
import {
  LOGIN_MUTATION
} from './mutations';

export function useAuth() {
  const [
    loginMutation,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await loginMutation({ variables: { email, password } });
      console.log(data);
      localStorage.setItem('accessToken', data.login.access_token);
      localStorage.setItem('refreshToken', data.login.refresh_token);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return {
    handleLogin,
    loginData,
    loginLoading,
    loginError,
  };
}
