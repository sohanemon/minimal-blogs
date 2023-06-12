import Profile from '../blogs/profile';
import Mdx from './mdx-in-next-js.mdx';
export default function Page() {
  return (
    <section className='max-w-3xl p-8 mx-auto prose prose-invert'>
      <h1>MDX in Next js</h1>
      <Profile mini />
      <Mdx />
    </section>
  );
}