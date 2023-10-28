const SectionTitleCenter = ({ slogan, title, description }) => {
  return (
    <div className="lg:p-0 p-2 lg:mb-8">
      <div className=" lg:space-y-3 space-y-2">
        <h4 className="text-red-600 font-bold lg:flex lg:justify-center">
          {slogan}
        </h4>
        <h1 className="lg:text-4xl lg:flex lg:justify-center font-extrabold">
          {title}
        </h1>
        <p className="lg:text-base lg:flex lg:text-center lg:mx-auto lg:w-1/2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionTitleCenter;
