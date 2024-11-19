import backstoryImg1 from "../assets/images/backstory-1.png";

const BackstorySection = () => {
  return (
    <section
      id="backstory"
      className="mt-32 pt-32 bg-[url('/backstory-section-bg.png')] bg-cover bg-top"
    >
      <div className="mx-auto container px-4 sm:px-12 flex flex-col items-center">
        <h2
          data-aos="fade-down"
          className="mb-8 font-secondary text-5xl lg:text-6xl text-center uppercase text-white ts-2"
        >
          Backstory of EOC
        </h2>

        <div className="relative -mb-16">
          <img
            data-aos="flip-down"
            data-aos-delay="300"
            src={backstoryImg1}
            alt=""
            className="w-[450px] lg:w-[550px] min-w-[450px] animated-bg"
          />

          <div data-aos="zoom-in" data-aos-delay="300">
            <p className="absolute bottom-4 lg:bottom-5 left-1/2 -translate-x-1/2 w-full max-w-[300px] lg:max-w-[400px] text-sm lg:text-base font-medium text-center text-[#0F1134]">
              Extraordinary Cherries NFT is a collection of 10,275 uniquely and
              randomly grown Cherries who had transmuted into different cherry
              species. These unique digital collectibles are living on the
              Ethereum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackstorySection;
