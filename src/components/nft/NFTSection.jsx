import SectionContainer from "../ui/SectionContainer";
import NFTCard from "./NFTCard";

const NFTSection = () => {
  return (
    <div>
      <SectionContainer
        heading="Collections"
        description="With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities."
      >
        <div className="grid md1:grid-cols-2 md2:grid-cols-1 grid-cols-3 gap-x-10 gap-y-14 md2:gap-y-6 my-4">
          <NFTCard
            user="/assets/users/user-1.png"
            img="/assets/nfts/nft-1.png"
          />
          <NFTCard
            user="/assets/users/user-2.png"
            img="/assets/nfts/nft-2.png"
          />
          <NFTCard
            user="/assets/users/user-3.png"
            img="/assets/nfts/nft-3.png"
          />
          <NFTCard
            user="/assets/users/user-1.png"
            img="/assets/nfts/nft-4.png"
          />
          <NFTCard
            user="/assets/users/user-2.png"
            img="/assets/nfts/nft-5.png"
          />
          <NFTCard
            user="/assets/users/user-3.png"
            img="/assets/nfts/nft-6.png"
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default NFTSection;
