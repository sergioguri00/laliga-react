import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { TeamSquare } from "@/components/TeamSquare";
import type { Team } from "@/interfaces/interfaces";
import teamsData from "@/data/teams.json";
import stadiumsData from "@/data/stadiums.json";

const Teams = () => {
  useDocumentTitle("Equipos");
  return (
    <>
      <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 py-3 px-10 mt-20">
        {teamsData.teams.map((team: Team) => (
          <TeamSquare
            key={team.id}
            team={team}
            stadium={stadiumsData.stadiums[team.id - 1]}
          />
        ))}
      </section>
    </>
  );
};

export default Teams;
