import GoBack from '@/components/go-back';
import Profile from '../blogs/profile';
import Mdx from './mdx-in-next-js.mdx';
export default function Page() {
  return (
    <section className='max-w-3xl p-8 mx-auto prose prose-invert bg-neutral-800'>
      <div className='relative'>
        <GoBack className='absolute p-2 rounded-full -left-32 text-neutral-600 ring-1 ring-neutral-700' />
        <h1>MDX in Next js</h1>
      </div>

      <Profile mini />
      <Mdx />
    </section>
  );
}
