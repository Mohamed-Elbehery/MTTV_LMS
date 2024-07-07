export type Video = {
  id: number;
  title: string;
  url: string;
};

export type Phase = { title: string; phase: Video[] };

// Define a type for the phases
export type Videos = {
  phase1: Phase;
  phase2: Phase;
  phase3: Phase;
  phase4: Phase;
};
