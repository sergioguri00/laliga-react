import Select from "react-select";
import { useState, useEffect } from "react";
import { translator } from "@/utils/dictionary";
import { ResultsTable } from "@/components/ResultsTable";
import { selectorStyles } from "@/styles/selectorStyles";
import { toTitleCase } from "@/utils/toTitleCase";
import matchesData from "@/data/matches.json";
import type { Match } from "@/interfaces/interfaces";
import { getMatchOptions } from "@/utils/getMatchOptions";

const Matches = () => {
  const lastMatchdayNumber = matchesData.matches.reduce(
    (max, match) => Math.max(max, match.matchday),
    0,
  );
  const [selectedOption, setSelectedOption] = useState({
    value: "last",
    label: toTitleCase(translator("es", "lastMatchday")),
  });
  const [lastMatchdayMatches, setLastMatchdayMatches] = useState(
    matchesData.matches.filter(
      (match) => match.matchday === lastMatchdayNumber,
    ),
  );

  useEffect(() => {
    setLastMatchdayMatches(
      matchesData.matches.filter(
        (match) =>
          match.matchday ===
          (selectedOption.value === "last"
            ? lastMatchdayNumber
            : parseInt(selectedOption.value)),
      ),
    );
  }, [selectedOption]);

  return (
    <section className="pt-24 pb-10 px-4 xl:px-72">
      <Select
        options={getMatchOptions(matchesData.matches as Match[])}
        value={selectedOption}
        onChange={(option) => option && setSelectedOption(option)}
        styles={selectorStyles()}
        isSearchable={false}
      />
      <h1 className="text-4xl font-bold font-laliga text-center my-10">
        {selectedOption.value === "last"
          ? translator("es", "lastMatchday").toUpperCase()
          : `${translator("es", "matchday")} ${selectedOption.value}`}
      </h1>
      <ResultsTable
        matchdayResultsData={lastMatchdayMatches as Match[]}
        teamResults={false}
      />
    </section>
  );
};

export { Matches };
