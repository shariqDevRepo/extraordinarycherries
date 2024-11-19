import { FC, Fragment, useEffect, useState } from "react";
import roadmapImg5 from "../assets/images/roadmap-5.png";
import roadmapImg6 from "../assets/images/roadmap-6.png";
import Aos from "aos";



// type Point = {
//     title?: string;
//     description: string;
//     isHtml?: boolean;
// };

type Content = {
    title: string;
    year: number;
    points: (
        | {
              description: string;
              title?: undefined;
          }
        | {
              title: string;
              description: string;
          }
        | {
              title: string;
              description?: undefined;
          }
    )[];
    image?: string;
    color: string;
};
const RoadmapSection: FC<{
    Content: Content[];
    title: string;
    description?: string;
    type: string;
}> = ({ Content, title, type, description }) => {
    const [activePhase, setActivePhase] = useState<number>(1);

    useEffect(() => {
        Aos.refresh(); // Refresh AOS animations when activePhase changes
    }, [activePhase]);

    return (
        <section id="roadmap" className="mt-[120px] pt-32">
            <div className="mx-auto container px-4 sm:px-12">
                <h2
                    data-aos="fade-down"
                    className="font-secondary text-5xl lg:text-6xl text-center uppercase text-white ts-2"
                >
                    {title}
                </h2>

                {description && (
                    <p className="text-center p-12 text-sm lg:text-lg font-medium text-white">
                        {description}
                    </p>
                )}

                <div className="pt-16 overflow-x-scroll no-scrollbar">
                    <div className="min-w-[550px]">
                        <div className="flex justify-around">
                            {Content.map((cont, i) => (
                                <div
                                    key={i + 1}
                                    onClick={() => {
                                        setActivePhase(i + 1);
                                    }}
                                    className="hover:-translate-y-[18px] -mb-[27px] lg:-mb-[35px] flex flex-col items-center cursor-pointer duration-200"
                                >
                                    <h3 className="mb-2 font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                        {type} {i + 1}
                                    </h3>

                                    <p className="mb-3 lg:text-lg font-medium text-center text-white">
                                        {cont.year}
                                    </p>

                                    <div className="w-[2px] h-[40px] bg-white"></div>

                                    <div className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] bg-[#98CAFF] rounded-full flex justify-center items-center">
                                        <div className="w-[20px] lg:w-[25px] h-[20px] lg:h-[25px] bg-[#0F1134] rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-24 w-full h-[20px] border border-[#0F1134] bg-white rounded-full"></div>
                    </div>
                </div>

                <div
                    data-aos="flip-up"
                    data-aos-delay="300"
                    className="relative"
                >
                    {Content.map((cont, i) => (
                        <div
                            key={i}
                            className={`border border-[#0F1134] bg-[#884BAC] rounded-3xl ${
                                activePhase === i + 1 ? "lg:flex" : "hidden"
                            } overflow-hidden`}
                        >
                            <div
                                className={`relative w-full lg:w-[200px] pt-20 pb-8 lg:p-0 bg-[${cont.color}]`}
                            >
                                <h2 className="lg:absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:-rotate-90 font-secondary text-5xl lg:text-6xl text-center uppercase whitespace-nowrap text-white ts-2">
                                    {type} 0{i + 1}
                                </h2>
                            </div>

                            <div className="py-16 lg:py-24 px-6 lg:px-12 flex flex-1 flex-col xl:flex-row xl:items-center gap-12">
                                {cont?.image && (
                                    <img
                                        src={cont.image}
                                        alt=""
                                        className="w-full max-w-[300px] border border-[#0F1134] rounded-2xl animated-bg"
                                    />
                                )}

                                <div>
                                    <h3 className="mb-6 font-secondary text-4xl lg:text-5xl uppercase text-white ts-2">
                                        {cont.title}
                                    </h3>

                                    <p className="text-sm lg:text-lg font-medium text-white">
                                        {cont.points.map((point, index) => (
                                            <Fragment key={index + 1}>
                                                {point?.title}
                                                {point?.description && (
                                                    <span
                                                        className="text-white/75"
                                                        dangerouslySetInnerHTML={{
                                                            __html: point.description,
                                                        }}
                                                    ></span>
                                                )}{" "}
                                                <br />
                                                <br />
                                            </Fragment>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <img
                        src={roadmapImg5}
                        alt=""
                        className="absolute -top-[39px] -right-[39px] w-[250px]"
                    />

                    <img
                        src={roadmapImg6}
                        alt=""
                        className="absolute -bottom-[60px] right-36 w-[500px] min-w-[500px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
