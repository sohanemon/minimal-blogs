import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Social() {
  return (
    <div className='flex items-center justify-center gap-10 mt-1'>
      <Link href={'https://github.com/sohanemon'}>
        <Github
          size={20}
          strokeWidth={1}
          className='transition-colors hover:fill-neutral-300'
        />
      </Link>
      <Link href={'https://twitter.com/sohanemon'}>
        <Twitter
          size={20}
          strokeWidth={1}
          className='transition-colors hover:fill-neutral-300'
        />
      </Link>
      <Link href={'https://linkedin.com/in/sohanemon'}>
        <Linkedin
          size={20}
          strokeWidth={1}
          className='transition-colors hover:fill-neutral-300'
        />
      </Link>
    </div>
  );
}
