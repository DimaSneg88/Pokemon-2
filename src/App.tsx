import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MoreDetails from "./components/moreDetails/MoreDetails";
import PokemonCard from "./components/pokemonCard/PokemonCard";
import type { PageKey, PokemonDetails } from "./Types";
import style from "./App.module.css";

interface Pokemon {
   name: string;
   url: string;
}

function App() {
   const [currentPage, setCurrentPage] = useState<PageKey>("pokemonCard");
   const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
   const [pokemonSelected, setPokemonSelected] =
      useState<PokemonDetails | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=8&offset=0")
         .then((res) => res.json())
         .then(async (data) => {
            const fetchDetails = data.results.map((elem: Pokemon) =>
               fetch(elem.url).then((res) => res.json())
            );
            const resultsPokemons: PokemonDetails[] = await Promise.all(
               fetchDetails
            );
            setPokemonDetails(resultsPokemons);
            console.log(resultsPokemons);
         })
         .catch((error) => {
            console.error("Error fetching pokemons:", error);
         })
         .finally(() => setLoading(false));
   }, []);

   const handleSelectedPokemon = (select: PokemonDetails) => {
      setPokemonSelected(select);
      setCurrentPage("moreDetails");
   };

   const pages = {
      pokemonCard: (
         <PokemonCard
            handleSelectedPokemon={handleSelectedPokemon}
            pokemonDetails={pokemonDetails}
         />
      ),
      moreDetails: (
         <MoreDetails
            pokemonDetails={pokemonDetails}
            setCurrentPage={setCurrentPage}
            pokemonSelected={pokemonSelected}
         />
      ),
   };

   if (loading) {
      return <div className={style.loading}>Загрузка...</div>;
   }

   return (
      <>
         {currentPage === "moreDetails" ? null : <Header />}
         {pages[currentPage]}
         {currentPage === "moreDetails" ? null : <Footer />}
      </>
   );
}

export default App;
