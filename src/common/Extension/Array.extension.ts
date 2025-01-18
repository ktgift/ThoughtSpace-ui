import { Pokemon, PokemonDetail, Effect, Abilities, Ability } from "../../types/pokemon";

export {};

declare global {
    interface Array<T> {
      toEffectEntry(): Effect[];
    }
}

Array.prototype.toEffectEntry = function (): Effect[] {
  return this.map((item: any) => ({
    effect: item.effect ?? '',
    shortEffect: item.short_effect ?? '',
  }))
}
