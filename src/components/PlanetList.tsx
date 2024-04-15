import { MyContext } from "../App";
import { useContext, Dispatch, SetStateAction } from "react";
import PlanetName from "./PlanetName";

interface IPlanetListProps {
  setPlanetClicked: Dispatch<SetStateAction<boolean | number>>;
}

export default function PlanetList({ setPlanetClicked }: IPlanetListProps) {
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
            setPlanetClicked={setPlanetClicked}
          />
        );
      })}
    </div>
  );
}
