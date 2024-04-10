import { MyContext } from "../App";
import { useContext } from "react";
import PlanetName from "./PlanetName";

export default function PlanetList() {
  const data = useContext(MyContext).data;
  return (
    <div className="flex flex-col mt-7">
      {data?.map((planet) => {
        return (
          <PlanetName
            key={planet.id}
            planetId={planet.id}
            planetImg={planet.images.planetImg}
            planetText={planet.name}
          />
        );
      })}
    </div>
  );
}
