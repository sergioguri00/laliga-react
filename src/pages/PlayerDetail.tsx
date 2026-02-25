import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { usePlayerStats } from "@/hooks/usePlayerStats";
import { TeamHeader } from "@/components/TeamHeader";
import { SamePositionPlayers } from "@/components/SamePositionPlayers";
import {
  translator,
  countryTranslator,
  countriesDictionary,
} from "@/utils/dictionary";
import { formatBirthdayDate } from "@/utils/formatDate";
import { getCountryCode } from "@/utils/countryCodes";
import type { Player, Team, Match } from "@/interfaces/interfaces";
import playersData from "@/data/players.json";
import teamsData from "@/data/teams.json";
import matchesData from "@/data/matches.json";

const currentLang = "es";

const PlayerDetail = () => {
  const { id } = useParams() as { id: string };

  const player = playersData.teams
    .find((team) => team.players.some((p) => p.id === parseInt(id)))
    ?.players.find((p) => p.id === parseInt(id)) as Player;

  const team = teamsData.teams.find(
    (team) => team.id === player.teamId,
  ) as Team;

  useDocumentTitle(player?.knownAs ?? player?.lastName ?? "Jugador");

  const samePositionPlayers = playersData.teams[team.id - 1].players.filter(
    (samePositionPlayer) =>
      samePositionPlayer.position === player.position &&
      samePositionPlayer.id !== player.id,
  ) as Player[];

  const matches = matchesData.matches.filter(
    (match) =>
      match.homeTeam === Number(player.teamId) ||
      match.awayTeam === Number(player.teamId),
  );

  const playerStats = usePlayerStats(matches as Match[], player as Player);

  return (
    <>
      <TeamHeader {...team} />
      <section className="w-full flex flex-col lg:flex-row justify-center py-10 lg:px-36 xl:px-52 items-center gap-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="justify-self-center lg:order-2">
            <img
              src={`/assets/players/${team.id}/${player.id}.webp`}
              alt={`${player.knownAs !== null ? `${player.knownAs}` : `${player.name} ${player.lastName}`}`}
              className="w-80 h-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <p
              className="font-laliga text-6xl lg:self-start"
              style={{
                color:
                  team.mainColor !== "#ffffff" ? team.mainColor : "#00001B",
              }}
            >
              {player.number}
            </p>
            <h1 className="font-laliga text-5xl lg:self-start">
              {player.knownAs !== null
                ? `${player.knownAs}`
                : `${player.lastName}`}
            </h1>
            <p className="font-laliga text-2xl mt-4 lg:self-start">
              {translator(
                currentLang,
                player.position.toLowerCase() as
                  | "goalkeeper"
                  | "defender"
                  | "midfielder"
                  | "forward",
              )}
            </p>
            <div className="flex flex-row items-center mt-4 lg:self-start">
              <img
                src={`/assets/flags/${getCountryCode(player.country)}.svg`}
                alt={player.country}
                className="mr-2 w-6 h-4"
              />
              <p className="text-center text-sm">
                {countryTranslator(
                  currentLang,
                  player.country as keyof (typeof countriesDictionary)[typeof currentLang],
                )}
              </p>
            </div>
            <div className="mt-4 lg:self-start">
              <p className="font-laliga text-lg text-center lg:text-start">
                {translator(currentLang, "fullName")}
              </p>
              <p className="text-center lg:text-start">
                {`${player.name} ${player.lastName}`}
              </p>
            </div>
            <div className="mt-4 lg:self-start">
              <p className="font-laliga text-lg text-center lg:text-start">
                {translator(currentLang, "height")}
              </p>
              <p>{player.height} cm</p>
            </div>
            <div className="mt-4 lg:self-start">
              <p className="font-laliga text-lg text-center lg:text-start">
                {translator(currentLang, "birthday")}
              </p>
              <p>
                {formatBirthdayDate(player.birthday.toString().split("T")[0])}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center align-middle">
          <a href={`/teams/${team.id}`} className="hover:scale-105 transition">
            <img
              src={`/assets/teams/${team.id}.webp`}
              alt={`${team.shortName} logo`}
              className="w-32 h-32 hidden lg:block"
            />
          </a>
          <h1 className="font-laliga text-2xl text-center">
            {translator(currentLang, "statistics")}
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 font-laliga gap-2 mt-4">
            <div className="flex flex-col justify-center items-center align-middle">
              <p>{translator(currentLang, "goalsScored")}</p>
              <span
                className="text-4xl"
                style={{
                  color:
                    team.mainColor != "#ffffff" ? team.mainColor : "#00001B",
                }}
              >
                {playerStats.scoredGoals}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center align-middle">
              <p>{translator(currentLang, "assists")}</p>
              <span
                className="text-4xl"
                style={{
                  color:
                    team.mainColor != "#ffffff" ? team.mainColor : "#00001B",
                }}
              >
                {playerStats.assistedGoals}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center align-middle">
              <p>{translator(currentLang, "yellowCards")}</p>
              <span
                className="text-4xl"
                style={{
                  color:
                    team.mainColor != "#ffffff" ? team.mainColor : "#00001B",
                }}
              >
                {playerStats.yellowCards}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center align-middle">
              <p>{translator(currentLang, "redCards")}</p>
              <span
                className="text-4xl"
                style={{
                  color:
                    team.mainColor != "#ffffff" ? team.mainColor : "#00001B",
                }}
              >
                {playerStats.redCards}
              </span>
            </div>
          </div>
        </div>
      </section>
      <SamePositionPlayers team={{ ...team }} players={samePositionPlayers} />
    </>
  );
};

export { PlayerDetail };
