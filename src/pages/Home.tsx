import ReactPlayer from "react-player";
import { getNextVideo } from "../utils/getNextVideo";
import { RxHamburgerMenu } from "react-icons/rx";
import { useStore } from "../context/store";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { activeVideo, setActiveVideo, setIsCourseContentHidden } = useStore();

  return (
    <article className="flex justify-center gap-x-6">
      <main className="w-full sm:flex sm:items-center sm:justify-center h-screen">
        {/* Large Screens */}
        <ReactPlayer
          width={"100%"}
          height={"80vh"}
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
        className="fixed top-0 sm:top-[10vh] -right-32 bg-[#2D2F31] border p-4 flex items-center gap-x-3 hover:bg-[#3c3e41] hover:-right-1 transition-all duration-500 cursor-pointer"
      >
        <RxHamburgerMenu size={23} /> Course Content
      </div>

      <Sidebar />
    </article>
  );
}
