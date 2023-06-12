import Image from 'next/image';
import Social from './social';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';

export default function Profile({
  mini,
  className,
}: {
  mini?: boolean;
  className?: ClassValue;
}) {
  return (
    <section
      className={cn(
        'flex flex-col items-center py-4 border rounded-lg w-80 h-max border-neutral-700',
        {
          'not-prose border-none flex-row gap-3': mini,
        },
        className
      )}
    >
      <Image
        src={'/assets/avatar.png'}
        alt='author'
        width={100}
        height={100}
        className={cn('scale-75 rounded-full', {
          'scale-100 w-10 aspect-square': mini,
        })}
      />
      <div
        className={cn('flex flex-col items-center', { 'items-start': mini })}
      >
        <p className='font-semibold'>Sohan R. Emon</p>
        <p className='text-xs opacity-70'>Web Developer</p>
      </div>
      {!mini && <Social />}
    </section>
  );
}
