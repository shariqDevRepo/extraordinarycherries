import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import logoImg from "../assets/images/logo.png";
import discordIcon from "../assets/images/discord-icon.svg";
import instagram from "../assets/images/instagram.svg";
import twittersvg from "../assets/images/twitter.svg";
import snapchat from "../assets/images/snapchat.svg";
import facebook from "../assets/images/facebook.svg";
import tiktok from "../assets/images/tiktok.svg";
import { socialLinks } from "../config";
type Nav = {
    isSection: boolean;
    url: string;
    title: string;
    setIsOpened: (state: boolean) => void;
};

const NavItem: FC<Nav> = ({ isSection = false, url, title, setIsOpened }) => {
    return (
        <li
            data-aos="zoom-in"
            data-aos-delay="300"
            onClick={() => setIsOpened(false)}
        >
            {isSection ? (
                <a
                    href={url}
                    className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                >
                    {title}
                </a>
            ) : (
                <Link
                    to={url}
                    className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                >
                    {title}
                </Link>
            )}
        </li>
    );
};

const NavigationBar = ({
    setIsWalletConnectorOpen,
    setIsAlreadyOpened,
}: {
    setIsWalletConnectorOpen: (state: boolean) => void;
    setIsAlreadyOpened: (state: boolean) => void;
}) => {
    const account = useAccount();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <>
            <nav className="fixed z-30 top-0 left-0 w-full">
                <div className="relative mx-auto container py-12 sm:py-14 px-4 sm:px-12">
                    <div className="h-[60px] lg:h-[80px] px-5 lg:px-8 bg-[#884BAC] border border-white/25 rounded-full flex justify-between items-center">
                        <ul className="hidden xl:flex gap-8">
                            <NavItem
                                title="About"
                                url="/#about"
                                isSection={true}
                                setIsOpened={setIsOpened}
                            />
                            <NavItem
                                title="Contest"
                                url="/contest"
                                isSection={false}
                                setIsOpened={setIsOpened}
                            />

                            <NavItem
                                title="Store"
                                url="/contest"
                                isSection={false}
                                setIsOpened={setIsOpened}
                            />

                            <NavItem
                                title="Faqs"
                                url="/faqs"
                                isSection={false}
                                setIsOpened={setIsOpened}
                            />
                            <NavItem
                                title="Milestone"
                                url="/milestone"
                                isSection={false}
                                setIsOpened={setIsOpened}
                            />
                            {/* <li
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                className="aos-init aos-animate"
                            >
                                <a
                                    className="font-secondary uppercase text-white hover:text-[#EEB13A] ts-1 duration-200"
                                    href="/#roadmap"
                                >
                                    Milestone
                                </a>
                            </li> */}
                        </ul>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 sm:gap-2 ">
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

                            <div
                                onClick={() => {
                                    if (account.status !== "connected") {
                                        setIsWalletConnectorOpen(true);
                                        setIsAlreadyOpened(true);
                                    }
                                }}
                                data-aos="zoom-in"
                                className="primary-btn-wrapper relative hidden xl:block"
                            >
                                <button className="relative z-10 w-[180px] h-[45px] pt-1.5 bg-white border border-[#0F1134] rounded-full flex justify-center items-center font-secondary uppercase text-[#0F1134]">
                                    {account.status === "connected"
                                        ? "Connected"
                                        : "JOIN WAITING LIST"}
                                </button>

                                <div className="primary-btn-lower-bg absolute top-1 left-1 w-full h-full bg-[#0F1134] rounded-full duration-200"></div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setIsOpened(true);
                            }}
                            data-aos="zoom-in"
                            className="flex xl:hidden"
                        >
                            <svg
                                width="25"
                                height="16"
                                viewBox="0 0 25 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_426_6)">
                                    <path
                                        d="M20.3947 0H1.31579C0.589099 0 0 0.596953 0 1.33333C0 2.06971 0.589099 2.66667 1.31579 2.66667H20.3947C21.1214 2.66667 21.7105 2.06971 21.7105 1.33333C21.7105 0.596953 21.1214 0 20.3947 0Z"
                                        fill="#ffffff"
                                    ></path>
                                    <path
                                        d="M23.6842 6.66667H4.60522C3.87853 6.66667 3.28943 7.2636 3.28943 8C3.28943 8.7364 3.87853 9.33333 4.60522 9.33333H23.6842C24.4109 9.33333 25 8.7364 25 8C25 7.2636 24.4109 6.66667 23.6842 6.66667Z"
                                        fill="#ffffff"
                                    ></path>
                                    <path
                                        d="M20.3947 13.3333H1.31579C0.589099 13.3333 0 13.9303 0 14.6667C0 15.4031 0.589099 16 1.31579 16H20.3947C21.1214 16 21.7105 15.4031 21.7105 14.6667C21.7105 13.9303 21.1214 13.3333 20.3947 13.3333Z"
                                        fill="#ffffff"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_426_6">
                                        <rect
                                            width="25"
                                            height="16"
                                            fill="white"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>

                    <Link
                        to={"/"}
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[100px] lg:w-[145px] h-[100px] lg:h-[145px] bg-[#0F1134] rounded-full flex justify-center items-center"
                    >
                        <img src={logoImg} alt="" className="w-[120px]" />
                    </Link>
                </div>
            </nav>

            <div
                className={`fixed z-30 top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center ${
                    isOpened
                        ? "opacity-1 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } duration-200`}
            >
                <div className="container h-full py-12 px-4 lg:px-12">
                    <div className="h-full pt-[110px]">
                        <div className="relative h-full bg-[#884BAC] border border-white/25 rounded-3xl flex flex-col justify-center items-center gap-8">
                            <button
                                onClick={() => {
                                    setIsOpened(false);
                                }}
                                data-aos="zoom-in"
                                className="absolute top-8 right-8"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_426_3)">
                                        <path
                                            d="M17.0103 15.1367L3.17123 1.29761C2.64413 0.770505 1.78951 0.770505 1.2624 1.29761C0.735288 1.82472 0.735288 2.67934 1.2624 3.20645L15.1015 17.0455C15.6286 17.5726 16.4832 17.5726 17.0103 17.0455C17.5374 16.5184 17.5374 15.6638 17.0103 15.1367Z"
                                            fill="#ffffff"
                                        ></path>
                                        <path
                                            d="M14.7935 0.954399L0.954413 14.7934C0.427305 15.3206 0.427305 16.1752 0.954413 16.7023C1.48153 17.2294 2.33614 17.2294 2.86325 16.7023L16.7023 2.86324C17.2295 2.33613 17.2295 1.48151 16.7023 0.954399C16.1752 0.427289 15.3206 0.427289 14.7935 0.954399Z"
                                            fill="#ffffff"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_426_3">
                                            <rect
                                                width="18"
                                                height="18"
                                                fill="white"
                                            ></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>

                            <ul className="flex flex-col justify-center items-center gap-4">
                                <NavItem
                                    title="About"
                                    url="/#about"
                                    isSection={true}
                                    setIsOpened={setIsOpened}
                                />
                                <NavItem
                                    title="Contest"
                                    url="/contest"
                                    isSection={false}
                                    setIsOpened={setIsOpened}
                                />
                                <NavItem
                                    title="Store"
                                    url="/contest"
                                    isSection={false}
                                    setIsOpened={setIsOpened}
                                />
                                <NavItem
                                    title="Faqs"
                                    url="/faqs"
                                    isSection={false}
                                    setIsOpened={setIsOpened}
                                />
                            </ul>

                            <div
                                onClick={() => {
                                    if (account.status !== "connected") {
                                        setIsWalletConnectorOpen(true);
                                        setIsAlreadyOpened(true);
                                    }
                                }}
                                data-aos="zoom-in"
                                className="primary-btn-wrapper relative"
                            >
                                <button className="relative z-10 w-[180px] h-[45px] pt-1.5 bg-white border border-[#0F1134] rounded-full flex justify-center items-center font-secondary uppercase text-[#0F1134]">
                                    {account.status === "connected"
                                        ? "Connected"
                                        : "JOIN WAITING LIST"}
                                </button>

                                <div className="primary-btn-lower-bg absolute top-1 left-1 w-full h-full bg-[#0F1134] rounded-full duration-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;
