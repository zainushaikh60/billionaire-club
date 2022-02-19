import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

const BannerSection = () => {
  return (
    <div className="banner-section px-10 md1:px-0 py-10 my-10">
      <SectionContainer>
        <div className="flex md1:flex-col justify-between md1:justify-start items-center">
          <div className="flex flex-col md1:order-2 md1:w-full md1:text-center md1:-mt-24">
            <h3 className="banner-text text-7xl md1:text-5xl font-black">
              The Golden Guests
            </h3>
            <p className="my-2">
              The Golden Guests edition by the Billionaire Club are the rarest
              NFTs. They are all hand drawn and have no element in common with
              the regular collection.
            </p>
            <div className="bg-black self-start md1:self-center relative w-96 md1:w-60 h-14">
              <Button
                height="h-14"
                title="Join us to register for the Pre-Sale"
                class="absolute top-2 left-2 w-full banner-btn self-start shadow-2xl border-2 border-black"
              />
            </div>
          </div>

          <div className="flex items-center md1:-mt-36">
            <img
              src="/assets/banner/banner.svg"
              alt="banner"
              className="md1:h-96"
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default BannerSection;
