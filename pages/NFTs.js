import styles from "../styles/NFTs.module.css";
import Header from "../components/Header";
import { useContract, useNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";

export default function NFTs() {
  const { contract } = useContract(
    "0x0dB40290F8122CFeB1f086601318e238692fDcDA"
  );
  const { data: nfts, isLoading, error } = useNFTs(contract);

  // console.log(nfts);

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.info}>
        {isLoading ? (
          <p> Loading NFTs...</p>
        ) : (
          nfts?.map((nft) => {
            return (
              <div key={nft.metadata.id}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  height="200"
                  style={{ borderRadius: "10px" }}
                />
                <p>{nft.metadata.name}</p>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
