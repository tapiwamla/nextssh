import BaseLayout from "@/components/BaseLayout";
import { useSession, getSession, signOut } from "next-auth/react";
import ThemeToggle from "@/components/ThemeToggle";
import { PiSignOutBold } from "react-icons/pi";

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
            <h2 className="section-title">Profile Details</h2>
            <p><span className="profile-details">Full Name: </span>{session.user.name || 'Not Available'}</p>
            <p><span className="profile-details">Email: </span>{session.user.email}</p>
            <p><span className="profile-details">Username: </span>{session.user.email ? session.user.email.replace(/\.|@/g, '') : 'Not Available'}</p>
          </div>
          <div>
            <p>
              {session.user.image ? (
                <img className="profile-picture" src={session.user.image} alt="Profile Picture" />
              ) : (
                "Not Available"
              )}
            </p>
            <button className="signout-button" onClick={() => signOut()}> <PiSignOutBold />Sign Out</button>
          </div>
        </div>       
      </div>
      <div className="settings-container">
        <h2 className="section-title">User Preferences</h2>
        <ThemeToggle />
      </div>
    </BaseLayout>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default Account;
