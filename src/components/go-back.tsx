'use client';

import { MoveLeft } from 'lucide-react';
import { HTMLAttributes } from 'react';

export default function GoBack(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <MoveLeft />
    </div>
  );
}
