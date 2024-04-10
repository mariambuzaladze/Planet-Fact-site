import Chevron from "/images/icon-chevron.svg";
interface PlanetNameProps {
  planetId: number;
  planetImg: string;
  planetText: string;
}

export default function PlanetName({
  planetId,
  planetImg,
  planetText,
}: PlanetNameProps) {
  return (
    <div className="flex items-center justify-between w-full py-5 border-b border-white border-opacity-20 cursor-pointer">
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
