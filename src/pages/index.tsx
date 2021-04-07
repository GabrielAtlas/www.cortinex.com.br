import Head from "next/head";
import Header from "../components/Header";
import CortinexCarousel from "../components/CortinexCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cortinex Decorações - Início</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <CortinexCarousel />
      <div className="full-circle" />
    </>
  );
}
