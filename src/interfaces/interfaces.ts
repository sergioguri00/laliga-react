interface Manager {
  id: number;
  name: string;
  fullName: string;
  country: string;
  birthday: string;
  team_id: number;
}

interface Player {
    id: number;
    name: string;
    lastName: string;
    knownAs: string | null;
    number: number;
    height: number;
    country: string;
    position: string;
    birthday: string;
    team_id: number;
}

interface Stadium {
  id: number;
  name: string;
}

interface Team {
  id: number;
  shortName: string;
  mainColor: string;
  secondaryColor: string;
  name: string;
  website: string;
  president: string;
  year: number;
}

interface TeamBadge {
  id: string;
  name: string;
  badge: string;
}

export type { Manager, Player, Stadium, Team, TeamBadge };