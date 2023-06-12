import Image from 'next/image';
import Social from './social';
import { cn } from '@/lib/utils';

export default function Profile({ mini }: { mini?: boolean }) {
  return (
    <section
      className={cn(
        'flex flex-col items-center py-4 border rounded-lg w-80 h-max border-neutral-700',
        {
          '': mini,
        }
      )}
    >
      <Image
        src={'/assets/avatar.png'}
        alt='author'
        width={100}
        height={100}
        className='scale-75 rounded-full'
      />
      <p className='font-semibold'>Sohan R. Emon</p>
      <p className='text-xs opacity-70'>Web Developer</p>
      <Social />
    </section>
  );
}
