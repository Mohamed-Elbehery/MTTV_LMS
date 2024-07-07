import ReactPlayer from "react-player";
import { Video, videos } from "./constants/videos";
import { create } from "zustand";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { getNextVideo } from "./utils/getNextVideo";
import { FaXmark } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

type Store = {
  activeVideo: Video;
  setActiveVideo: (activeUrl: Video) => void;
};

const useStore = create<Store>()((set) => ({
  activeVideo: videos.phase1.phase[0],
  setActiveVideo: (activeVideo) => set(() => ({ activeVideo: activeVideo })),
}));

const App = () => {
  const { activeVideo, setActiveVideo } = useStore();
  const [isCourseContentHidden, setIsCourseContentHidden] = useState(true);

  return (
    <div className="flex justify-center gap-x-6">
      <main className="w-full flex items-center justify-center h-screen">
        {/* Large Screens */}
        <ReactPlayer
          width={"100%"}
          height={"90vh"}
          url={activeVideo.url}
          playsinline
          controls
          onEnded={() => {
            const nextVideo = getNextVideo(activeVideo.id - 1);
            if (nextVideo) setActiveVideo(nextVideo);
          }}
        />
      </main>

      <div
        onClick={() => setIsCourseContentHidden(false)}
        className="fixed top-[5vh] -right-32 bg-[#2D2F31] border p-4 flex items-center gap-x-3 hover:bg-[#3c3e41] hover:-right-1 transition-all duration-500 cursor-pointer"
      >
        <RxHamburgerMenu size={23} /> Course Content
      </div>
      <Sidebar
        isCourseContentHidden={isCourseContentHidden}
        setIsCourseContentHidden={setIsCourseContentHidden}
      />
    </div>
  );
};

export default App;

const Sidebar = ({
  isCourseContentHidden,
  setIsCourseContentHidden,
}: {
  isCourseContentHidden: boolean;
  setIsCourseContentHidden: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <aside
      className={`fixed top-0 bottom-0 w-[600px] max-[600px]:w-full overflow-auto transition-all duration-700 ease-in-out bg-[#2D2F31] ${
        isCourseContentHidden ? "-right-full" : "-right-1"
      }`}
    >
      <div className="flex justify-end pr-2 py-4 border-b">
        <FaXmark
          onClick={() => setIsCourseContentHidden(true)}
          className="cursor-pointer"
          size={25}
        />
      </div>
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
  const { activeVideo, setActiveVideo } = useStore();
  const [isPhaseOpened, setIsPhaseOpened] = useState(false);

  useEffect(() => {
    setIsPhaseOpened(true);
  }, [phase.phase.title]);

  return (
    <div dir="rtl">
      {/* Title */}
      <h1
        onClick={() => setIsPhaseOpened(!isPhaseOpened)}
        className="font-bold text-xl cursor-pointer py-4 pr-2 flex items-center gap-x-2 select-none bg-[#2D2F31]"
      >
        {phase.phase.title}{" "}
        {isPhaseOpened ? <FaChevronDown /> : <FaChevronLeft />}
      </h1>

      {/* Urls */}
      <div
        className="grid transition-all duration-500 bg-[#3c3e41]"
        style={{
          gridTemplateRows: isPhaseOpened ? "1fr" : "0fr",
        }}
      >
        <div className={"overflow-hidden"}>
          {phase.phase.phase.map((video) => (
            <button
              onClick={() => setActiveVideo(video)}
              className={`px-4 py-2 pr-8 text-right w-full transition duration-500 hover:bg-zinc-600 flex gap-x-3 ${
                activeVideo.url === video.url && "bg-zinc-600"
              }`}
              key={`${video.id - 1} - ${video.title}`}
            >
              <span>{video.id - 1}</span> - {video.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
