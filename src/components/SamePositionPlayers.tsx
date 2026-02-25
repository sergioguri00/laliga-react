import { SquadPlayers } from "@/components/SquadPlayers";
import { translator } from "@/utils/dictionary";
import type { Player, Team } from "@/interfaces/interfaces";

const currentLang = "es";

const SamePositionPlayers = ({
  team,
  players,
}: {
  team: Team;
  players: Player[];
}) => {
  return (
    <section className="xl:p-10">
      <h2 className="text-3xl text-bold uppercase font-laliga text-center">
        {`${translator(currentLang, "others")} ${translator(currentLang, (players[0].position.toLowerCase() + "Plural") as "goalkeeperPlural" | "defenderPlural" | "midfielderPlural" | "forwardPlural")} ${translator(currentLang, "ofTheTeam")}`}
      </h2>
      <div className="flex flex-col">
        <div>
          <div>
            <SquadPlayers team={team} players={players} showLegend={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SamePositionPlayers };
