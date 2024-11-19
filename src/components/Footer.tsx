import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo.png";
import discordIcon from "../assets/images/discord-icon.svg";
import openseaIcon from "../assets/images/opensea-icon.svg";
import telegramIcon from "../assets/images/telegram-icon.svg";
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
                            href="/#roadmap"
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            Roadmap
                        </a>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="200">
                        <a
                            href="/#backstory"
                            className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                        >
                            Backstory
                        </a>
                    </li>
                    <li data-aos="zoom-in" data-aos-delay="300">
                        <a
                            href="/#team"
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
                        <img src={discordIcon} alt="" className="w-[26px]" />
                    </Link>

                    <Link
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        to={"/"}
                        target="_blank"
                        className="hover:scale-90 duration-200"
                    >
                        <img src={openseaIcon} alt="" className="w-[26px]" />
                    </Link>

                    <Link
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        to={"/"}
                        target="_blank"
                        className="hover:scale-90 duration-200"
                    >
                        <img src={telegramIcon} alt="" className="w-[26px]" />
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
