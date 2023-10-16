import Introduction from "@/components/AboutMe/Introduction";
import Head from "next/head";

export default function Aboutme() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href='/lastName.png' />
      </Head>
      <div className="pt-4">
        <Introduction />
      </div>
    </>
  );
}
