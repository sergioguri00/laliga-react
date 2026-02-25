import { translator } from "@/utils/dictionary.js";
import stadiumsData from "@/data/stadiums.json";
import type { Standing, Team } from "@/interfaces/interfaces.ts";

/*const tableResponse = await fetch("http://localhost:1234/leagues/1/table");
const tableData = await tableResponse.json();
const teamPosition =
  tableData.findIndex(
    (teamLeague: { team_id: number }) => teamLeague.team_id === team.id
  ) + 1;
const teamStats = tableData[teamPosition - 1];*/

const TeamHeader = ({
  teamStandings,
  teamPosition,
  ...team
}: Team & {
  teamStandings: Standing | undefined;
  teamPosition: number;
}) => {
  const currentLang = "es";
  const stadium = stadiumsData.stadiums[Number(team.id) - 1];
  return (
    <div className="py-3 px-5 mt-20">
      {
        <div
          className={`w-full h-auto grid grid-cols-1 sm:h-96 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 items-center gap-4 rounded-3xl p-8 shadow-zinc-500 shadow-lg`}
          style={{
            background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 50%)`,
          }}
        >
          <div
            className={`text-center flex flex-col gap-4 ${team.mainColor === "#ffffff" || team.mainColor === "#ffd301" ? "text-mainblack" : "text-white"}`}
          >
            <div className="flex flex-col justify-between items-center font-laliga">
              <h1 className="text-4xl font-medium text-center font-laliga">
                {team.name}
              </h1>
              <div className="flex flex-row justify-center items-end">
                <p className="text-lg mr-1 uppercase">est.</p>
                <p className="text-2xl">{team.year}</p>
              </div>
            </div>
            <div>
              <p className="font-bold uppercase">
                {translator(currentLang, "president")}
              </p>
              <p>{team.president}</p>
            </div>
            <div>
              <p className="font-laliga text-2xl">{`POS. ${teamPosition}`}</p>
              <p className="font-laliga text-2xl">{`${teamStandings?.points ?? 0} pts`}</p>
              <p className="font-laliga text-2xl">{`${teamStandings?.won ?? 0} ${translator(currentLang, "wins")} | ${teamStandings?.drawn ?? 0} ${translator(currentLang, "draws")} | ${teamStandings?.lost ?? 0} ${translator(currentLang, "losses")}`}</p>
            </div>
          </div>
          <div>
            <a
              href={team.website}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col hover:scale-105 transition"
            >
              <img
                src={`/src/images/teams/${team.id}.webp`}
                alt={team.name}
                className="mx-auto h-full"
              />
            </a>
          </div>
          <div
            className={`grid grid-rows-2 justify-center items-center ${team.mainColor === "#ffffff" || team.mainColor === "#ffd301" ? "text-mainblack" : "text-white"}`}
          >
            <div className="text-center">
              <p className="text-2xl font-laliga">{stadium.name}</p>
              <div className="flex flex-row items-center mt-3 justify-between text-center">
                <div>
                  <p className="font-bold uppercase">est.</p>
                  <p>{stadium.year}</p>
                </div>
                <div>
                  <p className="font-bold uppercase">
                    {translator(currentLang, "capacity")}
                  </p>
                  <p>{stadium.capacity}</p>
                </div>
              </div>
            </div>
            <div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${stadium.latitude}%2C${stadium.longitude}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-col hover:scale-105 transition"
              >
                <img
                  src={`/src/images/stadiums/${team.id}.webp`}
                  alt={stadium.name}
                  className="mx-auto h-24"
                />
              </a>
            </div>
          </div>
        </div>
      }
      {/*section === "players" ? (
        <div className="mt-6 flex w-full justify-center sm:justify-end">
          <a
            href={getRelativeLocaleUrl(currentLang, `/teams/${team.id}`)}
            className="bg-mainblack text-white rounded-2xl w-fit p-4 hover:scale-105 transition hover:bg-laligared font-laliga uppercase text-lg"
          >
            {translator(currentLang, "returnToTheTeam")}
          </a>
        </div>
      ) : null*/}
    </div>
  );
};

export default TeamHeader;
