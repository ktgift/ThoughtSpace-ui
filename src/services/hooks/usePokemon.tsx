import { useCallback, useEffect, useState } from "react";
import { useApi } from "../ReactQuery";
import { PokemonDetail, PokemonResult, Ability, AbilityEffect, Effect, PokemonData } from "../../types/pokemon";

export const usePokemon = () => {
  const [dataList, setDataList] = useState<PokemonData[]>([]);
  const [pokemonDetailRaw, setPokemonDetailRaw] = useState<PokemonDetail[]>([]);

  const { data, refetch, error, isLoading } = useApi({
    queryKey: ["pokemon"],
    url: "https://pokeapi.co/api/v2/pokemon/",
  });


  const fetchPokemon = useCallback(async (url: string, name: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch Pokémon details");
      const pokemonDetail = await res.json() as PokemonDetail;

      if (!pokemonDetail) return;

      const abilityEffects = await Promise.all(
        pokemonDetail.abilities.map(async (ability: Ability) => {
          try {
            const res = await fetch(ability.ability.url);
            const abilityDetail = await res.json() as AbilityEffect;
  
            return {
              name: ability.ability.name,
              effect: abilityDetail.effect_entries.toEffectEntry(),
            };
          } catch (err) {
            console.error(`Error fetching ability: ${ability.ability.name}`, err);
            return null; // Return null if any ability fetch fails
          }
        })
      );

      //remove null values
      const validAbilities = abilityEffects.filter(Boolean) as {
        name: string;
        effect: Effect[];
      }[];

      const pokemon: PokemonData = {
        name,
        ability: validAbilities,
        imageUrl: pokemonDetail.sprites.front_default,
      };
  
      setDataList((prev) => [...prev, pokemon]);
      setPokemonDetailRaw((prev) => [...prev, pokemonDetail]);



    } catch (err) {
      console.error(`Error fetching Pokemon: ${name}`, err);
    }
  }, []);


  useEffect(() => {
    if (data) {
      Promise.all(
        data.results.map(
          async (result: PokemonResult) => await fetchPokemon(result.url, result.name)
        )
      );
    }
  }, [data]);

  return { dataList, pokemonDetailRaw, refetch, error, isLoading };
};
