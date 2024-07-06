import ReactPlayer from "react-player";
import { Video, videos } from "./constants/videos";
import { create } from "zustand";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

type Store = {
  activeUrl: string;
  setActiveUrl: (activeUrl: string) => void;
};

const useStore = create<Store>()((set) => ({
  activeUrl: videos.phase1.phase[0].url,
  setActiveUrl: (activeUrl) => set(() => ({ activeUrl: activeUrl })),
}));

const App = () => {
  const { activeUrl } = useStore();

  return (
    <div className="flex justify-center container mx-auto">
      <main className="w-full">
        <ReactPlayer width={"95%"} url={activeUrl} controls />
      </main>
      <Sidebar />
    </div>
  );
};

export default App;

const Sidebar = () => {
  return (
    <aside className="w-[75%]">
      <Phase phase={videos.phase1} />
      <Phase phase={videos.phase2} />
      <Phase phase={videos.phase3} />
      <Phase phase={videos.phase4} />
    </aside>
  );
};

const Phase: React.FC<{ phase: { phase: Video[]; title: string } }> = (
  phase
) => {
  const { activeUrl, setActiveUrl } = useStore();
  const [isPhaseOpened, setIsPhaseOpened] = useState(false);

  useEffect(() => {
    setIsPhaseOpened(phase.phase.title === "المرحلة الاولي" ? true : false);
  }, [phase.phase.title]);

  return (
    <div dir="rtl" className={`bg-[#2D2F31]`}>
      {/* Title */}
      <h1
        onClick={() => setIsPhaseOpened(!isPhaseOpened)}
        className="font-bold text-xl cursor-pointer py-4 pr-2 flex items-center gap-x-2"
      >
        {phase.phase.title}{" "}
        {isPhaseOpened ? <FaChevronDown /> : <FaChevronLeft />}
      </h1>

      {/* Urls */}
      <div
        className="grid transition-all duration-300"
        style={{
          gridTemplateRows: isPhaseOpened ? "1fr" : "0fr",
        }}
      >
        <div className={"overflow-hidden"}>
          {phase.phase.phase.map((video) => (
            <button
              onClick={() => setActiveUrl(video.url)}
              className={`px-4 py-2 pr-8 text-right w-full transition duration-300 ease-out hover:bg-zinc-600 ${
                activeUrl === video.url && "bg-zinc-600"
              }`}
              key={`${video.id} - ${video.title}`}
            >
              {video.id} - {video.url}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
