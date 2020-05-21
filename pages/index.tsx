import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/search');
  });

  return null;
};

export default Home;
