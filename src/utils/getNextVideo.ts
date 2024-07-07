import { Video, videos } from "../constants/videos";

export function getNextVideo(currentVideoId: number): Video | null {
  const phases = [videos.phase1, videos.phase2, videos.phase3, videos.phase4];

  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const videoIndex = phase.phase.findIndex(
      (video) => video.id === currentVideoId
    );

    if (videoIndex !== -1) {
      // If the current video is not the last in the current phase
      if (videoIndex < phase.phase.length - 1) {
        return phase.phase[videoIndex + 1];
      }
      // If the current video is the last in the current phase, move to the next phase
      else if (i < phases.length - 1) {
        return phases[i + 1].phase[0];
      }
    }
  }

  // Return null if no next video is found
  return null;
}
