import SectionContainer from "../ui/SectionContainer";

const NewsletterSection = () => {
  return (
    <div className="px-10 md1:px-0 py-10 text-center mb-12">
      <SectionContainer>
        <h1 className="sub-heading text-5xl font-black">
          Get Applied with Us!
        </h1>
        <div className="flex md1:flex-col items-center self-center">
          <a
            href="#"
            className="text-2xl text-center my-3 mr-2 border-b border-primary"
          >
            Sign Up for our newsletter
          </a>
          <img src="/assets/newsletter/cursor.svg" className="w-8" />
        </div>
      </SectionContainer>
    </div>
  );
};

export default NewsletterSection;
