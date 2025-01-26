import React from "react";
import Heading from "../components/common/Heading";
import Sliders from "../components/home/Slider";
import { useTranslation } from "react-i18next";

export default function Testimonial() {
  const { t } = useTranslation("common");
  return (
    <>
      <Heading
        heading={t(`Testimonial`)}
        title={t(`home`)}
        subtitle={t(`Testimonial`)}
      />
      <Sliders />
    </>
  );
}
