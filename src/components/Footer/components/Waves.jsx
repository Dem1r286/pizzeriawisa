import React, { useEffect, useState } from "react";
import Wave from "react-wavify";

const Waves = ({ customStyles }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultStyles = [
    {
      height: {
        base: "33rem",
        sm: "44rem",
      },
      opacity: 0.5,
      color: "#222222",
      options: { amplitude: 10, speed: 0.2, points: 6 },
    },
    {
      height: {
        base: "32rem",
        sm: "43rem",
      },
      opacity: 0.9,
      color: "#222222",
      options: { amplitude: 20, speed: 0.1, points: 5 },
    },
    {
      height: {
        base: "27rem",
        sm: "40rem",
      },
      opacity: 1,
      color: "#222222",
      options: { amplitude: 20, speed: 0.1, points: 5 },
    },
  ];

  const waveStyles = customStyles || defaultStyles;

  return (
    <div id="wave-container">
      {waveStyles.map((style, index) => (
        <Wave
          key={index}
          fill={style.color}
          paused={false}
          style={{
            position: "absolute",
            bottom: "0",
            zIndex: "-1",
            opacity: style.opacity,
            height: windowWidth < 640 ? style.height.sm : style.height.base, // 👈 THIS LINE
          }}
          options={style.options}
        />
      ))}
    </div>
  );
};

export default Waves;
