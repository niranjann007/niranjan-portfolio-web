import React, { useEffect, useState } from "react";

import "./Loader.css";

const names = [

  "NIRANJAN PP",

  "നിരഞ്ജൻ പി.പി",

  "निरंजन पी.पी.",

  "நிரஞ்சன் பி.பி.",

  "نيرانجان بي بي",

  "尼兰詹",

  "ニランジャン",

  "니란잔",

  "Νιραντζάν ΠΠ",

  "Ниранджан",

  "NIRANJAN PP"

];

function Loader() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((prev) => (prev + 1) % names.length);

    }, 180);

    return () => clearInterval(timer);

  }, []);

  return (

    <div className="loader-wrapper">

      <div className="loader-content">

        <div className="spinner"></div>

        <h2 className="loader-title">

          {names[index]}

        </h2>

        <p className="loader-text">

          Loading...

        </p>

      </div>

    </div>

  );

}

export default Loader;