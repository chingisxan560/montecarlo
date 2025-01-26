import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation("common");
  return (
    <>
      <Heading heading={t(`About`)} title={t(`home`)} subtitle="About" />
      <About />
    </>
  );
}
