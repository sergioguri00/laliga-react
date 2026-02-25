import type { Player } from "@/interfaces/interfaces";

const getPlayerName = (players: Player[], value: string): string => {
  const id = parseInt(value);
  if (isNaN(id)) return value;
  const player = players.find((p) => p.id === id);
  return player?.knownAs || player?.lastName || value;
};

const PlayerLink = ({
  players,
  value,
  className,
  isAssist,
}: {
  players: Player[];
  value: string;
  className?: string;
  isAssist?: boolean;
}) => {
  const id = parseInt(value);
  const name = getPlayerName(players, value);
  console.log("name", name);
  console.log(className);
  if (isNaN(id))
    return <p className={className}>{isAssist ? `(${name})` : name}</p>;
  return (
    <a
      href={`/players/${id}`}
      className={`hover:text-laligared transition ${className ?? ""}`}
    >
      {isAssist ? `(${name})` : name}
    </a>
  );
};

export { PlayerLink };
