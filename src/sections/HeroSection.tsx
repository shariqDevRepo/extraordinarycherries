import { Link } from "react-router-dom";
import { socialLinks } from "../config";
import "../App.css"


  const HeroSection = () => {

    return (
        <section className="relative pt-16 sm:pt-14 ">
            <div
                className="
                  absolute z-10 top-0 left-0 w-full h-full
                  bg-[url('/bg-image.png')] bg-cover bg-bottom
                "
            ></div>

            <div className="mx-auto container px-4 sm:px-12 pt-[80px] z-20 relative">
                <div className="pt-16 lg:pt-32 pb-[85vw] sm:pb-[35vw] lg:pb-[25vw] flex flex-col items-center gap-4">
                    <h1
                        data-aos="fade-down"
                        data-aos-delay="600"
                        className="font-secondary text-5xl lg:text-6xl xl:text-7xl text-center uppercase text-white ts-2 hero-banner-heading"
                    >
                       Welcome to <span className="blue">t</span>he <span className="pink">w</span>orld <span className="green">o</span>f <br className="hidden lg:block" />{" "}
                        <span className="yellow">e</span>xtraordinary <span className="brown">c</span>herries
                    </h1>

                    <p
                        data-aos="fade-down"
                        data-aos-delay="300"
                        className="max-w-[850px] lg:text-lg font-medium text-center text-white"
                    >
                        Extraordinary Cherries NFT is a collection of 10,275
                        uniquely and randomly grown Cherries who had transmuted
                        into different cherry species. These unique digital
                        collectibles are living on the Ethereum blockchain.
                    </p>

                    <div
                        data-aos="zoom-in"
                        className="primary-btn-wrapper relative mt-4"
                    >
                        <Link
                            to={socialLinks.discord}
                            target="_blank"
                            className="relative z-10 w-[180px] h-[50px] bg-white border border-[#0F1134] rounded-full flex justify-center items-center gap-2 font-secondary lg:text-lg uppercase text-[#693587]"
                        >
                            <svg
                                width="24"
                                height="27"
                                viewBox="0 0 24 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.02563 0.57605H20.5558C20.9088 0.576953 21.2581 0.64737 21.5839 0.783282C21.9096 0.919194 22.2054 1.11794 22.4544 1.36817C22.7033 1.61839 22.9006 1.91521 23.0348 2.24166C23.1691 2.56811 23.2377 2.9178 23.2368 3.27078V26.7384L20.4222 24.2516L18.8401 22.7865L17.1643 21.2292L17.8597 23.6513H3.02563C1.54814 23.6513 0.344674 22.4478 0.344674 20.9566V3.27078C0.343769 2.9178 0.412396 2.56811 0.546637 2.24166C0.680878 1.91521 0.878104 1.61839 1.12705 1.36817C1.376 1.11794 1.6718 0.919194 1.99756 0.783282C2.32332 0.64737 2.67266 0.576953 3.02563 0.57605ZM14.6431 16.5985C15.0342 17.0983 15.5051 17.6601 15.5051 17.6601C18.3477 17.5694 19.4698 15.7355 19.507 15.6747C19.5076 15.6736 19.5079 15.6731 19.5079 15.6731C19.5079 11.461 17.6242 8.04748 17.6242 8.04748C15.7419 6.63333 13.9491 6.67327 13.9491 6.67327L13.766 6.88257C15.9898 7.56279 17.0239 8.54319 17.0239 8.54319C15.0192 7.43895 12.7129 7.00789 10.4447 7.31356C10.3802 7.31356 10.3241 7.32286 10.2626 7.33305C10.2492 7.33526 10.2357 7.33751 10.2217 7.33972C9.76314 7.37965 8.65192 7.55039 7.25292 8.16452C6.76961 8.38621 6.48044 8.54319 6.48044 8.54319C6.48044 8.54319 7.56687 7.51046 9.92149 6.82886L9.79068 6.67189C9.79068 6.67189 7.99924 6.63196 6.11555 8.0461C6.11555 8.0461 4.23186 11.4596 4.23186 15.6718C4.23186 15.6718 5.3293 17.5678 8.21956 17.6601C8.21956 17.6601 8.70425 17.0694 9.09668 16.5737C7.43468 16.0766 6.80679 15.0301 6.80679 15.0301C6.80679 15.0301 6.9376 15.121 7.17306 15.2504C7.18783 15.2678 7.20614 15.2819 7.22676 15.2917C7.24481 15.304 7.26285 15.3129 7.28103 15.3219C7.30171 15.3321 7.32256 15.3424 7.3438 15.3578C7.65106 15.5275 7.96993 15.6752 8.29804 15.7998C8.92017 16.0464 9.56362 16.2354 10.2203 16.3644C11.9974 16.7056 13.8358 16.515 15.5051 15.8163C15.9636 15.6456 16.4731 15.395 17.0101 15.0425C17.0101 15.0425 16.3561 16.1138 14.6431 16.5985ZM8.08881 13.0046C8.08881 12.2059 8.67677 11.5518 9.42309 11.5518C10.168 11.5518 10.7711 12.2045 10.756 13.0046C10.756 13.8004 10.168 14.4573 9.42309 14.4573C8.69054 14.4573 8.08881 13.8004 8.08881 13.0046ZM12.8641 13.0046C12.8641 12.2059 13.4521 11.5518 14.1984 11.5518C14.9434 11.5518 15.5299 12.2045 15.5313 13.0046C15.5313 13.8004 14.9434 14.4573 14.1984 14.4573C13.4659 14.4573 12.8641 13.8004 12.8641 13.0046Z"
                                    fill="#693587"
                                />
                            </svg>
                            <span className="pt-1.5">Discord</span>
                        </Link>

                        <div className="primary-btn-lower-bg absolute top-1.5 left-1.5 w-full h-full bg-[#0F1134] rounded-full duration-200"></div>
                    </div>
                </div>
            </div>
                        
              
        </section>
    );
};

export default HeroSection;
