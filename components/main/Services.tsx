const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Services
      </h1>
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 py-20">
        Web development & Ui/Ux Desing
      </h1>
      <p className=" bg-clip-text text-lg max-w-3xl bg-gradient-to-r text-white">
        I mostly create websites for small and medium-sized enterprises. I have
        experience with HTML, CSS, JavaScript, React, Next.js, Express, Node.js,
        and MongoDB. I offer full-service project management from the beginning
        to the end.
      </p>
    </div>
  );
};

export default Services;
