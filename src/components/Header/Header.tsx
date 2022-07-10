import React, { useState } from "react";
import HeaderItem from "../HeaderItem/HeaderItem";
import { Path } from "../../routes/Routes";
import "./Header.scss";

interface HeaderItemsType {
  name: string;
  id: string;
  link: string;
}

const Header = (): JSX.Element => {
  const headerItems: HeaderItemsType[] = [
    { name: "ITEM_1", id: "0", link: Path.item1 },
    { name: "ITEM_2", id: "1", link: Path.item2 },
    { name: "ITEM_3", id: "2", link: Path.item3 },
    { name: "ITEM_4", id: "3", link: Path.item4 },
    { name: "ITEM_5", id: "4", link: Path.item5 },
  ];

  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="header">
      <div className="header__top-container">
        <div className="header__logo">LOGO</div>
      </div>
      <div className="header__bottom-container">
        {headerItems.map((item, i) => {
          return (
            <HeaderItem
              key={item.id}
              label={item.name}
              selected={selected === i}
              path={item.link}
              onClick={() => setSelected(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
