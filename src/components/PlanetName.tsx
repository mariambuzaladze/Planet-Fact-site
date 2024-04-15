import Chevron from "/images/icon-chevron.svg";
import { Dispatch, SetStateAction } from "react";

interface IPlanetNameProps {
  planetId: number;
  planetImg: string;
  planetText: string;
  setPlanetClicked: Dispatch<SetStateAction<boolean | number>>;
}

export default function PlanetName({
  planetId,
  planetImg,
  planetText,
  setPlanetClicked,
}: IPlanetNameProps) {
  const hanldePlanetClick = () => {
    setPlanetClicked(planetId);
  };

  return (
    <div
      onClick={hanldePlanetClick}
      className="flex items-center justify-between w-full py-5 border-b border-white border-opacity-20 cursor-pointer"
    >
      <div className="flex gap-4">
        <img className="w-[20px] h-[20px]" src={planetImg} alt="planet image" />
        <p className="text-white text-lg font-bold leading-7 tracking-wider">
          {planetText}
        </p>
      </div>
      <img src={Chevron} alt="icon chevron" />
    </div>
  );
}
