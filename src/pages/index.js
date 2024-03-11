import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'; // Import useRouter

export default function SignInPage() {
  const { data: session } = useSession();
  const router = useRouter(); // Initialize router

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github", { callbackUrl: '/connect' })}>
        Sign in with GitHub
      </button>
      <button onClick={() => signIn("google", { callbackUrl: '/connect' })}>
        Sign in with Google
      </button>
    </>
  );
}
