const SectionContainer = (props) => {
  return (
    <div className="section-container flex flex-col px-10 md1:px-5 my-14 md1:my-0 text-white mx-auto">
      <h1 className="my-2 text-8xl md1:text-6xl md3:text-5xl font-black section-heading">
        {props.heading}
      </h1>
      <p className="my-4 text-xl md1:text-lg ml-auto">{props.description}</p>

      {props.children}
    </div>
  );
};

export default SectionContainer;
