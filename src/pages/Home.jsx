import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import SubHeading1 from "../components/SubHeading1";
import RecentTrades from "../components/RecentTrades";
import FrequentQuestions from "../components/FrequentQuestions";
import SupportedGame from "../components/SupportedGame";
import TradeFaster from "../components/TradeFaster";
import BoostTrade from "../components/BoostTrade";

export default function Home() {
  return (
    <>
      <Header />
      <SubHeading1 />
      <BoostTrade />
      <SupportedGame />
      <TradeFaster />
      <RecentTrades />
      <FrequentQuestions />
      <Footer />
    </>
  );
}
