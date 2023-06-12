import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export default function Card({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'mx-auto px-5 border border-neutral-700 hover:border-neutral-600 transition-all group rounded-lg py-7 [&>*]:transition-all',
        className
      )}
    >
      <p className='font-semibold opacity-95 group-hover:opacity-100'>
        How to add MDX in Next JS
      </p>
      <p className='text-xs opacity-60 group-hover:opacity-80'>
        MDX is a popular library to add Markdown into your React application.
        Using MDX we can add React components inside markdown.
      </p>
      <button className='text-sm opacity-90 group-hover:opacity-100'>
        See more...
      </button>
    </div>
  );
}
