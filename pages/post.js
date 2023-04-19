import Head from 'next/head';
import Layout from '../components/layout';
import { getPostContent } from '../lib/posts';

// 文章頁面，要顯示：blog hero、文章內容
// 要去拿文章內容，用getStaticProps，並放進來
// 要有內容的骨架
// 怎麼連過來？目前是post，但是要動態產生url
// 而且我要拿特定某篇的資料，要怎麼拿？「不是在點按時才發送request」，在server build時就要對應分別拿？
export async function getStaticProps() {
  // const content getPostContent()
}

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
