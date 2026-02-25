import { formatDateDay, formatDateHour } from "@/utils/formatDate.js";
import teamsData from "@/data/teams.json";
import stadiumsData from "@/data/stadiums.json";
import matchesData from "@/data/matches.json";
import { useParams } from "react-router-dom";
import MatchEvents from "@/components/MatchEvents";
import MatchStats from "@/components/MatchStats";
import playersData from "@/data/players.json";
import type { Match, Player } from "@/interfaces/interfaces";

const MatchDetail = () => {
  const { id } = useParams() as { id: string };
  const match = matchesData.matchday.find(
    (match) => match.id === Number(id),
  ) as Match | undefined;
  if (!match) {
    return <p>Match not found</p>;
  }
  const homeTeam = teamsData.teams.find((team) => team.id === match.homeTeam);
  const awayTeam = teamsData.teams.find((team) => team.id === match.awayTeam);
  if (!homeTeam || !awayTeam) {
    return <p>Team not found</p>;
  }
  const stadium = stadiumsData.stadiums[match.homeTeam - 1];

  const homeEvents = [
    ...match.homeGoals.map((event) => ({ ...event, team: "home" as const })),
    ...match.homeCards.map((event) => ({ ...event, team: "home" as const })),
  ];
  const awayEvents = [
    ...match.awayGoals.map((event) => ({ ...event, team: "away" as const })),
    ...match.awayCards.map((event) => ({ ...event, team: "away" as const })),
  ];
  const events = [...homeEvents, ...awayEvents].sort(
    (a, b) => Number(a.minute) - Number(b.minute),
  );
  return (
    <>
      <section className="py-24 px-2 lg:px-10 flex flex-col">
        <div
          className="grid items-center justify-center px-4 xl:px-96 text-mainblack text-sm"
          style={{ gridTemplateColumns: "45% 5% 45%" }}
        >
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${stadium.latitude}%2C${stadium.longitude}`}
            target="_blank"
            rel="noreferrer noopener"
            className="text-center sm:text-end inline-block hover:text-laligared transition"
          >
            <p>{stadium.name}</p>
          </a>
          <p className="text-center">·</p>
          <p className="text-start">
            {`${formatDateDay(match.date)} ${formatDateHour(match.time)}`}
          </p>
        </div>
        <div
          className="text-xl font-laliga text-mainblack grid text-center items-center pt-4 px-4 xl:px-96"
          style={{ gridTemplateColumns: "40% 20% 40%" }}
        >
          <a
            href={`/teams/${homeTeam.id}`}
            className="flex flex-col justify-center items-center hover:scale-105 text-mainblack hover:text-laligared transition"
          >
            <img
              src={`/src/images/teams/${homeTeam.id}.webp`}
              alt={homeTeam.shortName}
              className="w-20 h-20 md:w-32 md:h-32"
            />
            <p className="text-sm sm:text-xl">{homeTeam.shortName}</p>
          </a>
          <div className="text-4xl sm:text-5xl text-laligared">
            <p>{`${match.homeGoals.length}-${match.awayGoals.length}`}</p>
          </div>
          <a
            href={`/teams/${awayTeam.id}`}
            className="flex flex-col justify-center items-center hover:scale-105 text-mainblack hover:text-laligared transition"
          >
            <img
              src={`/src/images/teams/${awayTeam.id}.webp`}
              alt={awayTeam.shortName}
              className="w-20 h-20 md:w-32 md:h-32"
            />
            <p className="text-sm sm:text-xl">{awayTeam.shortName}</p>
          </a>
        </div>
        <MatchEvents
          events={events}
          homePlayers={playersData.teams[match.homeTeam - 1].players}
          awayPlayers={playersData.teams[match.awayTeam - 1].players}
        />
        <MatchStats match={match} homeTeam={homeTeam} awayTeam={awayTeam} />
      </section>
    </>
  );
};

export default MatchDetail;
