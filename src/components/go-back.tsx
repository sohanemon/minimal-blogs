'use client';

import { cn } from '@/lib/utils';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

export default function GoBack(props: HTMLAttributes<HTMLDivElement>) {
  const { back } = useRouter();
  return (
    <div
      onClick={() => back()}
      {...props}
      className={cn(
        'p-2 transition-all rounded-full cursor-pointer  text-neutral-600 ring-1 ring-neutral-700 hover:text-neutral-500 hover:ring-neutral-500',
        props.className
      )}
    >
      <MoveLeft />
    </div>
  );
}
