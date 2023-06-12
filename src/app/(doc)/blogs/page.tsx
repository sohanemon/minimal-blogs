import Card from './card';
import Profile from './profile';

export default function Page() {
  return (
    <main className='container @container max-w-4xl'>
      <h1 className='my-8 text-3xl font-semibold text-center capitalize'>
        Recent blogs by sohanEmon
      </h1>
      <div className='flex gap-10 mt-10'>
        <div className='space-y-6'>
          <Card />
          <Card />
          <Card />
        </div>
        <Profile />
      </div>
    </main>
  );
}
