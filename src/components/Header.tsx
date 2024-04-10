import Hamburger from "/images/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full border-b border-white border-opacity-20 py-4">
      <h1 className="font-antonio text-3xl font-semibold tracking-tighter text-white">
        THE PLANETS
      </h1>
      <img src={Hamburger} alt="icon hamburger" />
    </header>
  );
}
