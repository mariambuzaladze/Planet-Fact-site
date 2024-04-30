import Hamburger from "/images/icon-hamburger.svg";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
  planetClicked: boolean | number;
  setPlanetClicked: Dispatch<SetStateAction<boolean | number>>;
}

export default function Header({
  planetClicked,
  setPlanetClicked,
}: IHeaderProps) {
  const handleBurgerClick = () => {
    setPlanetClicked(false);
  };

  return (
    <header className="flex justify-between items-center w-full border-b border-white border-opacity-20 py-4 md:border-none md:justify-center">
      <h1 className="font-antonio text-3xl font-semibold tracking-tighter text-white">
        THE PLANETS
      </h1>
      <Link to={"/"}>
        <img
          className="cursor-pointer md:hidden"
          src={Hamburger}
          alt="icon hamburger"
          style={planetClicked ? { opacity: 1 } : { opacity: 0.25 }}
          onClick={handleBurgerClick}
        />
      </Link>
    </header>
  );
}
