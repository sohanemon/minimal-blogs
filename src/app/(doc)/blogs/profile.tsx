import Image from 'next/image';

export default function Profile() {
  return (
    <section className='flex flex-col items-center py-4 border rounded-lg w-80 h-max border-neutral-700'>
      <Image
        src={'/assets/avatar.png'}
        alt='author'
        width={100}
        height={100}
        className='scale-75 rounded-full'
      />
      <p className='font-semibold'>Sohan R. Emon</p>
      <p className='text-xs opacity-70'>Web Developer</p>
    </section>
  );
}
