import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index")
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <main className={styles.main}>
           <div>
            home
           </div>
           <div>
            How to register
           </div>
           <div>
            Deposit
           </div>
           <div>
            Account Type
           </div>
           <div>
            Regulation
           </div>
           <div>
            Contact
           </div>
          <div>
          </div>
        </main>
      </div>
    </div>
  );
}
