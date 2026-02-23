import { translator } from "@/utils/dictionary.ts";
import type { Manager, Team } from "@/interfaces/interfaces.ts";
import { getCountryCode } from "@/utils/countryCodes.ts";
import { formatBirthdayDate } from "@/utils/formatDate";
import { textColorByTeam } from "@/utils/textColorByTeam.ts";

const SquadManager = ({ manager, team }: { manager: Manager; team: Team }) => {
  const currentLang = "es";

  return (
    <>
      <div className="border-b border-mainblack w-full text-start">
        <p className="mt-4 font-laliga text-2xl pb-2 uppercase">
          {translator(currentLang, "manager")}
        </p>
      </div>
      <div
        className="grid mt-4 justify-items-center justify-center gap-4 p-3 text-sm md:text-md xl:text-[16px]"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 300px)",
        }}
      >
        <div
          className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px]`}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/src/images/background-teams-grid.webp')`,
            }}
          />
          <div className="relative">
            <div className="absolute inset-0 bg-no-repeat bg-center">
              <img
                src={`/src/images/teams/${team.id}.webp`}
                alt={team.name}
                className="w-20 h-20 object-cover"
              />
            </div>
            <img
              src={`/src/images/managers/${manager.id}.webp`}
              alt={manager.fullName}
              className="w-[256px] aspect-square object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
          </div>
          <div className="flex flex-col justify-center relative gap-4 z-10">
            <div className="self-center">
              <p
                className="text-bold text-lg sm:text-2xl font-laliga text-center"
                style={{ color: textColorByTeam(team.id) }}
              >
                {manager.name}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <img
                src={`/src/images/flags/${getCountryCode(manager.country)}.svg`}
                alt={manager.country}
                className="w-6 h-4"
              />
              <p
                className="uppercase font-bold text-[10px] sm:text-sm"
                style={{ color: textColorByTeam(team.id) }}
              >
                {translator(currentLang, "manager")}
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-1 border-t pt-2 gap-4 relative z-10 place-self-center w-full"
            style={{ color: textColorByTeam(team.id) }}
          >
            <div>
              <p className="text-center uppercase font-bold">
                {translator(currentLang, "birthday")}
              </p>
              <p className="text-center">
                {formatBirthdayDate(manager.birthday.toString().split("T")[0])}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SquadManager;
