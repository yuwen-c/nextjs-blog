import Head from 'next/head';
import Layout from '../components/layout';

// 文章頁面，要顯示：blog hero、文章內容
// 要去拿文章內容，用getStaticProps，並放進來
// 要有內容的骨架
// 怎麼連過來？目前是post，但是要動態產生url

const Post = () => {
  return (
    <Layout>
      <Head>
        <title>post title</title>
      </Head>
      <div>
        <h1>post title</h1>
        <p>date</p>
        <section>
          <p>content</p>
        </section>
      </div>
    </Layout>
  );
};

export default Post;
