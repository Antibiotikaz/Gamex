import Head from "next/head";
import Login from "./login/index";
import Navigation from "../components/FrontNavigation/Navigation";
import Footer from '../components/Footer/Footer';
export default function Home() {
  return (
    <div>
          <Head>
        <title>Gamex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navigation/>
      <Login />
      <Footer/>
    </div>
  );
}
