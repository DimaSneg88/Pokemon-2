export type PageKey = "moreDetails" | "pokemonCard";

export interface PokemonDetails {
   id: number;
   name: string;
   url: string;
   base_experience: number;
   sprites: {
      other: {
         home: {
            front_default: string;
         };
      };
      front_default: string;
   };
   stats: {
      base_stat: number;
      stat: { name: string };
   }[];
   types: {
      slot: number;
      type: {
         name: string;
         url: string;
      };
   }[];
}

export const pokemonTranslations: Record<string, string> = {
   bulbasaur: "Бульбазавр",
   ivysaur: "Айвизавр",
   venusaur: "Венузавр",
   charmander: "Чармандер",
   charmeleon: "Чармелеон",
   charizard: "Чаризард",
   squirtle: "Сквиртл",
   wartortle: "Вартортл",
   blastoise: "Бластойз",
   pikachu: "Пикачу",
   raichu: "Райчу",
   eevee: "Иви",
   vaporeon: "Вапореон",
   jolteon: "Джолтеон",
   flareon: "Флареон",
};

export const typeTranslations: Record<string, string> = {
   ground: "Земляной",
   electric: "Электрический",
   water: "Водный",
   fire: "Огненный",
   grass: "Травяной",
   ice: "Ледяной",
   fighting: "Боевой",
   poison: "Ядовитый",
   flying: "Летающий",
   psychic: "Психический",
   bug: "Насекомый",
   rock: "Каменный",
   ghost: "Призрачный",
   dragon: "Драконий",
   dark: "Тёмный",
   steel: "Стальной",
   fairy: "Волшебный",
   normal: "Нормальный",
};

export const translateTypePokemon = (type: string): string => {
   return typeTranslations[type] || type;
};

export const getRussianName = (englishName: string): string => {
   return pokemonTranslations[englishName.toLowerCase()] || englishName;
};

export const getAttackPower = (stats: PokemonDetails["stats"]) => {
   const attackPower = stats.find((elem) => elem.stat.name === "attack");
   return attackPower ? attackPower.base_stat : 0;
};
