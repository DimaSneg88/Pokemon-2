import top from "/public/image1.png";
import style from "./MoreDetails.module.css";
import {
   getAttackPower,
   getRussianName,
   translateTypePokemon,
   type PageKey,
   type PokemonDetails,
} from "../../Types";
import SliderEvolution from "../sliderEvolution/SliderEvolution";

type Props = {
   setCurrentPage: (page: PageKey) => void;
   pokemonSelected: PokemonDetails | null;
   pokemonDetails?: PokemonDetails[];
};

export default function MoreDetails({
   setCurrentPage,
   pokemonSelected,
}: Props) {
   if (!pokemonSelected) {
      return (
         <div className={style.container}>
            <div>Покемон не выбран</div>
            <button onClick={() => setCurrentPage("pokemonCard")}>
               На главную
            </button>
         </div>
      );
   }

   return (
      <>
         <div className={style.topImg}>
            <img src={top} alt="top" />
         </div>
         <div className={style.detailsContainer}>
            <div className={style.leftImg}>
               <img
                  src={pokemonSelected.sprites.other.home.front_default}
                  alt=""
               />
            </div>
            <div className={style.reightDetails}>
               <div className={style.nameInfo}>
                  <h2>{getRussianName(pokemonSelected.name)}</h2>
                  <div className={style.level}>
                     <span className={style.levelText}>
                        {pokemonSelected.base_experience <= 64
                           ? "Обычный"
                           : pokemonSelected.base_experience === 142
                           ? "Средний"
                           : "Редкий"}
                     </span>
                  </div>
                  <div className={style.levelTwo}>
                     <span className={style.levelText}>
                        {getAttackPower(pokemonSelected.stats)}
                     </span>
                  </div>
               </div>
               <div className={style.info}>
                  <div className={style.types}>
                     <div className={style.type}>
                        <h3>Тип покемона</h3>
                        <div className={style.typeLine}>
                           <div className={style.typeRadius}></div>
                           <p>
                              {translateTypePokemon(
                                 pokemonSelected.types[0].type.name
                              )}
                           </p>
                        </div>
                     </div>
                     <div className={style.small}>
                        <h3>Слабости покемона</h3>
                        <div className={style.typeLine}>
                           <div className={style.smallRadius}></div>
                           <p>Земляной</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={style.characters}>
                  <div className={style.vid}>
                     <p>Вид</p>
                     <p className={style.pTwo}>Мышь</p>
                  </div>
                  <div className={style.talants}>
                     <p>Талант</p>
                     <p className={style.pTwo}>Паралич</p>
                  </div>
                  <div className={style.rost}>
                     <p>Рост</p>
                     <p className={style.pTwo}>0,4 м</p>
                  </div>
                  <div className={style.ves}>
                     <p>Вес</p>
                     <p className={style.pTwo}>6,0 кг</p>
                  </div>
               </div>
            </div>
         </div>
         <div className={style.slider}>
            <SliderEvolution />
         </div>

         <button onClick={() => setCurrentPage("pokemonCard")}>Назад</button>
      </>
   );
}
