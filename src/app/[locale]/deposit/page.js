import { Link } from "@/routing";
import styles from "./page.module.css";
import React from "react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "@/component/LocalSwitcher";
import PageTitle from "@/component/PageTitle";

const page = () => {
  const t = useTranslations("Index");
  const t2 = useTranslations("Introduce");
  const t3 = useTranslations("Deposit");
  const title = t3("documentTitle");

  return (
    <>
      <PageTitle title={title} />
      <div className={styles.container}>
        <div className={styles.page}>
          <main className={styles.main}>
            <div>
              <Link href="/">{t("home")}</Link>
            </div>
            <div>
              <Link href="/register">{t("register")}</Link>
            </div>
            <div>
              <Link href="/deposit">{t("deposit")}</Link>
            </div>
            <div>
              <Link href="/account-type">{t("accountType")}</Link>
            </div>
            <div>
              <Link href="/regulation">{t("regulation")}</Link>
            </div>
            <div>
              <Link href="/contact">{t("contact")}</Link>
            </div>
            <div></div>
          </main>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.wrapperTxt}>
            <p className={styles.txtTitle1}>{t3("deposit")}</p>
            <p className={styles.txtTitle2}>{t3("txt1")}</p>
            <p className={styles.txtTitle2}>{t3("txt2")}</p>
            <p className={styles.txtTitle2}>{t3("txt3")}</p>
            <p className={styles.txtTitle2}>{t3("txt4")}</p>
            <p className={styles.txtTitle2}>{t3("txt5")}</p>
            <p className={styles.txtTitle1} style={{marginTop: 20}}>{t3("txt6")}</p>
            <p className={styles.txtTitle2}>{t3("txt7")}</p>
            <p className={styles.txtTitle2}>{t3("txt8")}</p>
            <p className={styles.txtTitle2}>{t3("txt9")}</p>
            <p className={styles.txtTitle2}>{t3("txt10")}</p>
            <p className={styles.txtTitle2}>{t3("txt11")}</p>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.countryWrapper}>
          <LocalSwitcher />
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.copyRight}>
          <span>Copyright @ 2023 www.fxgtcom.com </span>{" "}
          <span style={{ marginLeft: 4 }}>{t2("copyRight")}</span>
        </div>
      </div>
    </>
  );
};

export default page;


