import { SessionProvider } from "next-auth/react";
import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </SessionProvider>
  );
}
