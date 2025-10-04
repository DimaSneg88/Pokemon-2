import style from "./Header.module.css";
import top from "/public/image1.png";

import Inputs from "../inputs/Inputs";

// type Props = {}

export default function Header() {
   return (
      <>
         <div className={style.header}>
            <img src={top} alt="top" />
            <input type="search" placeholder="Поиск" />
            <Inputs />
         </div>
      </>
   );
}
