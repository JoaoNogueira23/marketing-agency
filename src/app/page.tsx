import HomePage from "@/pages/Home/HomePage";
import styles from "./page.sass";
import Divider from "@/components/Divider/Divider";

export default function Home() {
  return (
    <main className={styles.main}>
        <HomePage />
        <Divider />
    </main>
  );
}
