/* eslint-disable @next/next/no-img-element */

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="w-full py-[60px]">
      <div className="mx-auto flex items-center justify-center flex-col">
        <h2 className="text-4xl font-semibold text-[#ADB7BE] z-10 mb-5">
          Skills
        </h2>
        <p className="text-[#ADB7BE] md:mb-[50px] mb-[20px] text-center">
          It's important to master basic skills as a web developer. <br></br>{" "}
          Below are the basic skills I have mastered as a web developer. and
          apart from fundamental skills, <br></br> I also master several
          frameworks and libraries from the programming languages ​​below
        </p>

        <div className="flex w-full items-center justify-center md:gap-[60px] gap-5 text-[#ADB7BE]">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="md:w-[120px] md:h-[120px] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]">
              <img src="/images/meter1.svg" alt="Image" />
            </div>
            <h5>PHP</h5>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 text-[#ADB7BE]">
            <div className="md:w-[120px] md:h-[120px] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]">
              <img src="/images/meter2.svg" alt="Image" />
            </div>
            <h5>JavaScript</h5>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 text-[#ADB7BE]">
            <div className="md:w-[120px] md:h-[120px] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]">
              <img src="/images/meter3.svg" alt="Image" />
            </div>
            <h5>Database</h5>
          </div>

          <div className="flex flex-col items-center justify-center space-y-3 text-[#ADB7BE]">
            <div className="md:w-[120px] md:h-[120px] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]">
              <img src="/images/meter1.svg" alt="Image" />
            </div>
            <h5>API</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
