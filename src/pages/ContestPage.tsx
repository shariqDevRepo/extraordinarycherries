import { ContestRoadMapContent } from "../Content/ContestRoadMapContent";
import RoadmapSection from "../sections/RoadmapSection";
import { Link } from "react-router-dom";

const ContestPage = () => {
    return (
        <main className="pb-20">
            <RoadmapSection
                title="Extraordinary Cherries NFT Minting Opportunities"
                description="Welcome to the Extraordinary Cherries NFT Minting Opportunity! Get ready for a chance to mint rare and super rare NFTs with exciting rewards."
                Content={ContestRoadMapContent}
                type="Phase"
            />
            <div className="p-10 mx-auto container px-4 sm:px-12">
                <h2
                    data-aos="fade-down"
                    className="font-secondary text-5xl lg:text-6xl uppercase text-white ts-2"
                >
                    Disclaimer
                </h2>
                <div className="description py-2 text-white">
                    Due to regulatory guidance from the U.S. Securities and
                    Exchange Commission (SEC) and the application of the Howey
                    Test, Extraordinary Cherries can no longer offer or imply
                    any form of financial return, monetary gain, or increase in
                    value associated with NFT ownership or participation in our
                    ecosystem.
                    <span className="cursor-pointer">
                        {" "}
                        <Link to={"/terms-and-condtions"}>Read More..</Link>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default ContestPage;
