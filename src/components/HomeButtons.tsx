import { translator } from "@/utils/dictionary.js";
const currentLang = "es";

const HomeButtons = () => {
  return (
    <div
      className="grid justify-center place-items-center gap-2 sm:gap-4 font-laliga text-sm md:text-xl xl:text-2xl xl:px-42"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(6rem, 1fr))" }}
    >
      <a href={"/teams/"}>
        <div className="home-button">
          {translator(currentLang, "exploreTeams")}
        </div>
      </a>
      <a href={"/players/"}>
        <div className="home-button">
          {translator(currentLang, "explorePlayers")}
        </div>
      </a>
      <a href={"/managers/"}>
        <div className="home-button">
          {translator(currentLang, "exploreManagers")}
        </div>
      </a>
      <a href={"/about/"}>
        <div className="home-button">
          {translator(currentLang, "aboutWebsite")}
        </div>
      </a>
    </div>
  );
};

export { HomeButtons };
