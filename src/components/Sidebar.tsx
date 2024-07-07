import { FaXmark } from "react-icons/fa6";
import { useStore } from "../context/store";
import { Video } from "../types";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { videos } from "../constants/videos";

const Sidebar = () => {
  const { isCourseContentHidden, setIsCourseContentHidden } = useStore();

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

export default Sidebar;

const Phase: React.FC<{ phase: { phase: Video[]; title: string } }> = (
  phase
) => {
  const { activeVideo, setActiveVideo, setIsCourseContentHidden } = useStore();
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
              onClick={() => (
                setActiveVideo(video), setIsCourseContentHidden(true)
              )}
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
