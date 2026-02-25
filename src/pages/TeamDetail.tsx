import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { TeamHeader } from "@/components/TeamHeader";
import { Squad } from "@/components/Squad";
import { ResultsTable } from "@/components/ResultsTable";
import { translator } from "@/utils/dictionary";
import type { Team } from "@/interfaces/interfaces";
import teamsData from "@/data/teams.json";
import managersData from "@/data/managers.json";
import playersData from "@/data/players.json";
import matchesData from "@/data/matches.json";

const TeamDetail = () => {
  const { id } = useParams() as { id: string };
  const team = teamsData.teams[Number(id) - 1];
  useDocumentTitle(team?.shortName ?? "Equipo");
  const manager = managersData.managers[Number(id) - 1];
  const players = playersData.teams[Number(id) - 1].players;
  const matches = matchesData.matchday.filter(
    (match) => match.homeTeam === Number(id) || match.awayTeam === Number(id),
  );

  const currentLang = "es";

  const [section, setSection] = useState("squad");

  return (
    <>
      <TeamHeader {...team} />
      <div className="py-3 px-2 md:px-5">
        <nav className="flex flex-row w-full justify-around px-5 mb-10">
          <div
            id="squad"
            className={`cursor-pointer text-xl hover:border-laligared transition border-b-4 border-gray-200 w-32 text-center uppercase ${section === "squad" ? "border-laligared font-bold" : "hover:text-laligared"}`}
            onClick={() => setSection("squad")}
          >
            {translator(currentLang, "squad")}
          </div>
          <div
            id="results"
            className={`cursor-pointer text-xl hover:border-laligared transition border-b-4 border-gray-200 w-36 text-center uppercase ${section === "results" ? "border-laligared font-bold" : "hover:text-laligared"}`}
            onClick={() => setSection("results")}
          >
            {translator(currentLang, "results")}
          </div>
        </nav>
        {section === "squad" && (
          <Squad
            id="squadSection"
            team={team as Team}
            manager={manager}
            players={players.map((player) => ({
              ...player,
              team_id: Number(id),
            }))}
          />
        )}
        {section === "results" && (
          <section id="resultsSection" className="xl:p-10">
            <h2 className="text-3xl text-bold uppercase font-laliga mb-10 text-center">
              {`${team.shortName} ${translator(currentLang, "resultsSection")}`}
            </h2>
            <ResultsTable teamResults={true} matchdayResultsData={matches} />
          </section>
        )}
      </div>
    </>
  );
};

export { TeamDetail };
