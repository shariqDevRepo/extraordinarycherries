import MintSection from "../sections/MintSection";

const MintPage = ({
    setIsWalletConnectorOpen,
}: {
    setIsWalletConnectorOpen: (state: boolean) => void;
}) => {
    return (
        <main className="overflow-hidden">
            <MintSection setIsWalletConnectorOpen={setIsWalletConnectorOpen} />
        </main>
    );
};

export default MintPage;
