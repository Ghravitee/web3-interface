import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className="text-4xl bg-green-500 px-4">
            Introducing SpongeBase Squerpants, the latest token to make waves on
            the Base chain. Inspired by the beloved underwater icon, SpongeBob
            SquarePants, this token is here to bring a splash of fun,
            friendship, and finance to the crypto world. With SpongeBase
            Squerpants, you are not just investing; you are embarking on a
            treasure hunt in the vast ocean of decentralized finance.
          </div>
        );
      case "tab2":
        return <div className="px-4">1,000,000,000</div>;
      case "tab3":
        return <div className="px-4">Locked</div>;
      case "tab4":
        return <div className="px-4">3/3</div>;
      default:
        return <div>Content of Tab 1</div>;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex">
        <button
          className={`px-4 py-2 ${
            activeTab === "tab1" ? "bg-green-500" : ""
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          About $SPONGE
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "tab2" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Total Supply
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "tab3" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Liquidity
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "tab4" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("tab4")}
        >
          Tax
        </button>
      </div>
      <div className="p-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
