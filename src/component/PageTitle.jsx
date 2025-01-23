"use client";
import Head from "next/head";
import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageTitle;
