import Card from './card';

export default function Page() {
  return (
    <main className='container @container max-w-4xl'>
      <h1 className='my-4 text-3xl font-semibold text-center capitalize'>
        Recent blogs by sohanEmon
      </h1>
      <div className='grid grid-cols-3 mt-10'>
        <Card className='col-span-2' />
      </div>
    </main>
  );
}
