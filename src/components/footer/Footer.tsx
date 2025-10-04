import pikaBall from "/public/PikaBall.png";
import style from "./Footer.module.css"

// type Props = {}

export default function Footer() {
  return (
    <div className={style.img}>
        <img src={pikaBall} alt="" />
    </div>
  )
}