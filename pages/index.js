import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>a badminton and gym lover</p>
        <p>
          talk to me in Mandarin/ English/ Spanish{' '}
          <a href="https://yuwen-portfolio.netlify.app/" target="_blank">
            my website
          </a>
        </p>
      </section>
    </Layout>
  );
}
