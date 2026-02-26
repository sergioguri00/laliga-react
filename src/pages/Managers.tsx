import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getCountryCode } from "@/utils/countryCodes";
import { textColorByTeam } from "@/utils/textColorByTeam";
import { translator } from "@/utils/dictionary";
import { formatBirthdayDate } from "@/utils/formatDate";
import managersData from "@/data/managers.json";
import teamsData from "@/data/teams.json";

const currentLang = "es";

const Managers = () => {
  useDocumentTitle("Entrenadores");

  return (
    <section
      className="grid pt-24 pb-10 px-2 place-items-center gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
    >
      {managersData.managers.map((manager) => (
        <a
          href={`/managers/${manager.id}`}
          className={`text-start ${teamsData.teams[manager.teamId - 1].mainColor === "#ffffff" ? "border border-mainblack" : ""} mt-4 w-75 flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px] hover:opacity-80 hover:scale-[0.98] transition`}
        >
          <div
            className={`text-start ${teamsData.teams[manager.teamId - 1].mainColor === "#ffffff" ? "border border-mainblack" : ""} p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px]`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle, ${teamsData.teams[manager.teamId - 1].secondaryColor} 0%, ${teamsData.teams[manager.teamId - 1].mainColor} 75%)`,
              }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/assets/background-teams-grid.webp')`,
              }}
            />
            <div className="relative">
              <div className="absolute inset-0 bg-no-repeat bg-center">
                <img
                  src={`/assets/teams/${teamsData.teams[manager.teamId - 1].id}.webp`}
                  alt={teamsData.teams[manager.teamId - 1].name}
                  className="w-20 h-20 object-cover"
                />
              </div>
              <img
                src={`/assets/managers/${manager.id}.webp`}
                alt={manager.fullName}
                className="w-[256px] aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
            </div>
            <div className="flex flex-col justify-center relative gap-4 z-10">
              <div className="self-center">
                <p
                  className="text-bold text-lg sm:text-2xl font-laliga text-center"
                  style={{
                    color: textColorByTeam(
                      teamsData.teams[manager.teamId - 1].id,
                    ),
                  }}
                >
                  {manager.name}
                </p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <img
                  src={`/assets/flags/${getCountryCode(manager.country)}.svg`}
                  alt={manager.country}
                  className="w-6 h-4"
                />
                <p
                  className="uppercase font-bold text-[10px] sm:text-sm"
                  style={{
                    color: textColorByTeam(
                      teamsData.teams[manager.teamId - 1].id,
                    ),
                  }}
                >
                  {translator(currentLang, "manager")}
                </p>
              </div>
            </div>
            <div
              className="grid grid-cols-1 border-t pt-2 gap-4 relative z-10 place-self-center w-full"
              style={{
                color: textColorByTeam(teamsData.teams[manager.teamId - 1].id),
              }}
            >
              <div>
                <p className="text-center uppercase font-bold">
                  {translator(currentLang, "birthday")}
                </p>
                <p className="text-center">
                  {formatBirthdayDate(
                    manager.birthday.toString().split("T")[0],
                  )}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export { Managers };
