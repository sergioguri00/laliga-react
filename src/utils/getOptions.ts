import { translator } from "@/utils/dictionary";
import { toTitleCase } from "@/utils/toTitleCase";
import type { Match } from "@/interfaces/interfaces";
import teamsData from "@/data/teams.json";

const getMatchOptions = (matchesData: Match[]) => {
  const matchOptions = matchesData
    .reduce((acc: { value: string; label: string }[], match) => {
      const matchdayOption = {
        value: `${match.matchday}`,
        label: `${toTitleCase(translator("es", "matchday"))} ${match.matchday}`,
      };
      if (!acc.some((option) => option.value === matchdayOption.value)) {
        acc.push(matchdayOption);
      }
      return acc;
    }, [])
    .sort((a, b) => parseInt(a.value) - parseInt(b.value));

  const options = [
    { value: "last", label: toTitleCase(translator("es", "lastMatchday")) },
    ...matchOptions,
  ];

  return options;
};

const getPositionOptions = () => {
  return [
    { value: "Goalkeeper", label: "Porteros" },
    { value: "Defender", label: "Defensas" },
    { value: "Midfielder", label: "Centrocampistas" },
    { value: "Forward", label: "Delanteros" },
  ];
};

const getTeamOptions = () => {
  return teamsData.teams.map((team) => ({
    value: team.id.toString(),
    label: team.shortName,
  }));
};

export { getMatchOptions, getPositionOptions, getTeamOptions };
