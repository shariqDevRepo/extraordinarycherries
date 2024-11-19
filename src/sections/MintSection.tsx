import { useEffect, useState } from "react";
import { useAccount, useReadContracts } from "wagmi";
import { formatEther } from "viem";
import { config } from "../wagmi";
import { smartContractABI } from "../abis.json";
import { whitelistMint, mint } from "../dapp-functions";
import mintSectionImg1 from "../assets/images/mint-section-1.png";
import { toast } from "react-toastify";

const smartContract = {
    abi: smartContractABI,
    address: import.meta.env.VITE_SMART_CONTRACT_ADDRESS,
};

const MintSection = ({
    setIsWalletConnectorOpen,
}: {
    setIsWalletConnectorOpen: (state: boolean) => void;
}) => {
    const account = useAccount();

    const [quantity, setQuantity] = useState<number>(1);
    const [minting, setMinting] = useState<boolean>(false);

    const [paused, setPaused] = useState<boolean>(false);
    const [whitelistSale, setWhitelistSale] = useState<boolean>(false);
    // @ts-ignore
    const [publicSale, setPublicSale] = useState<boolean>(false);
    const [maxWhitelistMintLimitPerWallet, setMaxWhitelistMintLimitPerWallet] =
        useState<number>(0);
    const [maxMintLimitPerWallet, setMaxMintLimitPerWallet] =
        useState<number>(0);
    const [whitelistPrice, setWhitelistPrice] = useState<string>("0");
    const [price, setPrice] = useState<string>("0");

    const result = useReadContracts({
        contracts: [
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "paused",
            },
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "whitelistSale",
            },
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "publicSale",
            },
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "maxWhitelistMintLimitPerWallet",
            },
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "maxMintLimitPerWallet",
            },
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "whitelistPrice",
            },
            {
                ...smartContract,
                chainId: config.chains[0].id,
                functionName: "price",
            },
        ],
    });

    useEffect(() => {
        if (result.data) {
            setPaused(result.data[0].result as boolean);
            setWhitelistSale(result.data[1].result as boolean);
            setPublicSale(result.data[2].result as boolean);

            setMaxWhitelistMintLimitPerWallet(
                parseInt(result.data[3].result as string)
            );
            setMaxMintLimitPerWallet(parseInt(result.data[4].result as string));

            const whitelistPriceWei: bigint = BigInt(
                (result.data[5].result as string) || "0"
            );
            setWhitelistPrice(formatEther(whitelistPriceWei));

            const priceWei: bigint = BigInt(
                (result.data[6].result as string) || "0"
            );
            setPrice(formatEther(priceWei));
        }
    }, [result]);

    return (
        <section className="relative pt-12 sm:pt-14 pb-32">
            <div className="mx-auto container px-4 sm:px-12 pt-[80px]">
                <div className="pt-16 lg:pt-32 flex flex-col items-center">
                    <h2
                        data-aos="fade-down"
                        className="mb-4 font-secondary text-5xl lg:text-6xl text-center uppercase text-white ts-2"
                    >
                        Mint Your EOC <br /> NFTs Now!
                    </h2>

                    <p
                        data-aos="zoom-in"
                        className="mb-16 max-w-[700px] font-medium text-center text-white"
                    >
                        Extraordinary Cherries NFT is a collection of 10,000
                        uniquely and randomly grown Cherries who had transmuted
                        into different cherry species. These unique digital
                        collectibles are living on the Ethereum blockchain.
                    </p>

                    <div
                        className={`w-full border border-[#0F1134] bg-[url('/mint-box-bg.png')] bg-cover rounded-8xl lg:flex overflow-hidden`}
                    >
                        <div className="relative w-full lg:w-[400px] min-h-[250px] lg:border-r border-[#0F1134] rounded-8xl overflow-hidden">
                            <img
                                src={mintSectionImg1}
                                alt=""
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>

                        <div className="py-16 lg:py-24 px-6 lg:px-12 flex-1">
                            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="pt-10 p-8 border border-[#0F1134] bg-[#85B0DE] rounded-3xl">
                                    <h3 className="font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                        Mint Price
                                    </h3>
                                </div>

                                <div className="pt-10 p-8 border border-[#0F1134] bg-[#85B0DE] rounded-3xl">
                                    <h3 className="font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                        {whitelistSale ? whitelistPrice : price}{" "}
                                        ETH Each
                                    </h3>
                                </div>
                            </div>

                            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-8">
                                <div className="flex items-center gap-6">
                                    <button
                                        onClick={() => {
                                            if (quantity > 1) {
                                                setQuantity(quantity - 1);
                                            }
                                        }}
                                        className="w-[80px] pt-6 p-5 border border-[#0F1134] bg-[#EEB13A] rounded-3xl font-secondary text-lg lg:text-xl uppercase text-white ts-1 hover:scale-90 duration-200"
                                    >
                                        -
                                    </button>

                                    <h3 className="font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                        0{quantity}
                                    </h3>

                                    <button
                                        onClick={() => {
                                            if (whitelistSale) {
                                                if (
                                                    quantity <
                                                    maxWhitelistMintLimitPerWallet
                                                ) {
                                                    setQuantity(quantity + 1);
                                                }
                                            } else {
                                                if (
                                                    quantity <
                                                    maxMintLimitPerWallet
                                                ) {
                                                    setQuantity(quantity + 1);
                                                }
                                            }
                                        }}
                                        className="w-[80px] pt-6 p-5 border border-[#0F1134] bg-[#EEB13A] rounded-3xl font-secondary text-lg lg:text-xl uppercase text-white ts-1 hover:scale-90 duration-200"
                                    >
                                        +
                                    </button>
                                </div>

                                <h3 className="font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                    {whitelistSale
                                        ? maxWhitelistMintLimitPerWallet
                                        : maxMintLimitPerWallet}{" "}
                                    Max/Wallet
                                </h3>
                            </div>

                            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="pt-10 p-8 border border-[#0F1134] bg-[#85B0DE] rounded-3xl">
                                    <h3 className="font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                        Total
                                    </h3>
                                </div>

                                <div className="pt-10 p-8 border border-[#0F1134] bg-[#85B0DE] rounded-3xl">
                                    <h3 className="font-secondary text-lg lg:text-xl text-center uppercase text-white ts-1">
                                        {whitelistSale
                                            ? parseFloat(whitelistPrice) *
                                              quantity
                                            : parseFloat(price) * quantity}{" "}
                                        ETH
                                    </h3>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    if (!paused) {
                                        if (account.status === "connected") {
                                            if (!minting && whitelistSale) {
                                                setMinting(true);

                                                whitelistMint(
                                                    account.address,
                                                    quantity,
                                                    parseFloat(whitelistPrice) *
                                                        quantity
                                                )
                                                    .then(() => {
                                                        setMinting(false);
                                                        toast.success(
                                                            "Minted successfully"
                                                        );
                                                    })
                                                    .catch((err) => {
                                                        setMinting(false);
                                                        toast.error(err);
                                                    });
                                            } else {
                                                if (!minting) {
                                                    setMinting(true);

                                                    mint(
                                                        account.address,
                                                        quantity,
                                                        parseFloat(price) *
                                                            quantity
                                                    )
                                                        .then(() => {
                                                            setMinting(false);
                                                            toast.success(
                                                                "Minted successfully"
                                                            );
                                                        })
                                                        .catch((err) => {
                                                            setMinting(false);
                                                            toast.error(err);
                                                        });
                                                }
                                            }
                                        } else {
                                            setIsWalletConnectorOpen(true);
                                        }
                                    }
                                }}
                                className="w-full pt-10 p-8 border border-[#0F1134] bg-[#F76EF2] rounded-3xl font-secondary text-lg lg:text-xl uppercase text-white ts-1 hover:scale-90 duration-200"
                            >
                                {account.status === "connected"
                                    ? !paused
                                        ? minting
                                            ? "Minting..."
                                            : "Mint Now"
                                        : "Mint is Paused"
                                    : "Connect Wallet"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MintSection;
