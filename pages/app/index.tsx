import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { AppProps } from "next/app";

export default function App({ pageProps }: AppProps) {
  return (
    <>
      <SignedIn>
        <div>App</div>
      </SignedIn>
      <SignedOut></SignedOut>
    </>
  );
}
