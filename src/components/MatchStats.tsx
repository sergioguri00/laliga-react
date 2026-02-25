import { translator } from "@/utils/dictionary.js";
import type { Match, Team } from "@/interfaces/interfaces.ts";

const currentLang = "es";

const MatchStats = ({
  match,
  homeTeam,
  awayTeam,
}: {
  match: Match;
  homeTeam: Team;
  awayTeam: Team;
}) => {
  return (
    <div className="flex flex-col px-4 xl:px-96 py-4">
      <div className="flex flex-col justify-center items-center">
        <p className="-mb-6">{translator(currentLang, "possession")}</p>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <p>{match.homePossession}%</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100"> </div>
            <div
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  homeTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : homeTeam.mainColor,
                width: `${match.homePossession === 0 ? 0 : match.homePossession}%`,
                alignSelf: "flex-end",
              }}
            >
              {" "}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-end">{match.awayPossession}%</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100">{}</div>
            <div
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  awayTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : awayTeam.mainColor,
                width: `${match.awayPossession === 0 ? 0 : match.awayPossession}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="-mb-6">{translator(currentLang, "shots")}</p>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <p id="pHomeShots">{match.homeShots}</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100"> </div>
            <div
              id="homeShots"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  homeTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : homeTeam.mainColor,
                alignSelf: "flex-end",
                width: `${match.homeShots === 0 ? 0 : (match.homeShots / (match.homeShots + match.awayShots)) * 100}%`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className="flex flex-col">
            <p id="pAwayShots" className="text-end">
              {match.awayShots}
            </p>
            <div className="w-full h-1 rounded-2xl bg-slate-100">{}</div>
            <div
              id="awayShots"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  awayTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : awayTeam.mainColor,
                width: `${match.awayShots === 0 ? 0 : (match.awayShots / (match.homeShots + match.awayShots)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="-mb-6">{translator(currentLang, "shotsOnTarget")}</p>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <p id="phomeShotsOnTarget">{match.homeShotsOnTarget}</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100"> </div>
            <div
              id="homeShotsOnTarget"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  homeTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : homeTeam.mainColor,
                alignSelf: "flex-end",
                width: `${match.homeShotsOnTarget === 0 ? 0 : (match.homeShotsOnTarget / (match.homeShotsOnTarget + match.awayShotsOnTarget)) * 100}%`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className="flex flex-col">
            <p id="pAwayShotsOnTarget" className="text-end">
              {match.awayShotsOnTarget}
            </p>
            <div className="w-full h-1 rounded-2xl bg-slate-100">{}</div>
            <div
              id="awayShotsOnTarget"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  awayTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : awayTeam.mainColor,
                width: `${match.awayShotsOnTarget === 0 ? 0 : (match.awayShotsOnTarget / (match.homeShotsOnTarget + match.awayShotsOnTarget)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="-mb-6">{translator(currentLang, "corners")}</p>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <p id="phomeCorners">{match.homeCorners}</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100"> </div>
            <div
              id="homeCorners"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  homeTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : homeTeam.mainColor,
                alignSelf: "flex-end",
                width: `${match.homeCorners === 0 ? 0 : (match.homeCorners / (match.homeCorners + match.awayCorners)) * 100}%`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className="flex flex-col">
            <p id="pAwayCorners" className="text-end">
              {match.awayCorners}
            </p>
            <div className="w-full h-1 rounded-2xl bg-slate-100">{}</div>
            <div
              id="awayCorners"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  awayTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : awayTeam.mainColor,
                width: `${match.awayCorners === 0 ? 0 : (match.awayCorners / (match.homeCorners + match.awayCorners)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="-mb-6">{translator(currentLang, "offsides")}</p>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <p id="phomeOffsides">{match.homeOffsides}</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100"> </div>
            <div
              id="homeOffsides"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  homeTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : homeTeam.mainColor,
                alignSelf: "flex-end",
                width: `${match.homeOffsides === 0 ? 0 : (match.homeOffsides / (match.homeOffsides + match.awayOffsides)) * 100}%`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className="flex flex-col">
            <p id="pAwayOffsides" className="text-end">
              {match.awayOffsides}
            </p>
            <div className="w-full h-1 rounded-2xl bg-slate-100">{}</div>
            <div
              id="awayOffsides"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  awayTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : awayTeam.mainColor,
                width: `${match.awayOffsides === 0 ? 0 : (match.awayOffsides / (match.homeOffsides + match.awayOffsides)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="-mb-6">{translator(currentLang, "fouls")}</p>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col">
            <p id="phomeFouls">{match.homeFouls}</p>
            <div className="w-full h-1 rounded-2xl bg-slate-100"> </div>
            <div
              id="homeFouls"
              className="h-1 rounded-2xl -mt-1"
              style={{
                backgroundColor:
                  homeTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : homeTeam.mainColor,
                alignSelf: "flex-end",
                width: `${match.homeFouls === 0 ? 0 : (match.homeFouls / (match.homeFouls + match.awayFouls)) * 100}%`,
              }}
            >
              {" "}
            </div>
          </div>
          <div className="flex flex-col">
            <p id="pAwayFouls" className="text-end">
              {match.awayFouls}
            </p>
            <div className="w-full h-1 rounded-2xl bg-slate-100">{}</div>
            <div
              id="awayFouls"
              className="h-1 rounded-2xl -mt-1 align-self-start"
              style={{
                backgroundColor:
                  awayTeam.mainColor === "#ffffff"
                    ? "#00001b"
                    : awayTeam.mainColor,
                width: `${match.awayFouls === 0 ? 0 : (match.awayFouls / (match.homeFouls + match.awayFouls)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchStats;
