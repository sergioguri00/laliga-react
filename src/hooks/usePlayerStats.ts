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

    for (const match of matches) {

      const allMatchEvents = [
        ...match.homeGoals.map((event) => ({ ...event, team: "home" as const })),
        ...match.awayGoals.map((event) => ({ ...event, team: "away" as const })),
        ...match.homeCards.map((event) => ({ ...event, team: "home" as const })),
        ...match.awayCards.map((event) => ({ ...event, team: "away" as const })),
      ];

      for (const event of allMatchEvents) {
        if ("scorer" in event && Number(event.scorer) === player?.id) {
          if (event.team === "home") {
            playerStats.scoredGoals++;
          } else {
            playerStats.scoredGoals++;
          }
        }
        if ("assist"  in event && Number(event.assist) === player?.id) {
          if (event.team === "home") {
            playerStats.assistedGoals++;
          } else {
            playerStats.assistedGoals++;
          }
        }
        if ("type" in event && Number(event.player) === player?.id) {
          if (event.type === "yellow") {
            playerStats.yellowCards++;
          } else if (event.type === "red") {
            playerStats.redCards++;
          }
        }
      }
    }
    return playerStats;
  }, [matches]);
};

export { usePlayerStats };
