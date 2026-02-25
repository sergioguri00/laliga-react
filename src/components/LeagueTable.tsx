import { useStandings } from "@/hooks/useStandings";
import { translator } from "@/utils/dictionary";
import type { Match, Standing } from "@/interfaces/interfaces";
import matchesData from "@/data/matches.json";
import teamsData from "@/data/teams.json";

const currentLang = "es";

const LeagueTable = () => {
  const tableData = useStandings(matchesData.matchday as Match[]);
  return (
    <div className="px-4 lg:px-48 xl:px-96">
      <h2 className="text-2xl text-bold uppercase text-center font-laliga">
        {translator(currentLang, "leagueTable")}
      </h2>
      <table className="w-full font-laliga leagueTable mt-4">
        <thead>
          <tr>
            <th>pos</th>
            <th>{translator(currentLang, "team")}</th>
            <th>pts</th>
            <th>{translator(currentLang, "mp")}</th>
            <th className="hidden md:table-cell">
              {translator(currentLang, "mw")}
            </th>
            <th className="hidden md:table-cell">
              {translator(currentLang, "md")}
            </th>
            <th className="hidden md:table-cell">
              {translator(currentLang, "ml")}
            </th>
            <th className="hidden md:table-cell">
              {translator(currentLang, "gf")}
            </th>
            <th className="hidden md:table-cell">
              {translator(currentLang, "ga")}
            </th>
            <th className="hidden md:table-cell">
              {translator(currentLang, "gd")}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((team: Standing, index: number) => (
            <tr key={team.teamId}>
              <td className="table-cell">
                <p className="tablePosition min-w-7.5 max-w-7.5 min-h-7.5 max-h-7.5 rounded-xl justify-self-center">
                  {index + 1}
                </p>
              </td>
              <td className="table-cell">
                <a
                  href={`/teams/${team.teamId}`}
                  className="flex-row flex items-center justify-self-start hover:scale-105 hover:text-laligared transition"
                >
                  <img
                    src={`/assets/teams/${team.teamId}.webp`}
                    className="w-8 h-8 mt-px"
                  />
                  {teamsData.teams.find((t) => t.id === team.teamId)?.shortName}
                </a>
              </td>
              <td>{team.points}</td>
              <td>{team.played}</td>
              <td className="hidden md:table-cell">{team.won}</td>
              <td className="hidden md:table-cell">{team.drawn}</td>
              <td className="hidden md:table-cell">{team.lost}</td>
              <td className="hidden md:table-cell">{team.gf}</td>
              <td className="hidden md:table-cell">{team.ga}</td>
              <td className="hidden md:table-cell">
                {team.gd > 0 ? `+${team.gd}` : team.gd}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

{
  /*<script>
  document.addEventListener("astro:page-load", () => {
    const tablePosition =
      document.querySelectorAll<HTMLElement>(".tablePosition");

    for (let i = 0; i < tablePosition.length; i++) {
      if (i == 0) {
        tablePosition[i].style.backgroundColor = "#EFBF04";
        tablePosition[i].style.color = "white";
      } else if (i > 0 && i < 4) {
        tablePosition[i].style.backgroundColor = "#0000FF";
        tablePosition[i].style.color = "white";
      } else if (i === 4) {
        tablePosition[i].style.backgroundColor = "#FF7600";
        tablePosition[i].style.color = "white";
      } else if (i === 5) {
        tablePosition[i].style.backgroundColor = "#5CED73";
        tablePosition[i].style.color = "white";
      } else if (i > 16) {
        tablePosition[i].style.backgroundColor = "red";
        tablePosition[i].style.color = "white";
      }
    }
  });
</script>*/
}

export { LeagueTable };
