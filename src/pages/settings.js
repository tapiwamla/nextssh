import BaseLayout from "@/components/BaseLayout";
import ThemeToggle from "@/components/ThemeToggle";
import { useSession, getSession } from 'next-auth/react'; 

const Settings = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You cannot access settings unless you sign in.</div>;
  }

  return (
    <BaseLayout pageTitle="APPLICATION SETTINGS">
      <div className="settings-container">
        <ThemeToggle />
      </div>
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

export default Settings;
