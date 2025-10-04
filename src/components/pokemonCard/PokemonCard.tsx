import style from "./PokemonCard.module.css";
import {
   getAttackPower,
   getRussianName,
   type PokemonDetails,
} from "../../Types";

type Props = {
   pokemonDetails: PokemonDetails[];
   handleSelectedPokemon: (select: PokemonDetails) => void;
};

export default function PokemonCard({
   handleSelectedPokemon,
   pokemonDetails,
}: Props) {
   return (
      <div className={style.cards}>
         {pokemonDetails.map((pokemon) => (
            <div key={pokemon.id} className={style.card}>
               <div className={style.inCard}>
                  <div className={style.level}>
                     <span className={style.levelText}>
                        {pokemon.base_experience <= 64
                           ? "Обычный"
                           : pokemon.base_experience === 142
                           ? "Средний"
                           : "Редкий"}
                     </span>
                  </div>
                  <div className={style.options}>
                     <img
                        src={pokemon.sprites.other.home.front_default}
                        alt=""
                     />
                     <div className={style.pokemonName}>
                        <h2 className={style.name}>
                           {getRussianName(pokemon.name)}
                        </h2>
                     </div>
                  </div>
                  <div className={style.stats}>
                     <div className={style.statRow}>
                        <span className={style.statLabel}>
                           {getAttackPower(pokemon.stats)}
                        </span>
                     </div>

                     <div className={style.statRowTwo}>
                        <span className={style.statLabel}>
                           {pokemon.types.length > 1
                              ? `${pokemon.types[0].type.name} +
                              ${pokemon.types[1].type.name}`
                              : pokemon.types[0].type.name}
                        </span>
                     </div>
                  </div>
                  <button
                     onClick={() => handleSelectedPokemon(pokemon)}
                     className={style.detailsButton}
                  >
                     Подробнее
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
}
