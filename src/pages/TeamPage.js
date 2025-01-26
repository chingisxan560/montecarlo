import React from "react";
import Heading from "../components/common/Heading";
import Teams from "../components/home/Team";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation("common");
  return (
    <>
      <Heading heading={t(`Team`)} title={t(`home`)} subtitle={t(`Team`)} />
      <Teams />
    </>
  );
}
