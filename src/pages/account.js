import BaseLayout from "@/components/BaseLayout";
import { useSession, getSession, signOut } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in to view your account details.</div>;
  }

  return (
    <BaseLayout pageTitle="ACCOUNT DETAILS">
      <div className="account-details">
        <div className="profile">
          <div>
            <p><span className="profile-details">Name: </span>{session.user.name || 'Not Available'}</p>
            <p><span className="profile-details">Email: </span>{session.user.email}</p>
            <button className="signout-button" onClick={() => signOut()}>Sign out</button>
          </div>
          <div>
            <p>
              {session.user.image ? (
                <img className="profile-picture" src={session.user.image} alt="Profile Picture" />
              ) : (
                "Not Available"
              )}
            </p>
          </div>
        </div>       
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

export default Account;
