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
}: {
  players: Player[];
  value: string;
  className?: string;
}) => {
  const id = parseInt(value);
  const name = getPlayerName(players, value);
  if (isNaN(id)) return <p className={className}>{name}</p>;
  return (
    <a
      href={`/players/${id}`}
      className={`hover:text-laligared transition ${className ?? ""}`}
    >
      {name}
    </a>
  );
};

export { PlayerLink };
