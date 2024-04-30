import { MyContext } from "../App";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Filter from "./Filter";
import Source from "/images/icon-source.svg";
import InfoContainer from "./InfoContainer";

export default function PlanetInfo({ filter }: { filter: string }) {
  const data = useContext(MyContext).data;
  const { planet } = useParams();

  let currentPlanet;
  if (data?.find((item) => item.name === planet) === undefined) {
    currentPlanet = data?.find((item) => item.name === "Mercury");
  } else {
    currentPlanet = data?.find((item) => item.name === planet);
  }

  const renderContent = () => {
    switch (filter) {
      case "OVERVIEW":
        return currentPlanet?.overview.content;
      case "STRUCTURE":
        return currentPlanet?.structure.content;
      case "SURFACE":
        return currentPlanet?.geology.content;
      default:
        return currentPlanet?.overview.content;
    }
  };

  const renderSource = () => {
    switch (filter) {
      case "OVERVIEW":
        return currentPlanet?.overview.source;
      case "STRUCTURE":
        return currentPlanet?.structure.source;
      case "SURFACE":
        return currentPlanet?.geology.source;
      default:
        return currentPlanet?.overview.source;
    }
  };

  const renderImg = () => {
    switch (filter) {
      case "OVERVIEW":
        return currentPlanet?.images.planetImg;
      case "STRUCTURE":
        return currentPlanet?.images.internal;
      case "SURFACE":
        return currentPlanet?.images.geology;
      default:
        return currentPlanet?.images.planetImg;
    }
  };

  const getPlanetNames = () => {
    return data?.map((planet) => {
      return (
        <Link
          to={`/${planet.name}/overview`}
          key={planet.id}
          className="text-xs md:text-sm font-bold leading-5 md:leading-7 tracking-wide text-white opacity-75"
        >
          {planet.name}
        </Link>
      );
    });
  };

  return (
    <div className="flex flex-col gap-[36px] md:flex-wrap">
      <div className="hidden w-full justify-between md:flex border-b border-white border-opacity-20">
        {getPlanetNames()}
      </div>

      <div className="flex justify-between w-full p-[20px] border-b border-white border-opacity-20 cursor-pointer md:border-none md:order-4">
        <Link to={`/${data ? currentPlanet?.name : ""}/overview`}>
          <Filter
            style={
              filter === "OVERVIEW"
                ? { borderBottom: "4px solid #419ebb" }
                : { borderBottom: "" }
            }
            filterText="OVERVIEW"
          />
        </Link>

        <Link to={`/${data ? currentPlanet?.name : ""}/structure`}>
          <Filter
            style={
              filter === "STRUCTURE"
                ? { borderBottom: "4px solid #419ebb" }
                : { borderBottom: "" }
            }
            filterText="STRUCTURE"
          />
        </Link>

        <Link to={`/${data ? currentPlanet?.name : ""}/surface`}>
          <Filter
            style={
              filter === "SURFACE"
                ? { borderBottom: "4px solid #419ebb" }
                : { borderBottom: "" }
            }
            filterText="SURFACE"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-[80px] items-center lg:flex-row lg:justify-center lg:items-end">
        <img
          className="w-[111px] h-[111px] md:w-[184px] md:h-[184px] md:mt-[100px] md:order-2 lg:w-[290px] lg:h-[290px]"
          src={renderImg()}
          alt="planet Image"
        />

        <div className="flex flex-col items-center gap-[20px] md:w-[50%] md:items-start md:order-3 lg:w-[30%]">
          <h2 className="font-antonio text-4xl font-medium text-white md:text-5xl lg:text-7xl">
            {data ? currentPlanet?.name : ""}
          </h2>

          <p className="text-xs leading-5 text-white opacity-50 text-center md:text-left lg:text-lg">
            {renderContent()}
          </p>

          <p className="flex items-center text-xs md:text-sm leading-5 md:leading-6 text-white opacity-30">
            Source:
            <a className="text-white font-bold" href={renderSource()}>
              Wikipedia
            </a>
            <img src={Source} alt="icon source" />
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-[8px] md:order-5 md:flex-row lg:gap-[80px]">
        <InfoContainer
          infoText="ROTATION TIME"
          infoValue={currentPlanet ? currentPlanet.rotation : ""}
        />
        <InfoContainer
          infoText="REVOLUTION TIME"
          infoValue={currentPlanet ? currentPlanet.revolution : ""}
        />
        <InfoContainer
          infoText="RADIUS"
          infoValue={currentPlanet ? currentPlanet?.radius : ""}
        />
        <InfoContainer
          infoText="AVERAGE TEMP."
          infoValue={currentPlanet ? currentPlanet?.temperature : ""}
        />
      </div>
    </div>
  );
}
