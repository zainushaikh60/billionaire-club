import Button from "../ui/Button";

const HeroInformation = () => {
  return (
    <div className="flex flex-col text-white justify-center px-10 md1:px-0">
      <div className="flex flex-col justify-start md1:justify-center md1:text-center">
        <h1 className="text-8xl md1:text-6xl md3:text-5xl font-black">
          EXCLUSIVE
        </h1>
        <span className="md1:ml-0 text-4xl self-end md1:self-center sub-heading">
          newest NFT release
        </span>
        <p className="my-10 md1:my-3 text-right md1:text-center">
          The BILLIONAIRE CLUB is a private collection of 10 000 billionaire
          apes NFTs—unique digital collectibles. The apes are stored as ERC-721
          tokens on the Ethereum blockchain and hosted on IPFS.{" "}
          <span className="text-primary">Reveal on October 20th</span>
        </p>
      </div>

      <form className="flex items-center md1:flex-col self-end md1:self-center">
        <div className="border border-primary h-14 w-72 mr-2 md1:mr-0">
          <input
            className="bg-transparent text-center h-full w-full"
            placeholder="your@email.com"
          />
        </div>

        <Button
          height="h-14"
          padding="px-16"
          title="Register"
          class="md1:mt-2 md1:w-full"
        />
      </form>
    </div>
  );
};

export default HeroInformation;
