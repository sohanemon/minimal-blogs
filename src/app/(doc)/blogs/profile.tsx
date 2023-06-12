import Image from 'next/image';

export default function Profile() {
  return (
    <section className='border border-neutral-200'>
      <Image src={'/assets/avatar.png'} alt='author' width={100} height={100} />
    </section>
  );
}
