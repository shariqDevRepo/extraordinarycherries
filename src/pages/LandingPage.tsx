import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import RoadmapSection from "../sections/RoadmapSection";
import BackstorySection from "../sections/BackstorySection";
import TeamSection from "../sections/TeamSection";
import CommunitySection from "../sections/CommunitySection";
import { LandingPageRoadMapContent } from "../Content/LandingPageRoadMapContent";
import SliderSection from "../sections/SliderSection";
import alice from "../assets/images/Alice.png";
import bella from "../assets/images/Bella.png";
import frank from "../assets/images/Frank.png";
import boobi from "../assets/images/Boobi.png";
import franko from "../assets/images/Franko.png";
import okali from "../assets/images/Okali.png";

const LandingPage = () => {
    return (
        <main className="overflow-hidden">
            <HeroSection/>
            <SliderSection slides={
                [alice,bella,frank,boobi,franko,okali]
            } />
            <AboutSection />
            <RoadmapSection
                type="Milestone"
                title="Ultimate Roadmap"
                Content={LandingPageRoadMapContent}
            />
            <BackstorySection />
            <TeamSection />
            <CommunitySection />
        </main>
    );
};

export default LandingPage;
