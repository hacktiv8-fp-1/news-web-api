import Jumbotron from "@/components/Jumbotron";
import Navigation from "@/components/Navigation";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buletin | Home</title>
      </Head>
      <Navigation />
      <div className="w-9/12 my-auto py-10 mx-auto">
        <Jumbotron />
      </div>
    </>
  );
}
