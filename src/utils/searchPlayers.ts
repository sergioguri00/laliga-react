import type { Player } from "@/interfaces/interfaces";
import playersData from "@/data/players.json";

const TRANSLITERATION_MAP: Record<string, string> = {
  ø: "o", Ø: "o",
  æ: "ae", Æ: "ae",
  œ: "oe", Œ: "oe",
  ß: "ss",
  ł: "l", Ł: "l",
  đ: "d", Đ: "d",
  þ: "th", Þ: "th",
  ð: "d", Ð: "d",
};

const transliterate = (str: string) =>
  str.replace(/[øØæÆœŒßłŁđĐþÞðÐ]/g, (ch) => TRANSLITERATION_MAP[ch] ?? ch);

const normalize = (str: string) =>
  transliterate(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const searchPlayers = (
  players: (typeof playersData.teams)[number]["players"],
  searchTerm: string,
  searchPosition: string[],
  searchTeam: string[],
) => {
  const normalizedTerm = normalize(searchTerm);
  console.log(searchTeam);
  return players.filter(
    (player: Player) =>
      (searchPosition.includes("all") || searchPosition.includes(player.position)) &&
      (normalize(player.name).includes(normalizedTerm) ||
      normalize(player.lastName).includes(normalizedTerm) ||
      (player.knownAs && normalize(player.knownAs).includes(normalizedTerm))) &&
      (searchTeam.includes("all") || searchTeam.includes(player.teamId.toString())),
  );
};

export { searchPlayers };