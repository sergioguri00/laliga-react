import { translator } from "@/utils/dictionary";
import { formatDateDay, formatDateHour } from "@/utils/formatDate";
import teamsData from "@/data/teams.json";

const currentLang = "es";

const ResultsTable = ({
  matchdayResultsData,
  teamResults,
}: {
  matchdayResultsData: any[];
  teamResults: boolean;
}) => {
  return (
    <div>
      <table className="w-full text-center flex flex-col gap-4 justify-center">
        {matchdayResultsData.map((result: any) => (
          <div key={result.id}>
            <tr
              className={`${teamResults === true ? "block" : "hidden"} border-b border-mainblack my-4`}
            >
              <td className="uppercase font-laliga text-2xl">{`${translator(currentLang, "matchday")} ${result.matches}`}</td>
            </tr>
            <tr className="font-laliga text-sm md:text-xl gap-2 md:gap-10 flex justify-between items-center">
              <td className="w-22 md:w-32 flex flex-col sm:flex-row sm:gap-2 text-lg sm:text-xl justify-end text-center">
                <p>{formatDateDay(result.date)}</p>
                <p>{formatDateHour(result.time)}</p>
              </td>
              <td className="lg:w-60">
                <a
                  href={`/teams/${result.homeTeam}`}
                  className="flex-row flex items-center justify-self-end hover:scale-105 hover:text-laligared transition"
                >
                  <img
                    src={`/assets/teams/${result.homeTeam}.webp`}
                    className="h-10"
                  />
                  <p className="text-xl hidden lg:block">
                    {teamsData.teams[result.homeTeam - 1].shortName}
                  </p>
                </a>
              </td>
              <td className="font-laliga w-12 text-xl sm:text-2xl text-laligared">
                {result.homeGoals.length}-{result.awayGoals.length}
              </td>
              <td className="lg:w-60">
                <a
                  href={`/teams/${result.awayTeam}`}
                  className="flex-row flex items-center justify-self-start hover:scale-105 hover:text-laligared transition"
                >
                  <img
                    src={`/assets/teams/${result.awayTeam}.webp`}
                    className="h-10"
                  />
                  <p className="hidden lg:block">
                    {teamsData.teams[result.awayTeam - 1].shortName}
                  </p>
                </a>
              </td>
              <td className="w-18 md:w-32 text-end">
                <a href={`/matches/${result.id}`}>
                  <button className="p-2 rounded-lg hover:scale-105 text-sm transition match-button uppercase cursor-pointer">
                    {translator(currentLang, "viewMatch")}
                  </button>
                </a>
              </td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  );
};

export { ResultsTable };
