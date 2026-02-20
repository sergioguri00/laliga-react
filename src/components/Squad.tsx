import { translator, countryTranslator } from "@/utils/dictionary.ts";
import { getCountryCode } from "@/utils/countryCodes.ts";
import type { Team, Manager, Player } from "@/interfaces/interfaces.ts";
import { formatBirthdayDate } from "@/utils/formatDate";

const Squad = ({
  id,
  team,
  manager,
  players,
}: {
  id: string;
  team: Team;
  manager: Manager;
  players: Player[];
}) => {
  const currentLang = "es";
  return (
    <section id={`${id}`} className="xl:p-10">
      <h2 className="text-3xl text-bold uppercase font-laliga text-center">
        {`${team.shortName} ${translator(currentLang, "squadSection")}`}
      </h2>
      <div className="flex flex-col">
        <div>
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
              className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} rounded-lg p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px]`}
            >
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
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
                  <p className="text-bold text-lg sm:text-2xl font-laliga text-mainblack text-center">
                    {manager.name}
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center gap-1">
                  <img
                    src={`/src/images/flags/${getCountryCode(manager.country)}.svg`}
                    alt={manager.country}
                    className="mr-2 w-6 h-4"
                  />
                  <p className="uppercase font-bold text-[10px] sm:text-sm">
                    {translator(currentLang, "manager")}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 border-t pt-2 gap-4 relative z-10 border-mainblack place-self-center w-full">
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
          </div>
          <div>
            <div className="border-b border-mainblack w-full text-start mt-10">
              <p className="uppercase font-laliga text-2xl pb-2">
                {translator(currentLang, "goalkeepers")}
              </p>
            </div>
            <div
              className="grid mt-4 justify-items-center justify-center gap-4 p-3 text-sm md:text-md xl:text-[16px]"
              style={{
                gridTemplateColumns: "repeat(auto-fill, 300px)",
              }}
            >
              {players.map((player: Player) =>
                player.position === "Goalkeeper" ? (
                  <a
                    href={`/players/${player.id}`}
                    className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} rounded-lg p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px] hover:opacity-80 hover:scale-[0.98] transition`}
                  >
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
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
                      <p
                        className="absolute top-2 right-2 z-10 text-bold text-5xl font-laliga leading-none"
                        style={{
                          color:
                            team.secondaryColor === "#ffffff"
                              ? "#00001B"
                              : team.secondaryColor,
                        }}
                      >
                        {player.number}
                      </p>
                      <img
                        src={`/src/images/players/${team.id}/${player.id}.webp`}
                        alt={player.knownAs || player.lastName}
                        className="w-[256px] aspect-square object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
                    </div>
                    <div className="flex flex-col justify-center relative gap-4 z-10">
                      <div className="self-center flex flex-row gap-2">
                        <p className="text-bold text-lg sm:text-2xl font-laliga self-end text-mainblack">
                          {player.knownAs !== null
                            ? player.knownAs
                            : player.lastName}
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <div className="flex flex-row items-center">
                          <img
                            src={`/src/images/flags/${getCountryCode(player.country)}.svg`}
                            alt={String(player.country)}
                            className="mr-2 w-6 h-4"
                          />
                        </div>
                        <p className="uppercase font-bold text-[10px] sm:text-sm">
                          {translator(currentLang, "midfielder")}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 border-t pt-2 gap-4 relative z-10 border-mainblack place-self-center">
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "birthday")}
                        </p>
                        <p className="text-center">
                          {formatBirthdayDate(
                            player.birthday.toString().split("T")[0],
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "height")}
                        </p>
                        <p className="text-center">{player.height} cm</p>
                      </div>
                    </div>
                  </a>
                ) : null,
              )}
            </div>
            <div className="border-b border-mainblack w-full text-start mt-10">
              <p className="uppercase font-laliga text-2xl pb-2">
                {translator(currentLang, "defenders")}
              </p>
            </div>
            <div
              className="grid mt-4 justify-items-center justify-center gap-4 p-3 text-sm md:text-md xl:text-[16px]"
              style={{
                gridTemplateColumns: "repeat(auto-fill, 300px)",
              }}
            >
              {players.map((player: Player) =>
                player.position === "Defender" ? (
                  <a
                    href={`/players/${player.id}`}
                    className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} rounded-lg p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px] hover:opacity-80 hover:scale-[0.98] transition`}
                  >
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
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
                      <p
                        className="absolute top-2 right-2 z-10 text-bold text-5xl font-laliga leading-none"
                        style={{
                          color:
                            team.secondaryColor === "#ffffff"
                              ? "#00001B"
                              : team.secondaryColor,
                        }}
                      >
                        {player.number}
                      </p>
                      <img
                        src={`/src/images/players/${team.id}/${player.id}.webp`}
                        alt={player.knownAs || player.lastName}
                        className="w-[256px] aspect-square object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
                    </div>
                    <div className="flex flex-col justify-center relative gap-4 z-10">
                      <div className="self-center flex flex-row gap-2">
                        <p className="text-bold text-lg sm:text-2xl font-laliga self-end text-mainblack">
                          {player.knownAs !== null
                            ? player.knownAs
                            : player.lastName}
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <div className="flex flex-row items-center">
                          <img
                            src={`/src/images/flags/${getCountryCode(player.country)}.svg`}
                            alt={String(player.country)}
                            className="mr-2 w-6 h-4"
                          />
                        </div>
                        <p className="uppercase font-bold text-[10px] sm:text-sm">
                          {translator(currentLang, "defender")}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 border-t pt-2 gap-4 relative z-10 border-mainblack place-self-center">
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "birthday")}
                        </p>
                        <p className="text-center">
                          {formatBirthdayDate(
                            player.birthday.toString().split("T")[0],
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "height")}
                        </p>
                        <p className="text-center">{player.height} cm</p>
                      </div>
                    </div>
                  </a>
                ) : null,
              )}
            </div>
            <div className="border-b border-mainblack w-full text-start mt-10">
              <p className="uppercase font-laliga text-2xl pb-2">
                {translator(currentLang, "midfielders")}
              </p>
            </div>
            <div
              className="grid mt-4 justify-items-center justify-center gap-4 p-3 text-sm md:text-md xl:text-[16px]"
              style={{
                gridTemplateColumns: "repeat(auto-fill, 300px)",
              }}
            >
              {players.map((player: Player) =>
                player.position === "Midfielder" ? (
                  <a
                    href={`/players/${player.id}`}
                    className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} rounded-lg p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px] hover:opacity-80 hover:scale-[0.98] transition`}
                  >
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
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
                      <p
                        className="absolute top-2 right-2 z-10 text-bold text-5xl font-laliga leading-none"
                        style={{
                          color:
                            team.secondaryColor === "#ffffff"
                              ? "#00001B"
                              : team.secondaryColor,
                        }}
                      >
                        {player.number}
                      </p>
                      <img
                        src={`/src/images/players/${team.id}/${player.id}.webp`}
                        alt={player.knownAs || player.lastName}
                        className="w-[256px] aspect-square object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
                    </div>
                    <div className="flex flex-col justify-center relative gap-4 z-10">
                      <div className="self-center flex flex-row gap-2">
                        <p className="text-bold text-lg sm:text-2xl font-laliga self-end text-mainblack">
                          {player.knownAs !== null
                            ? player.knownAs
                            : player.lastName}
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <div className="flex flex-row items-center">
                          <img
                            src={`/src/images/flags/${getCountryCode(player.country)}.svg`}
                            alt={String(player.country)}
                            className="mr-2 w-6 h-4"
                          />
                        </div>
                        <p className="uppercase font-bold text-[10px] sm:text-sm">
                          {translator(currentLang, "midfielder")}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 border-t pt-2 gap-4 relative z-10 border-mainblack place-self-center">
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "birthday")}
                        </p>
                        <p className="text-center">
                          {formatBirthdayDate(
                            player.birthday.toString().split("T")[0],
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "height")}
                        </p>
                        <p className="text-center">{player.height} cm</p>
                      </div>
                    </div>
                  </a>
                ) : null,
              )}
            </div>
            <div className="border-b border-mainblack w-full text-start mt-10">
              <p className="uppercase font-laliga text-2xl pb-2">
                {translator(currentLang, "midfielders")}
              </p>
            </div>
            <div
              className="grid mt-4 justify-items-center justify-center gap-4 p-3 text-sm md:text-md xl:text-[16px]"
              style={{
                gridTemplateColumns: "repeat(auto-fill, 300px)",
              }}
            >
              {players.map((player: Player) =>
                player.position === "Forward" ? (
                  <a
                    href={`/players/${player.id}`}
                    className={`text-start ${team.mainColor === "#ffffff" ? "border border-mainblack" : ""} rounded-lg p-4 w-full flex flex-col gap-4 relative text-sm md:text-md xl:text-[16px] hover:opacity-80 hover:scale-[0.98] transition`}
                  >
                    <div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `radial-gradient(circle, ${team.secondaryColor} 0%, ${team.mainColor} 75%)`,
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
                      <p
                        className="absolute top-2 right-2 z-10 text-bold text-5xl font-laliga leading-none"
                        style={{
                          color:
                            team.secondaryColor === "#ffffff"
                              ? "#00001B"
                              : team.secondaryColor,
                        }}
                      >
                        {player.number}
                      </p>
                      <img
                        src={`/src/images/players/${team.id}/${player.id}.webp`}
                        alt={player.knownAs || player.lastName}
                        className="w-[256px] aspect-square object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" />
                    </div>
                    <div className="flex flex-col justify-center relative gap-4 z-10">
                      <div className="self-center flex flex-row gap-2">
                        <p className="text-bold text-lg sm:text-2xl font-laliga self-end text-mainblack">
                          {player.knownAs !== null
                            ? player.knownAs
                            : player.lastName}
                        </p>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <div className="flex flex-row items-center">
                          <img
                            src={`/src/images/flags/${getCountryCode(player.country)}.svg`}
                            alt={String(player.country)}
                            className="mr-2 w-6 h-4"
                          />
                        </div>
                        <p className="uppercase font-bold text-[10px] sm:text-sm">
                          {translator(currentLang, "forward")}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 border-t pt-2 gap-4 relative z-10 border-mainblack place-self-center">
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "birthday")}
                        </p>
                        <p className="text-center">
                          {formatBirthdayDate(
                            player.birthday.toString().split("T")[0],
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-center uppercase font-bold">
                          {translator(currentLang, "height")}
                        </p>
                        <p className="text-center">{player.height} cm</p>
                      </div>
                    </div>
                  </a>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
