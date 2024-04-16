import { MyContext } from "../App";
import { useContext } from "react";
import Filter from "./Filter";
import Source from "/images/icon-source.svg";
import InfoContainer from "./InfoContainer";

export default function PlanetInfo() {
  const data = useContext(MyContext).data;

  const handleFilterClick = () => {};
  const handleNameClick = (id: number) => {};

  const getPlanetNames = () => {
    return data?.map((planet) => {
      return (
        <p
          onClick={() => handleNameClick(planet.id)}
          key={planet.id}
          className="text-xs md:text-sm font-bold leading-5 md:leading-7 tracking-wide text-white opacity-75"
        >
          {planet.name}
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col gap-[36px] md:flex-wrap">
      <div className="hidden w-full justify-between md:flex">
        {getPlanetNames()}
      </div>

      <div className="flex justify-between w-full p-[20px] border-b border-white border-opacity-20 cursor-pointer md:border-none md:order-4">
        <Filter
          style={{ borderBottom: "4px solid #419ebb" }}
          onClick={handleFilterClick}
          filterText="OVERVIEW"
        />
        <Filter
          style={{ borderBottom: "4px solid #419ebb" }}
          onClick={handleFilterClick}
          filterText="STRUCTURE"
        />
        <Filter
          style={{ borderBottom: "4px solid #419ebb" }}
          onClick={handleFilterClick}
          filterText="SURFACE"
        />
      </div>

      <div className="flex flex-col gap-[80px] items-center">
        <img
          className="w-[111px] h-[111px] md:w-[184px] md:h-[184px] md:mt-[100px] md:order-2"
          src={data ? data[0].images.planetImg : ""}
          alt="planet Image"
        />

        <div className="flex flex-col items-center gap-[20px] md:w-[50%] md:items-start md:order-3">
          <h2 className="font-antonio text-4xl font-medium text-white md:text-5xl">
            {data ? data[0].name : ""}
          </h2>

          <p className="text-xs leading-5 text-white opacity-50 text-center md:text-left">
            {data ? data[0].overview.content : ""}
          </p>

          <p className="flex items-center text-xs md:text-sm leading-5 md:leading-6 text-white opacity-30">
            Source:
            <a
              className="text-white font-bold"
              href={data ? data[0].overview.source : ""}
            >
              Wikipedia
            </a>
            <img src={Source} alt="icon source" />
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full gap-[8px] md:order-5 md:flex-row">
        <InfoContainer
          infoText="ROTATION TIME"
          infoValue={data ? data[0].rotation : ""}
        />
        <InfoContainer
          infoText="REVOLUTION TIME"
          infoValue={data ? data[0].revolution : ""}
        />
        <InfoContainer
          infoText="RADIUS"
          infoValue={data ? data[0].radius : ""}
        />
        <InfoContainer
          infoText="AVERAGE TEMP."
          infoValue={data ? data[0].temperature : ""}
        />
      </div>
    </div>
  );
}
