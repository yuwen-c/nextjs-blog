import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import Head from 'next/head';
import useSWR from 'swr';

const fetcher = (options) => {
  const { url, ...rest } = options;
  return fetch(url, {
    ...rest,
  }).then((res) => res.json());
};

const SWRTrip = () => {
  const router = useRouter();
  const { swrId } = router.query;

  const { data, error } = useSWR(
    {
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      body: JSON.stringify({
        tripId: swrId,
        type: 'require passengers',
        origin: 'taipei',
        destination: 'kaohsiung',
        date: '2023/5/31',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <Head>
        <title>Trip</title>
      </Head>
      <p>some trip data here</p>
      <p>{data?.tripId}</p>
      <p>{data?.date}</p>
    </Layout>
  );
};

export default SWRTrip;
