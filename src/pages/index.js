import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Index = () => {
  const { data: session, status } = useSession();  
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="main-container"> 
      <div className="left-section">
        <img className="landing-image" src="/servers.jpg" alt="Servers" />
      </div>
      <div className="right-section">
        <h1 className="landing-title">CShell: SSH on the Web</h1>
        <p>Connect to and command your remote servers effortlessly with CShell, a web-based SSH client and terminal emulator. Master your systems directly from your browser!</p>
        {status === "loading" && <div>Loading...</div>}
        {!session && (
          <>
            <div className="signin-buttons">
            <button 
                className="signin-button" 
                onClick={() => signIn("google", { 
                  callbackUrl: `${window.location.origin}/connect`
                })}
              >
                <FaGoogle className="landing-icon" /> Continue with Google
              </button>
              <button 
                className="signin-button" 
                onClick={() => signIn("github", {
                  callbackUrl: `${window.location.origin}/connect`,
                })}
              >
                <FaGithub className="landing-icon"/> Continue with GitHub
              </button>
            </div>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button className="signout-button" onClick={() => signOut()}>Sign out</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
