import Select from "react-select";
import { useState, useEffect } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import type { Player } from "@/interfaces/interfaces";
import { searchPlayers } from "@/utils/searchPlayers";
import { PlayersSearched } from "@/components/PlayersSearched";
import { selectorStyles } from "@/styles/selectorStyles";
import { getPositionOptions, getTeamOptions } from "@/utils/getOptions";
import playersData from "@/data/players.json";

const Players = () => {
  useDocumentTitle("Jugadores");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPosition, setSearchPosition] = useState(["all"]);
  const [searchTeam, setSearchTeam] = useState(["all"]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

  useEffect(() => {
    searchTerm !== ""
      ? setFilteredPlayers(
          searchPlayers(
            playersData.teams.flatMap((team) => team.players),
            searchTerm,
            searchPosition,
            searchTeam,
          ),
        )
      : setFilteredPlayers([]);
  }, [searchTerm, searchPosition, searchTeam]);

  useEffect(() => {
    if (searchPosition.length === 0) {
      setSearchPosition(["all"]);
    }
    if (searchTeam.length === 0) {
      setSearchTeam(["all"]);
    }
  }, [searchPosition, searchTeam]);

  return (
    <section className="pt-24 pb-10 px-4 flex flex-col gap-4">
      <div className="xl:px-72">
        <input
          type="text"
          placeholder="Buscar jugador..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mt-4 p-2 px-4 border border-black rounded-lg hover:bg-gray-200 placeholder:text-black"
        />
      </div>
      <div className="xl:px-72 flex flex-col md:flex-row gap-4 w-full">
        <Select
          isMulti
          options={getPositionOptions()}
          styles={selectorStyles()}
          className="w-full z-50"
          onChange={(e) => setSearchPosition(e.map((option) => option.value))}
          placeholder="Todas las posiciones"
        />
        <Select
          isMulti
          options={getTeamOptions()}
          styles={selectorStyles()}
          className="w-full z-50"
          onChange={(e) => setSearchTeam(e.map((option) => option.value))}
          placeholder="Todos los equipos"
        />
      </div>
      {searchTerm && (
        <PlayersSearched
          filteredPlayers={filteredPlayers}
          searchTerm={searchTerm}
        />
      )}
    </section>
  );
};

export { Players };
