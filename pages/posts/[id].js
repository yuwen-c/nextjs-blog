import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

/** 用md檔名當id，產生path */
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

/** 用id(檔名)取得對應的文章資料。[id] */
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

/**
 * 在還沒建立任何頁面路徑的情況下，只要符合root/posts/** 的url，都會產生這個畫面，自動符合[id]
 */
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
