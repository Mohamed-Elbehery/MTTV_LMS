export type Video = {
  id: number;
  title: string;
  url: string;
};

// Define a type for the phases
type Videos = {
  phase1: { title: string; phase: Video[] };
  phase2: { title: string; phase: Video[] };
  phase3: { title: string; phase: Video[] };
  phase4: { title: string; phase: Video[] };
};

export const videos: Videos = {
  phase1: {
    title: "المرحلة الاولي",
    phase: [
      { id: 1, title: "", url: "https://mttv.wistia.com/medias/k597mnkmgm" },
      { id: 2, title: "", url: "https://mttv.wistia.com/medias/yape466dam" },
      { id: 3, title: "", url: "https://mttv.wistia.com/medias/xivcauluz0" },
      { id: 4, title: "", url: "https://mttv.wistia.com/medias/tkezyhiz1w" },
      { id: 5, title: "", url: "https://mttv.wistia.com/medias/3srj5xoghj" },
      { id: 6, title: "", url: "https://mttv.wistia.com/medias/vaerufjoqk" },
      { id: 7, title: "", url: "https://mttv.wistia.com/medias/35z45e3nml" },
    ],
  },
  phase2: {
    title: "المرحلة الثانية",
    phase: [
      { id: 8, title: "", url: "https://mttv.wistia.com/medias/521dd5byuv" },
      { id: 9, title: "", url: "https://mttv.wistia.com/medias/h9zjn0sd3w" },
      {
        id: 10,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/t6n54mvskl",
      },
    ],
  },
  phase3: {
    title: "المرحلة الثالثة",
    phase: [
      {
        id: 11,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/h79ur5xq8q",
      },
      {
        id: 12,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/asjltydidg",
      },
      {
        id: 13,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/mrz5riti0s",
      },
      {
        id: 14,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/5a11lrddtc",
      },
      {
        id: 15,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/opbfhs5lkz",
      },
      {
        id: 16,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/w31g4xdvrj",
      },
      {
        id: 17,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/jzpnmrjajn",
      },
      {
        id: 18,
        title: "",
        url: "https://abdojudo123456.wistia.com/medias/59fzt79uaz",
      },
    ],
  },
  phase4: {
    title: "المرحلة الرابعة",
    phase: [
      {
        id: 19,
        title: "",
        url: "https://brb-egy.wistia.com/medias/s37dabti7r",
      },
      {
        id: 20,
        title: "",
        url: "https://brb-egy.wistia.com/medias/gs9w0uhi96",
      },
    ],
  },
};
