import { usePokemon } from "../../services";

export const Pokemon = () => {
  const { dataList, pokemonDetailRaw } = usePokemon();
  console.log("dataList", dataList);
  console.log("pokemonDetailRaw", pokemonDetailRaw);
  return (
    <div>
      <h1>Pokemon</h1>
      {dataList.map((pokemon) => (
        <div className="card card-side bg-base-100 shadow-xl my-4">
          <figure>
            <img
              src={pokemon.imageUrl}
              alt="pokemon"
              className="w-52 object-contain rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title -mb-6">{pokemon.name}</h2>
            <div className="divider"></div>
            <div className="flex flex-col gap-1">
              <p className="text-lg -mt-3 text-amber-900 font-semibold">Effect</p>
              <div className="card-actions">
                <div role="tablist" className="tabs tabs-boxed">
                  {pokemon.ability.map((ability, index) => (
                    <>
                      <input
                        type="radio"
                        name="my_tabs_2"
                        role="tab"
                        className={`tab`}
                        aria-label={ability.name}
                        defaultChecked={index === 0}
                      />
                      <div
                        role="tabpanel"
                        className="tab-content bg-[#ADD0B3] border-base-300 rounded-box p-6 max-w-3xl"
                      >
                        {ability.effect.map((effect) => (
                          <div className="">
                            <p>{effect.effect}</p>
                            <p>{effect.shortEffect}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
