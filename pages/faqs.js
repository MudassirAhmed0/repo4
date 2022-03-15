import Head from "next/head";
import { useEffect, useRef } from "react/cjs/react.development";
import FaqsDetails from "../Components/Faqs/FaqsDetails";
import Hero from "../Components/Faqs/Hero";
import Layout from "../Components/Layout/Layout";
import styles from "../styles/Home.module.css";

const FAQs = () => {
  const blue = useRef();
  const white = useRef();
  useEffect(() => {
    setTimeout(() => {
      let toBeSubtracted = 248;
      let height = white.current.clientHeight - toBeSubtracted;
      blue.current.style.height = height + "px";
    }, 500);
  }, []);
  return (
    <>
      <Head>
        <title>FAQs || Zajil</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Hero />
        <section ref={blue} className={`relative    ${styles.blueBack}`}>
          <div
            ref={white}
            className={`   overflow-visible   ${styles.ph}    ${styles.whiteCard}`}
          >
            <FaqsDetails />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQs;
