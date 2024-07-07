import { create } from "zustand";
import { Video } from "../types";
import { videos } from "../constants/videos";

type Store = {
  activeVideo: Video;
  setActiveVideo: (activeUrl: Video) => void;

  isCourseContentHidden: boolean;
  setIsCourseContentHidden: (isCourseContentHidden: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  activeVideo: videos.phase1.phase[0],
  setActiveVideo: (activeVideo) => set(() => ({ activeVideo: activeVideo })),
  isCourseContentHidden: true,
  setIsCourseContentHidden: (isCourseContentHidden) =>
    set(() => ({ isCourseContentHidden: isCourseContentHidden })),
}));
