const NFTCard = (props) => {
  return (
    <div className="flex flex-col nft-card px-5 cursor-pointer">
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center">
          <img src={props.user} className="w-12 h-12 mr-1" alt="user-1" />
          <span>@knight</span>
        </div>
        <div className="flex items-center">
          <img src="/assets/nfts/star.svg" alt="star" className="mr-1" />
          <span>213</span>
        </div>
      </div>
      <img src={props.img} alt="nft-1" className="-72" />
      <div className="my-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-primary text-lg md1:text-base">
            Current bid
          </span>
          <span className="text-2xl md1:text-xl font-black">0.54 ETH</span>
        </div>

        <div className="flex flex-col">
          <span className="text-primary text-xl md1:text-base text-right">
            Ending in
          </span>
          <span className="text-2xl md1:text-xl font-black">12h 55m 2s</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
