import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Jitsi from 'react-jitsi';
import Loading from '../../components/Loading';

type MeetWithIDPageProps = {
  id: string;
};

const MeetWithIDPage = () => {
  const router = useRouter();
  let { id } = router.query;
  if (process.browser) {
    // client-side-only code
    id = `${router.query}`;
  }
  return (
    <>
      <Head>
        <script src="https://meet.jit.si/external_api.js"></script>
        <title>uimeet | {id} Meeting</title>
      </Head>
      <div className=" w-screen h-screen">
        <div id="jitsi-container" className="w-full h-full">
          <Jitsi
            roomName={`${id}`}
            displayName="Jonathan Filbert"
            loadingComponent={Loading}
            domain="jitsi-editreadmedapatbaju.cs.ui.ac.id/jitsi"
            containerStyle={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const router = useRouter();
//   const { id } = router.query;
//   return {
//     props: {
//       id,
//     },
//   };
// };

export default MeetWithIDPage;
