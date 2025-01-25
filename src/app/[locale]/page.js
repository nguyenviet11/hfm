'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import hfm from "../../../public/hfm.jpg";
import { Link, useRouter } from "@/routing";
import LocalSwitcher from "@/component/LocalSwitcher";
import PageTitle from "@/component/PageTitle";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations("Index");
  const t2 = useTranslations("Introduce");
  const title = t2("documentTitle");

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
        <div className={styles.wrapperMain}>
          <div className={styles.hfmWrapper}>
            <a href="https://www.hfm.com/?refid=30438820">
              <Image
                src={hfm}
                alt="hfm"
                style={{ width: "100%", height: "100%" }}
              />
            </a>
              <Link href="/open-account" className={styles.btn}>
                {t("btn")}
              </Link>
          </div>
          <div className={styles.infoHfm}>
            <div className={styles.colInfoHfm}>
              <div style={{ display: "flex" }}>
                <div className={styles.w3}>
                  <span>{t("regulationName")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("regulationNameC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("headOffice")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("headOfficeC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("foundYear")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("foundYearC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("tradingProduct")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("tradingProductC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("feeDifference")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("feeDifferenceC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("lever")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("leverC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("miniumDeposit")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("miniumDepositC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("tradePlatform")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("tradePlatformC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("mobileApplication")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("mobileApplicationC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("depositWithdraw")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("depositWithdrawC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("support")}</span>
                </div>
                <div className={styles.w4}>
                  <span>{t("supportC2")}</span>
                </div>
              </div>
              <div className={styles.mt2}>
                <div className={styles.w3}>
                  <span>{t("officialWebsite")}</span>
                </div>
                <div className={styles.w4}>
                  <a href="https://hfm-fx.com/">https://hfm-fx.com/</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.wrapperTxt}>
          <p className={styles.txtTitle1}>{t2("txt1")}</p>
          <p className={styles.txtTitle2}>{t2("txt2")}</p>
          <p className={styles.txtTitle1}>{t2("txt3")}</p>
          <p className={styles.txtTitle2}>{t2("txt4")}</p>
          <p className={styles.txtTitle1}>{t2("txt5")}</p>
          <p className={styles.txtTitle2}>{t2("txt6")}</p>
          <p className={styles.txtTitle1}>{t2("txt7")}</p>
          <p className={styles.txtTitle2}>{t2("txt8")}</p>
          <p className={styles.txtTitle1}>{t2("txt9")}</p>
          <p className={styles.txtTitle2}>{t2("txt10")}</p>
          <p className={styles.txtTitle1}>{t2("txt11")}</p>
          <p className={styles.txtTitle2}>{t2("txt12")}</p>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.countryWrapper}>
          <LocalSwitcher />
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.copyRight}>
          <span>Copyright @ 2023 hfm-fx.com </span>{" "}
          <span style={{ marginLeft: 4 }}>{t2("copyRight")}</span>
        </div>
      </div>
    </>
  );
}

// https://www.hfm.com/?refid=30438820
