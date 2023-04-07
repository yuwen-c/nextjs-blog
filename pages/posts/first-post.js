import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <img src="/images/next_img.jpeg" alt="Your Name" />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
