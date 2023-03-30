import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <section className={styles.info}>
        <img className={styles.ninjaLogo} src="./logo.png" alt="ninjaPass" />
        <h1>Ninja Dash Game Pass</h1>
        <p>
          Here is where you mint your access pass to play the NinjaDash Game.
          Ready? Click the button below👇🏾
        </p>
        <Web3Button
          colorMode="light"
          accentColor="#411111"
          contractAddress="0x0dB40290F8122CFeB1f086601318e238692fDcDA"
          action={(contract) => {
            contract.erc721.claim(1);
          }}
        >
          Claim Ninja Pass
        </Web3Button>
      </section>
    </div>
  );
}
