const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-500 py-20">
        My Services
      </h1>

      <div className="flex max-w-lg gap-10 text-center ">
        <div className="border-2 border-purple-500  rounded-3xl py-8 px-5">
          <h1 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
            Web Development
          </h1>
          <p className=" mt-2 bg-clip-text text-md max-w-3xl bg-gradient-to-r text-white">
            I mostly create websites for small and medium-sized enterprises. I
            have experience with HTML, CSS, JavaScript, React, Next.js, Express,
            Node.js, and MongoDB. I offer full-service project management from
            the beginning to the end.
          </p>
        </div>
        <div className="border-2 border-purple-500  rounded-3xl py-8 px-5">
          <h1 className="text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
            Web Design
          </h1>
          <p className=" mt-2 bg-clip-text text-md max-w-3xl bg-gradient-to-r text-white">
           Modern and minimilistic 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
