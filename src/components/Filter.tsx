import { CSSProperties } from "react";

interface IFilterProps {
  style?: CSSProperties;
  filterText: string;
}

export default function Filter({ style, filterText }: IFilterProps) {
  return (
    <p
      className="opacity-50 text-xs font-bold tracking-widest text-white md:border md:border-white md:border-solid p-2 md:p-8 md:px-50 md:line-height-[2.78] lg:py-[12px] lg:px-70px"
      style={style}
    >
      {filterText}
    </p>
  );
}
