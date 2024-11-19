import { FC, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import emailjs from "@emailjs/browser";
import { countryCodes } from "../Content/CountryCodes";
import { toast } from "react-toastify";

const WalletConnector = ({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
}) => {
    const account = useAccount();
    // const { connectors, connect } = useConnect();

    const handleCloseModal = () => {
        setIsOpen(false); // Close the modal
        localStorage.setItem("popupClosed", "true"); // Mark it as closed in localStorage
    };

    useEffect(() => {
        if (account.status === "connected") {
            setIsOpen(false); // Close modal when wallet is connected
        }
    }, [account, setIsOpen]);

    return (
        <div
            className={`fixed top-0 left-0 z-30 w-full h-full bg-black/75 flex justify-center items-center ${
                !isOpen && "opacity-0 pointer-events-none"
            } duration-300`}
        >
            <div className="mx-auto container px-4 sm:px-12 flex justify-center">
                <div className="relative w-full max-w-[550px] p-10 pt-16 bg-[#884BAC] border border-white/25 rounded-3xl">
                    <button
                       onClick={handleCloseModal} // Close the modal manually
                        className="absolute top-6 right-6"
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

                    <h3 className="mb-6 font-secondary text-2xl lg:text-3xl text-center uppercase text-white ts-1">
                        STAY UP TO DATE FOR WHITELIST
                    </h3>

                    {/* Pass setIsOpen to the InputFiles component */}
                    <InputFiles setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    );
};

        const InputFiles: FC<{ setIsOpen: (state: boolean) => void }> = ({ setIsOpen }) => {
            const [formData, setFormData] = useState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                countryCode: "",
            });

            // Check localStorage for popupClosed flag on mount
            useEffect(() => {
                const popupClosed = localStorage.getItem("popupClosed");
                if (!popupClosed) {
                    setIsOpen(true); // Show the popup if not closed before
                }
            }, [setIsOpen]);

            const handleChange = (
                e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value });
            };

            const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault();
                try {
                    await emailjs.send(
                        "service_chvmjc3",
                        "template_vibj18q",
                        {
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            phone: `${formData.countryCode} ${formData.phone}`,
                        },
                        {
                            publicKey: "XU9H_hwvI74EoBsKr",
                        }
                    );
                    toast.success("Form submitted successfully!");
                    setIsOpen(false); // Close the modal after successful form submission
                    // Mark the popup as closed in localStorage
                    localStorage.setItem("popupClosed", "true");
                } catch (error) {
                    console.log(error);
                    toast.error("Something went wrong. Please try again later.");
                }
            };

            // const handleClose = () => {
            //     // Manually close the popup and set the flag
            //     setIsOpen(false);
            //     localStorage.setItem("popupClosed", "true");
            // };

            return (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-1">
                    <input
                        className="p-2 pl-5 border-none outline-none rounded-full"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-2 pl-5 border-none outline-none rounded-full"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="p-2 pl-5 border-none outline-none rounded-full"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="phone pl-5 flex rounded-full bg-white overflow-hidden">
                        <select
                            className="flex-none w-42 outline-none"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                        >
                            {countryCodes.map((country, index) => (
                                <option key={index} value={country.code}>
                                    {country.code} {country.name}
                                </option>
                            ))}
                        </select>
                        <input
                            className="p-2 flex-auto pl-5 border-none outline-none bg-transparent"
                            type="number"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white p-3 text-center uppercase rounded-full font-secondary bg-black/75"
                    >
                        Submit
                    </button>
                    {/* <button
                        type="button"
                        onClick={handleClose} // Close the modal manually
                        className="mt-2 p-2 text-center uppercase rounded-full bg-red-500"
                    >
                        Close Popup
                    </button> */}
                </form>
            );
        };

export default WalletConnector;
