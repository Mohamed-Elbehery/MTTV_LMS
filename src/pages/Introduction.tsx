import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

export default function Introduction() {
  const [isAllowedToWatch, setIsAllowedToWatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Number.parseInt(localStorage.getItem("watch_count")!) > 2) {
      return navigate("/login");
    } else {
      if (localStorage.getItem("watch_count")) {
        localStorage.setItem(
          "watch_count",
          (+localStorage.getItem("watch_count")! + 1).toString()
        );
        setIsAllowedToWatch(true);
      } else {
        localStorage.setItem("watch_count", "0");
        setIsAllowedToWatch(true);
      }
    }
  }, [navigate]);

  return (
    isAllowedToWatch && (
      <ReactPlayer
        width={"100%"}
        height={"80vh"}
        url={"https://abdojudo123456.wistia.com/medias/5a11lrddtc"}
        playsinline
        controls
      />
    )
  );
}
