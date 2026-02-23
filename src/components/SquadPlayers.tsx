import { translator } from "@/utils/dictionary.ts";
import type { Player, Team } from "@/interfaces/interfaces.ts";
import { getCountryCode } from "@/utils/countryCodes.ts";
import { formatBirthdayDate } from "@/utils/formatDate";
import { textColorByTeam } from "@/utils/textColorByTeam.ts";

const SquadPlayers = ({
  players,
  team,
  showLegend,
}: {
  players: Player[];
  team: Team;
  showLegend: boolean;
}) => {
  const currentLang = "es";

  const getPositionKey = (
    position: string,
  ): "goalkeepers" | "defenders" | "midfielders" | "forwards" => {
    switch (position.toLowerCase()) {
      case "goalkeeper":
        return "goalkeepers";
      case "defender":
        return "defenders";
      case "midfielder":
        return "midfielders";
      case "forward":
        return "forwards";
      default:
        return "defenders";
    }
  };

  return (
    <>
      {showLegend && (
        <div className="border-b border-mainblack w-full text-start mt-10">
          <p className="uppercase font-laliga text-2xl pb-2">
            {translator(currentLang, getPositionKey(players[0].position))}
          </p>
        </div>
      )}
      <div
        className="grid mt-4 justify-items-center justify-center gap-4 p-3 text-sm md:text-md xl:text-[16px]"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 300px)",
        }}
      >
        {players.map((player: Player) =>
          player.position === player.position ? (
            <a
              href={`/players/${player.id}`}
              className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px] hover:opacity-80 hover:scale-[0.98] transition`}
              key={player.id}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
                }}
              />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/src/images/background-teams-grid.webp')`,
                }}
              />
              <div className="relative">
                <div className="absolute inset-0 bg-no-repeat bg-center">
                  <img
                    src={`/src/images/teams/${team.id}.webp`}
                    alt={team.name}
                    className="w-20 h-20 object-cover"
                  />
                </div>
                <p
                  className="absolute top-2 right-2 z-10 text-bold text-5xl font-laliga leading-none"
                  style={{
                    color: textColorByTeam(team.id),
                  }}
                >
                  {player.number}
                </p>
                <img
                  src={`/src/images/players/${team.id}/${player.id}.webp`}
                  alt={player.knownAs || player.lastName}
                  className="w-[256px] aspect-square object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
              </div>
              <div className="flex flex-col justify-center relative gap-4 z-10">
                <div className="self-center flex flex-row gap-2">
                  <p
                    className="text-bold text-lg sm:text-2xl font-laliga self-end"
                    style={{ color: textColorByTeam(team.id) }}
                  >
                    {player.knownAs !== null ? player.knownAs : player.lastName}
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <div className="flex flex-row items-center">
                    <img
                      src={`/src/images/flags/${getCountryCode(player.country)}.svg`}
                      alt={String(player.country)}
                      className="w-6 h-4"
                    />
                  </div>
                  <p
                    className="uppercase font-bold text-[10px] sm:text-sm"
                    style={{ color: textColorByTeam(team.id) }}
                  >
                    {translator(
                      currentLang,
                      player.position.toLowerCase() as
                        | "goalkeeper"
                        | "defender"
                        | "midfielder"
                        | "forward",
                    )}
                  </p>
                </div>
              </div>
              <div
                className="grid grid-cols-2 col-span-2 border-t pt-2 gap-4 relative z-10 place-self-center"
                style={{ color: textColorByTeam(team.id) }}
              >
                <div>
                  <p className="text-center uppercase font-bold">
                    {translator(currentLang, "birthday")}
                  </p>
                  <p className="text-center">
                    {formatBirthdayDate(
                      player.birthday.toString().split("T")[0],
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-center uppercase font-bold">
                    {translator(currentLang, "height")}
                  </p>
                  <p className="text-center">{player.height} cm</p>
                </div>
              </div>
            </a>
          ) : null,
        )}
      </div>
    </>
  );
};

export default SquadPlayers;
