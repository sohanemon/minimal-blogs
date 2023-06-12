import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Social() {
  return (
    <div className='flex items-center justify-center gap-10 mt-1'>
      <Github
        size={20}
        strokeWidth={1}
        className='transition-colors hover:fill-neutral-300'
      />
      <Twitter
        size={20}
        strokeWidth={1}
        className='transition-colors hover:fill-neutral-300'
      />
      <Linkedin
        size={20}
        strokeWidth={1}
        className='transition-colors hover:fill-neutral-300'
      />
    </div>
  );
}
