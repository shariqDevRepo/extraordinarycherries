import aboutSectionImg1 from "../assets/images/about-section-1.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative mt-12 py-36 bg-[url('/about-section-bg.png')] bg-cover bg-top"
    >
      <div className="relative z-10 mx-auto container px-4 sm:px-12 flex flex-col items-center gap-4">
        <h2
          data-aos="fade-down"
          className="font-secondary text-5xl lg:text-6xl text-center uppercase text-white ts-2"
        >
          About EOC
        </h2>

        <p
          data-aos="zoom-in"
          className="max-w-[850px] lg:text-lg font-medium text-center text-[#0F1134]"
        >
          Extraordinary Cherries NFT is a collection of 10,275 uniquely and
          randomly grown Cherries who had transmuted into different cherry
          species. These unique digital collectibles are living on the Ethereum
          blockchain.
        </p>

        <img
          data-aos="flip-up"
          data-aos-delay="300"
          src={aboutSectionImg1}
          alt=""
          className="-mb-52 w-full max-w-[800px] animated-bg"
        />
      </div>

      <div className="about-section-left-shape absolute top-full left-0 w-[40%] h-[120px] bg-[#9E721B]"></div>
      <div className="about-section-right-shape absolute top-full right-0 w-[40%] h-[120px] bg-[#9E721B]"></div>
    </section>
  );
};

export default AboutSection;
