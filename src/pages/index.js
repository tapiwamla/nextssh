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
    <div className="landing-main"> 
      <div className="landing-left">
        <img className="landing-image" src="/servers.jpg" alt="Servers" />
      </div>
      <div className="landing-right">
        <h1 className="landing-title">CShell: SSH on the Web</h1>
        <p className="landing-descr">Connect to and command your remote servers effortlessly with CShell, a web-based <strong>SSH client</strong> and <strong>terminal emulator</strong>. Master your systems directly from your browser!</p>
        {status === "loading" && <div>Loading...</div>}
        {!session && (
          <>
            <div className="landing-buttons">
            <button
                onClick={() => signIn("google", { 
                  callbackUrl: `${window.location.origin}/connect`
                })}
              >
                <FaGoogle className="landing-icon" /> Continue with Google
              </button>
              <button  
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
