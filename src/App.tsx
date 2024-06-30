import React, { Suspense } from "react";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Loading from "./components/Loading/Loading";
import TheExtension from "./components/TheExtension/TheExtension";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Suspense fallback={<Loading />}>
        <Features />
      </Suspense>
      <TheExtension />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
