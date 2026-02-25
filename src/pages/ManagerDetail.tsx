import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { TeamHeader } from "@/components/TeamHeader";
import {
  translator,
  countryTranslator,
  countriesDictionary,
} from "@/utils/dictionary";
import { formatBirthdayDate } from "@/utils/formatDate";
import { getCountryCode } from "@/utils/countryCodes";
import type { Team } from "@/interfaces/interfaces";
import managersData from "@/data/managers.json";
import teamsData from "@/data/teams.json";

const currentLang = "es";

const ManagerDetail = () => {
  const { id } = useParams() as { id: string };

  const manager = managersData.managers.find(
    (manager) => manager.id === parseInt(id),
  );

  const team = teamsData.teams.find(
    (team) => team.id === manager?.teamId,
  ) as Team;

  useDocumentTitle(manager?.fullName ?? manager?.name ?? "Manager");

  return (
    <>
      <TeamHeader {...team} />
      {manager && (
        <section className="w-full flex flex-col lg:flex-row justify-center py-10 lg:px-36 xl:px-52 items-center gap-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="justify-self-center lg:order-2">
              <img
                src={`/assets/managers/${manager.id}.webp`}
                alt={manager?.fullName ?? manager?.name ?? "Manager"}
                className="w-80 h-full"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-laliga text-5xl lg:self-start">
                {manager.fullName !== null
                  ? `${manager.fullName}`
                  : `${manager.name}`}
              </h1>
              <div className="flex flex-row items-center mt-4 lg:self-start">
                <img
                  src={`/assets/flags/${getCountryCode(manager.country)}.svg`}
                  alt={manager.country}
                  className="mr-2 w-6 h-4"
                />
                <p className="text-center text-sm">
                  {countryTranslator(
                    currentLang,
                    manager.country as keyof (typeof countriesDictionary)[typeof currentLang],
                  )}
                </p>
              </div>
              <div className="mt-4 lg:self-start">
                <p className="font-laliga text-lg text-center lg:text-start">
                  {translator(currentLang, "fullName")}
                </p>
                <p className="text-center lg:text-start">
                  {`${manager.fullName ?? manager.name}`}
                </p>
              </div>
              <div className="mt-4 lg:self-start">
                <p className="font-laliga text-lg text-center lg:text-start">
                  {translator(currentLang, "birthday")}
                </p>
                <p>
                  {formatBirthdayDate(
                    manager.birthday.toString().split("T")[0],
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center align-middle">
            <a
              href={`/teams/${team.id}`}
              className="hover:scale-105 transition"
            >
              <img
                src={`/assets/teams/${team.id}.webp`}
                alt={`${team.shortName} logo`}
                className="w-32 h-32 hidden lg:block"
              />
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export { ManagerDetail };
