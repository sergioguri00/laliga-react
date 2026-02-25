import { useMemo } from "react";
import type { Match, Standing } from "@/interfaces/interfaces";

const useStandings = (matches: Match[]): Standing[] => {
  return useMemo(() => {
    const table: Record<number, Standing> = {};

    const getOrCreate = (teamId: number): Standing => {
      if (!table[teamId]) {
        table[teamId] = {
          teamId,
          played: 0,
          won: 0,
          drawn: 0,
          lost: 0,
          gf: 0,
          ga: 0,
          gd: 0,
          points: 0,
        };
      }
      return table[teamId];
    };

    for (const match of matches) {
      const hg = match.homeGoals.length;
      const ag = match.awayGoals.length;
      const home = getOrCreate(match.homeTeam);
      const away = getOrCreate(match.awayTeam);

      home.played++;
      away.played++;
      home.gf += hg;
      home.ga += ag;
      away.gf += ag;
      away.ga += hg;

      if (hg > ag) {
        home.won++;
        home.points += 3;
        away.lost++;
      } else if (hg < ag) {
        away.won++;
        away.points += 3;
        home.lost++;
      } else {
        home.drawn++;
        home.points++;
        away.drawn++;
        away.points++;
      }

      home.gd = home.gf - home.ga;
      away.gd = away.gf - away.ga;
    }

    return Object.values(table).sort(
      (a, b) =>
        b.points - a.points ||
        b.gd - a.gd ||
        b.gf - a.gf,
    );
  }, [matches]);
};

export default useStandings;
