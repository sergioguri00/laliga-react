import { useParams } from "react-router-dom";
import teamsData from "@/data/teams.json";
import managersData from "@/data/managers.json";
import playersData from "@/data/players.json";
import TeamHeader from "@/components/TeamHeader.js";
import Squad from "@/components/Squad.jsx";
import { translator } from "@/utils/dictionary.js";
import type { Team } from "@/interfaces/interfaces.ts";
import { useState } from "react";
import useDocumentTitle from "@/utils/useDocumentTitle";

const TeamDetail = () => {
  const { id } = useParams() as { id: string };
  const team = teamsData.teams[Number(id) - 1];
  useDocumentTitle(team?.shortName ?? "Equipo");
  const manager = managersData.managers[Number(id) - 1];
  const players = playersData.teams[Number(id) - 1].players;

  const currentLang = "es";

  const [section, setSection] = useState("squad");

  return (
    <>
      <TeamHeader {...team} />
      <div className="py-3 px-2 md:px-5">
        <nav className="flex flex-row w-full justify-around px-5 mb-10">
          <div
            id="squad"
            className={`cursor-pointer text-xl hover:border-laligared transition border-b-4 border-gray-200 w-32 text-center uppercase ${section === "squad" ? "border-laligared font-bold" : "hover:text-laligared"}`}
            onClick={() => setSection("squad")}
          >
            {translator(currentLang, "squad")}
          </div>
          <div
            id="results"
            className={`cursor-pointer text-xl hover:border-laligared transition border-b-4 border-gray-200 w-36 text-center uppercase ${section === "results" ? "border-laligared font-bold" : "hover:text-laligared"}`}
            onClick={() => setSection("results")}
          >
            {translator(currentLang, "results")}
          </div>
        </nav>
        {section === "squad" && (
          <Squad
            id="squadSection"
            team={team as Team}
            manager={manager}
            players={players.map((player) => ({
              ...player,
              team_id: Number(id),
            }))}
          />
        )}
        {section === "results" && (
          <section id="resultsSection" className="xl:p-10">
            <h2 className="text-3xl text-bold uppercase font-laliga mb-10 text-center">
              {`${team.shortName} ${translator(currentLang, "resultsSection")}`}
            </h2>
            {/*<ResultsTable teamResults={true} matchdayResultsData={resultsData} />*/}
          </section>
        )}
      </div>

      {/*<script>
        document.addEventListener("astro:page-load", () => {
        if (window.location.href.includes("#results")) {
            changeTab("results");
        } else if (window.location.href.includes("#squad")) {
            changeTab("squad");
        } else {
            const squadSection = document.getElementById("squadSection");
            if (squadSection) squadSection.classNameList.remove("hidden");
        }

        const sections = document.querySelectorAll("div.section");
        sections.forEach((section) => {
            section.addEventListener("click", () => changeTab(section.id));
        });

        function changeTab(tab: string) {
            const squadSection = document.getElementById("squadSection");
            const resultsSection = document.getElementById("resultsSection");
            const squad = document.getElementById("squad");
            const results = document.getElementById("results");
            if (tab === "results") {
            squadSection?.classNameList.add("hidden");
            resultsSection?.classNameList.remove("hidden");
            if (squad && results) {
                squad.classNameList.remove("border-laligared");
                squad.classNameList.remove("font-bold");
                squad.classNameList.add("hover:text-laligared");
                results.classNameList.add("border-laligared");
                results.classNameList.add("font-bold");
                results.classNameList.remove("hover:text-laligared");
                window.location.href = "#results";
            }
            } else {
            squadSection?.classNameList.remove("hidden");
            resultsSection?.classNameList.add("hidden");
            if (squad && results) {
                squad.classNameList.add("border-laligared");
                squad.classNameList.add("font-bold");
                squad.classNameList.remove("hover:text-laligared");
                results.classNameList.remove("border-laligared");
                results.classNameList.remove("font-bold");
                results.classNameList.add("hover:text-laligared");
                window.location.href = "#squad";
            }
            }
        }
        });
    </script>
    */}
    </>
  );
};

export default TeamDetail;
