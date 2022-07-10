import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./HeaderItem.scss";

interface Props {
  label: string;
  selected: boolean;
  path: string;
  onClick: () => void;
}

const HeaderItem: FC<Props> = ({
  label,
  selected,
  path,
  onClick,
}): JSX.Element => {
  return (
    <Link
      to={path}
      className={`header-item ${selected && "selected"}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default HeaderItem;
