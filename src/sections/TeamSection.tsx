import teamImg1 from "../assets/images/team-1.png";
import teamImg2 from "../assets/images/team-2.png";
import teamImg3 from "../assets/images/team-3.png";

const TeamSection = () => {
  return (
    <section id="team" className="pt-32">
      <div className="mx-auto container pt-16 px-12">
        <h2
          data-aos="fade-down"
          className="mb-40 font-secondary text-5xl lg:text-6xl text-center uppercase text-white ts-2"
        >
          The EOC Team
        </h2>

        <div className="grid lg:grid-cols-3 justify-center gap-24">
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="max-w-[420px] p-8 border border-[#0F1134] bg-[#F7B663] rounded-3xl"
          >
            <img src={teamImg1} alt="" className="-mt-44 mb-5 w-full animated-bg" />

            <div className="p-5 border border-[#0F1134] bg-white rounded-2xl">
              <h4 className="font-secondary text-xl sm:text-2xl text-center uppercase text-[#0F1134]">
                Member 1
              </h4>

              <p className="font-medium text-center text-[#0F1134]">Founder</p>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="max-w-[420px] p-8 border border-[#0F1134] bg-[#B8D2AB] rounded-3xl"
          >
            <img src={teamImg2} alt="" className="-mt-44 mb-5 w-full animated-bg" />

            <div className="p-5 border border-[#0F1134] bg-white rounded-2xl">
              <h4 className="font-secondary text-xl sm:text-2xl text-center uppercase text-[#0F1134]">
                Member 2
              </h4>

              <p className="font-medium text-center text-[#0F1134]">Artist</p>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="max-w-[420px] p-8 border border-[#0F1134] bg-[#F76EF2] rounded-3xl"
          >
            <img src={teamImg3} alt="" className="-mt-44 mb-5 w-full animated-bg" />

            <div className="p-5 border border-[#0F1134] bg-white rounded-2xl">
              <h4 className="font-secondary text-xl sm:text-2xl text-center uppercase text-[#0F1134]">
                Member 3
              </h4>

              <p className="font-medium text-center text-[#0F1134]">
                Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
