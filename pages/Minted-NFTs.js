import styles from "../styles/NFTs.module.css";
import Header from "../components/Header";
import {
  useContract,
  useNFTs,
  ThirdwebNftMedia,
  useAddress,
} from "@thirdweb-dev/react";

export default function MintedNFTs() {
  const { contract } = useContract(
    "0x0dB40290F8122CFeB1f086601318e238692fDcDA"
  );
  const address = useAddress();
  const { data: nfts, isLoading, error } = useNFTs(contract);

  // console.log(nfts);

  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.info}>
        {isLoading ? (
          <p> Loading NFTs...</p>
        ) : (
          nfts
            ?.filter((nft) => nft.owner == address)
            ?.map((nft) => {
              return (
                <div key={nft.metadata.id}>
                  <ThirdwebNftMedia
                    metadata={nft.metadata}
                    height="200"
                    style={{ borderRadius: "10px" }}
                  />
                  <p>
                    ID: {nft.metadata.id} | {nft.metadata.name}
                  </p>
                </div>
              );
            })
        )}
      </section>
    </div>
  );
}
