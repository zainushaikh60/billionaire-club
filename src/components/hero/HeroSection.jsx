import SectionContainer from "../ui/SectionContainer";
import HeroAvatar from "./HeroAvatar";
import HeroInformation from "./HeroInformation";

const HeroSection = () => {
  return (
    <div>
      <SectionContainer>
        <div className="grid grid-cols-2 md1:grid-cols-1 md1:items-center md1:space-x-0 space-x-2 my-10 mx-auto px-10 md1:px-0">
          <HeroAvatar />
          <HeroInformation />
        </div>
      </SectionContainer>
    </div>
  );
};

export default HeroSection;
