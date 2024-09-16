'use client';
import { useQuery } from '@apollo/client';
import { PROFILE } from '@/lib/api/api';
import { useEffect } from 'react';
import { useAuthStore } from '@/app/store/authStore';

export default function ProfileLoader() {
  const { setProfile, setAuthenticated } = useAuthStore();
  const { data } = useQuery(PROFILE);

  console.log(data);
  useEffect(() => {
    if (data?.myProfile) {
      setProfile(data.myProfile);
      setAuthenticated(true);
    }
  }, [data, setProfile, setAuthenticated]);

  return null;
}
