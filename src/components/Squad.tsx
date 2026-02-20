import { translator,  } from "@/utils/dictionary.ts";
import type { Team, Manager, Player } from "@/interfaces/interfaces.ts";
import SquadPlayers from "@/components/SquadPlayers";
import SquadManager from "@/components/SquadManager";

const Squad = ({
  id,
  team,
  manager,
  players,
}: {
  id: string;
  team: Team;
  manager: Manager;
  players: Player[];
}) => {
  const currentLang = "es";
  return (
    <section id={`${id}`} className="xl:p-10">
      <h2 className="text-3xl text-bold uppercase font-laliga text-center">
        {`${team.shortName} ${translator(currentLang, "squadSection")}`}
      </h2>
      <div className="flex flex-col">
        <div>
          <SquadManager manager={manager} team={team} />
          <div>
            <SquadPlayers players={players.filter((player: Player) =>
                player.position === "Goalkeeper")} team={team} />
            <SquadPlayers players={players.filter((player: Player) =>
                player.position === "Defender")} team={team} />
            <SquadPlayers players={players.filter((player: Player) =>
                player.position === "Midfielder")} team={team} />
            <SquadPlayers players={players.filter((player: Player) =>
                player.position === "Forward")} team={team} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
