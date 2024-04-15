import { CSSProperties } from "react";

interface IFilterProps {
  style?: CSSProperties;
  onClick: () => void;
  filterText: string;
}

export default function Filter({ style, onClick, filterText }: IFilterProps) {
  return (
    <p
      className="opacity-50 text-xs font-bold tracking-widest text-white"
      style={style}
      onClick={onClick}
    >
      {filterText}
    </p>
  );
}
