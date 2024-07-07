export type Video = {
  id: number;
  title: string;
  url: string;
};

type Phase = { title: string; phase: Video[] };

// Define a type for the phases
type Videos = {
  phase1: Phase;
  phase2: Phase;
  phase3: Phase;
  phase4: Phase;
};

export const videos: Videos = {
  phase1: {
    title: "المرحلة الأولي",
    phase: [
      {
        id: 1,
        title: "مقدمة الكورس",
        url: "https://mttv.wistia.com/medias/k597mnkmgm",
      },
      {
        id: 2,
        title: "قبل اي شئ ابني تفكيرك عن البزنس بشكل صحيح",
        url: "https://mttv.wistia.com/medias/yape466dam",
      },
      {
        id: 3,
        title: "اعمل كدا واوعدك انك عمرك ما هتنجز اي شئ",
        url: "https://mttv.wistia.com/medias/xivcauluz0",
      },
      {
        id: 4,
        title: "ازاي اقدر انجح في اي مجال اكون فيه ؟",
        url: "https://mttv.wistia.com/medias/tkezyhiz1w",
      },
      {
        id: 5,
        title: "ليه ناس بتنجح وناس لا؟",
        url: "https://mttv.wistia.com/medias/3srj5xoghj",
      },
      {
        id: 6,
        title: "خد نفس وارجع خطوتين لورا وانطلق!",
        url: "https://mttv.wistia.com/medias/vaerufjoqk",
      },
      {
        id: 7,
        title: "حاجات محدش غيري هيقولك عليها",
        url: "https://mttv.wistia.com/medias/35z45e3nml",
      },
    ],
  },
  phase2: {
    title: "المرحلة الثانية",
    phase: [
      {
        id: 8,
        title: "مقدمة في التجارة الالكترونية",
        url: "https://mttv.wistia.com/medias/521dd5byuv",
      },
      {
        id: 9,
        title:
          "يعني ايه تجارة الكترونية وليه ده احسن مجال الواحد ممكن يبدأ فيه دون المجالات التانيه؟",
        url: "https://mttv.wistia.com/medias/h9zjn0sd3w",
      },
      {
        id: 10,
        title:
          "ايه الخطوات المطلوبه مني علشان اقدر انجح في التجارة الالكترونية",
        url: "https://abdojudo123456.wistia.com/medias/t6n54mvskl",
      },
    ],
  },
  phase3: {
    title: "المرحلة الثالثة",
    phase: [
      {
        id: 11,
        title: "انشاء صفحتك الخاصه",
        url: "https://abdojudo123456.wistia.com/medias/h79ur5xq8q",
      },
      {
        id: 12,
        title: "تصميم الصور بشكل احترافي + التأكد من انو كل شئ صحيح",
        url: "https://abdojudo123456.wistia.com/medias/asjltydidg",
      },
      {
        id: 13,
        title: "المواقع الي هنجيب منها المنتجات",
        url: "https://abdojudo123456.wistia.com/medias/mrz5riti0s",
      },
      {
        id: 14,
        title: "اختيار المنتجات + تسعيرها",
        url: "https://abdojudo123456.wistia.com/medias/5a11lrddtc",
      },
      {
        id: 15,
        title: "اختيار المنتجات الرابحه!!",
        url: "https://abdojudo123456.wistia.com/medias/opbfhs5lkz",
      },
      {
        id: 16,
        title: "انشاء حساب اعلاني + ازاي تتجنب المخاطر",
        url: "https://abdojudo123456.wistia.com/medias/w31g4xdvrj",
      },
      {
        id: 17,
        title: "خليك مبدع..بطل شغل نسخ ولصخ!! (content writing)",
        url: "https://abdojudo123456.wistia.com/medias/jzpnmrjajn",
      },
      {
        id: 18,
        title: "انشاء اول حمله اعلانية ليك",
        url: "https://abdojudo123456.wistia.com/medias/59fzt79uaz",
      },
    ],
  },
  phase4: {
    title: "المرحلة الرابعة",
    phase: [
      {
        id: 19,
        title: "نتائج اليوم الأول + التاني من الحمله",
        url: "https://brb-egy.wistia.com/medias/s37dabti7r",
      },
      {
        id: 20,
        title: "نتائج اليوم الثالث من الحمله",
        url: "https://brb-egy.wistia.com/medias/gs9w0uhi96",
      },
      {
        id: 21,
        title: "نتائج اليوم الرابع من الحمله",
        url: "https://brb-egy.wistia.com/medias/852m15e22v",
      },
    ],
  },
};
