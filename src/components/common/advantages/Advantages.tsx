import React from "react";
import { IconCard, ImageMaker } from "@components";
import work from "@assets/svgs/working.png";
import credit from "@assets/svgs/credit-card.png";
import courses from "@assets/svgs/online-course.png";

const Advantages = () => {
  const advantageCards = [
    {
      icon: <ImageMaker src={work} alt="Easy import" />,
      title: "Retina ready",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      icon: <ImageMaker src={credit} alt="Easy import" />,
      title: "Creative Elements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      icon: <ImageMaker src={courses} alt="Easy to use" />,
      title: "Easy-to-use",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      icon: <ImageMaker src={courses} alt="Easy import" />,
      title: "Easy Import",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
  ];
  return <IconCard data={advantageCards} />;
};

export default Advantages;
