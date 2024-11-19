import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import discordIcon from "../assets/images/discord-icon.svg";
import instagram from "../assets/images/instagram.svg";
import twittersvg from "../assets/images/twitter.svg";
import snapchat from "../assets/images/snapchat.svg";
import facebook from "../assets/images/facebook.svg";
import tiktok from "../assets/images/tiktok.svg";
import { socialLinks } from "../config";

const Footer = () => {
    return (
        <footer className="pb-16">
            <div className="mx-auto container px-4 sm:px-12 flex flex-col items-center">
                <Link data-aos="fade-down" to={"/"}>
                    <img src={logoImg} alt="" className="w-[120px]" />
                </Link>

                <ul className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-8">
                    <li data-aos="zoom-in">
                        <a
                            href="/#about"
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            About
                        </a>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="100">
                        <a
                            href="#roadmap"
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            Roadmap
                        </a>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="200">
                        <a
                            href="#backstory"
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            Backstory
                        </a>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="300">
                        <a
                            href="#team"
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            Team
                        </a>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="400">
                        <Link
                            to={"/faqs"}
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            FAQs
                        </Link>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="400">
                        <Link
                            to={"/terms-and-condtions"}
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            Terms And Conditions
                        </Link>
                    </li>
                </ul>

                <div className="my-8 flex items-center gap-4">
                <Link
                                    data-aos="zoom-in"
                                    to={socialLinks.discord}
                                    target="_blank"
                                    className="hover:scale-90 duration-200"
                                >
                                    <img
                                        src={discordIcon}
                                        alt=""
                                        className="w-[22px] sm:w-[26px]"
                                    />
                                </Link>

                                <Link
                                    data-aos="zoom-in"
                                    data-aos-delay="100"
                                    to={socialLinks.twitter}
                                    target="_blank"
                                    className="hover:scale-90 duration-200"
                                >
                                    <img
                                        src={twittersvg}
                                        alt=""
                                        className="w-[22px] sm:w-[26px]"
                                    />
                                </Link>

                                <Link
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    to={socialLinks.instagram}
                                    target="_blank"
                                    className="hover:scale-90 duration-200"
                                >
                                    <img
                                        src={instagram}
                                        alt=""
                                        className="w-[22px] sm:w-[26px]"
                                    />
                                </Link>

                                <Link
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    to={socialLinks.facebook}
                                    target="_blank"
                                    className="hover:scale-90 duration-200"
                                >
                                    <img
                                        src={facebook}
                                        alt=""
                                        className="w-[22px] sm:w-[26px]"
                                    />
                                </Link>

                                <Link
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    to={socialLinks.snapchat}
                                    target="_blank"
                                    className="hover:scale-90 duration-200"
                                >
                                    <img
                                        src={snapchat}
                                        alt=""
                                        className="w-[22px] sm:w-[26px]"
                                    />
                                </Link>

                                <Link
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    to={socialLinks.tiktok}
                                    target="_blank"
                                    className="hover:scale-90 duration-200"
                                >
                                    <img
                                        src={tiktok}
                                        alt=""
                                        className="w-[22px] sm:w-[26px]"
                                    />
                                </Link>
                </div>

                <p className="text-sm font-medium text-center text-white">
                    &copy; Copyright 2024 All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
