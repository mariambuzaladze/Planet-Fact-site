import { MyContext } from "../App";
import { useContext, Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/${planet.name}/overview`} key={planet.id}>
            <PlanetName
              planetId={planet.id}
              planetImg={planet.images.planetImg}
              planetText={planet.name}
              setPlanetClicked={setPlanetClicked}
            />
          </Link>
        );
      })}
    </div>
  );
}
