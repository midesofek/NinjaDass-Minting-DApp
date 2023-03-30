import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <Link
          href={"/"}
          className={router.pathname == "/" ? styles.active : styles.link}
        >
          Claim
        </Link>
        <Link
          href={"/NFTs"}
          className={router.pathname == "/NFTs" ? styles.active : styles.link}
        >
          Ninja NFTs
        </Link>
        <Link
          href={"/Minted-NFTs"}
          className={
            router.pathname == "/Minted-NFTs" ? styles.active : styles.link
          }
        >
          MintedNFTs
        </Link>
      </div>
      <ConnectWallet colorMode="light" accentColor="#411111" />
    </div>
  );
}
