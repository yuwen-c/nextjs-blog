import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import { getOneTripData } from '../../lib/trip';

// 這邊的code會被送到前端執行
const Trip = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchTrip = async () => {
      const tripData = await getOneTripData(id);
      setData(tripData);
    };
    fetchTrip();
  }, [id]);

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

export default Trip;
