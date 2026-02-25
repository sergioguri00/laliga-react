import { useParams } from "react-router-dom";
import { MatchEvents } from "@/components/MatchEvents";
import { MatchStats } from "@/components/MatchStats";
import { formatDateDay, formatDateHour } from "@/utils/formatDate";
import type { Match } from "@/interfaces/interfaces";
import teamsData from "@/data/teams.json";
import stadiumsData from "@/data/stadiums.json";
import matchesData from "@/data/matches.json";
import playersData from "@/data/players.json";

const MatchDetail = () => {
  const { id } = useParams() as { id: string };
  const match = matchesData.matches.find((match) => match.id === Number(id)) as
    | Match
    | undefined;
  if (!match) {
    return <p className="py-24">Match not found</p>;
  }
  const homeTeam = teamsData.teams.find((team) => team.id === match.homeTeam);
  const awayTeam = teamsData.teams.find((team) => team.id === match.awayTeam);
  if (!homeTeam || !awayTeam) {
    return <p className="py-24">Team not found</p>;
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
  const parseMinute = (minute: string): [number, number] => {
    if (minute.includes("+")) {
      const [base, extra] = minute.split("+").map(Number);
      return [base, extra];
    }
    return [Number(minute), 0];
  };

  const events = [...homeEvents, ...awayEvents].sort((a, b) => {
    const [aBase, aExtra] = parseMinute(a.minute);
    const [bBase, bExtra] = parseMinute(b.minute);
    if (aBase !== bBase) return aBase - bBase;
    return aExtra - bExtra;
  });
  return (
    <>
      <section
        className="pt-28 pb-8 px-4 xl:px-96 flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/stadiums/backgrounds/${stadium.id}.webp)`,
        }}
      >
        <div className="bg-white rounded-2xl flex flex-col gap-4">
          <div
            className="grid items-center justify-center text-mainblack text-sm b-4 py-4"
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
            className="text-xl font-laliga text-mainblack grid text-center items-center pt-4"
            style={{ gridTemplateColumns: "40% 20% 40%" }}
          >
            <a
              href={`/teams/${homeTeam.id}`}
              className="flex flex-col justify-center items-center hover:scale-105 text-mainblack hover:text-laligared transition"
            >
              <img
                src={`/assets/teams/${homeTeam.id}.webp`}
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
                src={`/assets/teams/${awayTeam.id}.webp`}
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
        </div>
      </section>
    </>
  );
};

export { MatchDetail };
