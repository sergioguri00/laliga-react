import { useMemo } from "react";
import type { Match, PlayerStats, Player } from "@/interfaces/interfaces";

const usePlayerStats = (matches: Match[], player: Player): PlayerStats => {
  return useMemo(() => {
    const playerStats: PlayerStats = {
      scoredGoals: 0,
      assistedGoals: 0,
      yellowCards: 0,
      redCards: 0,
    };

    const allMatchEvents = [
      ...matches.flatMap((match) =>
        match.homeGoals.map((event) => ({ ...event })),
      ),
      ...matches.flatMap((match) =>
        match.awayGoals.map((event) => ({ ...event })),
      ),
      ...matches.flatMap((match) =>
        match.homeCards.map((event) => ({ ...event })),
      ),
      ...matches.flatMap((match) =>
        match.awayCards.map((event) => ({ ...event })),
      ),
    ];

    for (const event of allMatchEvents) {
      if (
        "scorer" in event &&
        Number(event.scorer) === player?.id &&
        !event.isOwnGoal
      ) {
        playerStats.scoredGoals++;
      }
      if ("assist" in event && Number(event.assist) === player?.id)
        playerStats.assistedGoals++;
      if ("type" in event && Number(event.player) === player?.id) {
        if (event.type === "yellow") {
          playerStats.yellowCards++;
        } else if (event.type === "red") {
          playerStats.redCards++;
        }
      }
    }
    return playerStats;
  }, [matches, player]);
};

export { usePlayerStats };
