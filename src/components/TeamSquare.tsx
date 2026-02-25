import type { Team, Stadium } from "@/interfaces/interfaces.ts";

const TeamSquare = ({ team, stadium }: { team: Team; stadium: Stadium }) => {
  return (
    <a
      href={`/teams/${team.id}`}
      className={`${team.mainColor === "#ffffff" ? "border-2 border-gray-200" : "border-0"} flex flex-col justify-center p-4 rounded-2xl w-full h-88 hover:opacity-80 hover:scale-[0.98] transition`}
      style={{
        backgroundColor: team.mainColor,
        backgroundImage: "url('/assets/background-teams-grid.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={`/assets/teams/${team.id}.webp`}
          alt={team.shortName}
          className="w-32 h-32 mx-auto"
        />
        <div
          className="font-laliga text-center"
          style={{
            color:
              team.mainColor === "#ffffff" || team.mainColor === "#ffd301"
                ? "black"
                : "white",
          }}
        >
          <h1 className="text-3xl uppercase font-laliga">{team.shortName}</h1>
          <div className="flex flex-row justify-center items-end font-laliga">
            <p className="text-lg mr-1">EST.</p>
            <p className="text-2xl">{team.year}</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src={`/assets/stadiums/${stadium.id}.webp`}
          alt={stadium.name}
          className="w-48 mx-auto"
        />
      </div>
    </a>
  );
};

export default TeamSquare;
