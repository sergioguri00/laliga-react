import type { MatchEventsProps, Player } from "@/interfaces/interfaces";
import { PlayerLink } from "@/components/PlayerLink";
import { translator } from "@/utils/dictionary";

const MatchEvents = ({
  events,
  homePlayers,
  awayPlayers,
}: {
  events: MatchEventsProps["events"];
  homePlayers: Player[];
  awayPlayers: Player[];
}) => {
  return (
    <section className="flex flex-col font-laliga bg-white">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex flex-row items-center gap-4 w-full ${index % 2 === 0 ? "bg-gray-100" : ""} p-2`}
        >
          {event.team === "home" ? (
            <div className="grid grid-cols-[50px_30px_auto] gap-1 w-full justify-items-center">
              <p className="font-bold">{`${event.minute}'`}</p>
              {"type" in event ? (
                <>
                  <img
                    src={`/assets/${event.type}Card.svg`}
                    className="h-6"
                    style={{ alignSelf: "center" }}
                  />
                  <PlayerLink
                    players={homePlayers}
                    value={event.player}
                    className="justify-self-start"
                  />
                </>
              ) : (
                <>
                  <img
                    src="/assets/goal.svg"
                    className="h-5"
                    style={{ alignSelf: "center" }}
                  />
                  <div className="flex flex-row gap-2 items-baseline justify-self-start">
                    {event.isOwnGoal ? (
                      <PlayerLink players={awayPlayers} value={event.scorer} />
                    ) : (
                      <PlayerLink players={homePlayers} value={event.scorer} />
                    )}
                    {event.assist && (
                      <span className="text-[12px]">
                        (
                        <PlayerLink
                          players={homePlayers}
                          value={event.assist}
                        />
                        )
                      </span>
                    )}
                    {event.isOwnGoal && (
                      <span className="text-[12px]">
                        {`(${translator("es", "ownGoal")})`}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-[auto_30px_50px] gap-1 w-full justify-items-center">
              {"type" in event ? (
                <>
                  <PlayerLink
                    players={awayPlayers}
                    value={event.player}
                    className="justify-self-end"
                  />
                  <img
                    src={`/assets/${event.type}Card.svg`}
                    className="h-6"
                    style={{ alignSelf: "center" }}
                  />
                </>
              ) : (
                <>
                  <div className="flex flex-row gap-2 items-baseline justify-self-end">
                    {event.assist && (
                      <span className="text-[12px]">
                        (
                        <PlayerLink
                          players={awayPlayers}
                          value={event.assist}
                        />
                        )
                      </span>
                    )}
                    {event.isOwnGoal && (
                      <span className="text-[12px]">
                        (Gol en propia puerta)
                      </span>
                    )}
                    {event.isOwnGoal ? (
                      <PlayerLink players={homePlayers} value={event.scorer} />
                    ) : (
                      <PlayerLink players={awayPlayers} value={event.scorer} />
                    )}
                  </div>
                  <img
                    src={`/assets/goal${event.isOwnGoal ? "Red" : ""}.svg`}
                    className="h-5"
                    style={{ alignSelf: "center" }}
                  />
                </>
              )}
              <p className="font-bold">{`${event.minute}'`}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export { MatchEvents };
