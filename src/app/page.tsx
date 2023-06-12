'use client';

import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

export default function Home() {
  const { push } = useRouter();
  useLayoutEffect(() => {
    push('/blogs');
    return () => {};
  }, [push]);

  return <main className=''></main>;
}
