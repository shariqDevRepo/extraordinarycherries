import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavigationBar from "./components/NavigationBar";
import WalletConnector from "./components/WalletConnector";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import FAQsPage from "./pages/FAQsPage";
import MintPage from "./pages/MintPage";
import ContestPage from "./pages/ContestPage";
import TermsConditions from "./pages/TermsConditions";
import MileStonePage from "./pages/MileStonePage";

const App = () => {
    const [isWalletConnectorOpen, setIsWalletConnectorOpen] =
        useState<boolean>(false);
    const [isAlreadyOpened, setIsAlreadyOpened] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!isAlreadyOpened) {
                setIsWalletConnectorOpen(true);
                setIsAlreadyOpened(true);
            }
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [isAlreadyOpened]);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <NavigationBar
                setIsWalletConnectorOpen={setIsWalletConnectorOpen}
                setIsAlreadyOpened={setIsAlreadyOpened}
            />

            <WalletConnector
                isOpen={isWalletConnectorOpen}
                setIsOpen={setIsWalletConnectorOpen}
            />

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/faqs" element={<FAQsPage />} />
                <Route path="/milestone" element={<MileStonePage />} />
                <Route
                    path="/terms-and-condtions"
                    element={<TermsConditions />}
                />
                <Route
                    path="/mint"
                    element={
                        <MintPage
                            setIsWalletConnectorOpen={setIsWalletConnectorOpen}
                        />
                    }
                />
                <Route path="/contest" element={<ContestPage />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
