import React from 'react';
import BaseLayout from "@/components/BaseLayout";
import XTerminal from "@/components/Terminal";
import { useSession, getSession } from 'next-auth/react';

const Terminal = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in to use the terminal.</div>;
  }

  return (
    <BaseLayout pageTitle="INTEGRATED TERMINAL">
      <XTerminal />
    </BaseLayout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Terminal;
