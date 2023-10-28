const SectionTitle = ({ slogan, title, description }) => {
  return (
    <div className="">
      <div className=" lg:space-y-3 space-y-2">
        <h4 className="text-red-600 text-xl font-bold">{slogan}</h4>
        <h1 className="lg:text-4xl font-extrabold">{title}</h1>
        <p className="lg:text-base lg:my-10 my-2">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
