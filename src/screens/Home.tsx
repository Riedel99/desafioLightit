import { useContext } from "react";
import { Controls } from "../components/Controls";
import { SideBar } from "../components/SideBar";
import { TopBar } from "../components/TopBar";
import { AssetsContext } from "../contexts/assetsContext";
import { useMockLoader } from "../hooks/useMockLoader";
import { LoadingScreen } from "../components/ LoadingScreen";

export const Home = () => {
  const { terminaciones, aberturas, equipamiento } = useContext(AssetsContext);

  const { loading } = useMockLoader(1800);

  if (!terminaciones || !aberturas || !equipamiento || loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[#efefef] h-screen w-full relative">
      <TopBar />
      <SideBar />
      <Controls />
    </div>
  );
};
