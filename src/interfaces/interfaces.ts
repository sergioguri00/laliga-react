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

interface Match {
  id: number;
  matchday: number;
  date: string;
  time: string;
  homeTeam: number;
  awayTeam: number;
  homeGoals: { minute: string; scorer: string, assist: string | null }[];
  awayGoals: { minute: string; scorer: string, assist: string | null }[];
  homePossession: number;
  awayPossession: number;
  homeShots: number;
  awayShots: number;
  homeShotsOnTarget: number;
  awayShotsOnTarget: number;
  homeCorners: number;
  awayCorners: number;
  homeFouls: number;
  awayFouls: number;
  homeCards: { minute: string; player: string; type: "yellow" | "red" }[];
  awayCards: { minute: string; player: string; type: "yellow" | "red" }[];
  homeOffsides: number;
  awayOffsides: number;
}

type GoalEvent = {
  team: "home" | "away";
  minute: string;
  scorer: string;
  assist: string | null;
};

type CardEvent = {
  team: "home" | "away";
  minute: string;
  player: string;
  type: "red" | "yellow";
};

type MatchEvent = GoalEvent | CardEvent;

interface MatchEventsProps {
  events: MatchEvent[];
}

interface Standing {
  teamId: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

export type { Manager, Player, Stadium, Team, TeamBadge, Match, MatchEvent, MatchEventsProps, Standing };