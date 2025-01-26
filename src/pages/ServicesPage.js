import React from "react";
import Heading from "../components/common/Heading";
import Services from "../components/home/Service";
import { useTranslation } from "react-i18next";

export default function Service() {
  const { t } = useTranslation("common");
  return (
    <>
      <Heading
        heading={t(`Services`)}
        title={t(`home`)}
        subtitle={t(`Services`)}
      />
      <Services />
    </>
  );
}
