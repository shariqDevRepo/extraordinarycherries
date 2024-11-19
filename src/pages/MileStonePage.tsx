import { LandingPageRoadMapContent } from "../Content/LandingPageRoadMapContent";
import RoadmapSection from "../sections/RoadmapSection";

const MileStonePage = () => {
    return (
        <main className="pb-20">
            <RoadmapSection
                type="Milestone"
                title="Ultimate Roadmap"
                Content={LandingPageRoadMapContent}
            />
        </main>
    );
};

export default MileStonePage;
