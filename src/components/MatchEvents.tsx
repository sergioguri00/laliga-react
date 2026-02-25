import type { MatchEventsProps, Player } from "@/interfaces/interfaces";

const MatchEvents = ({
  events,
  homePlayers,
  awayPlayers,
}: {
  events: MatchEventsProps["events"];
  homePlayers: Player[];
  awayPlayers: Player[];
}) => {
  console.log(events);
  return (
    <section className="flex flex-col font-laliga bg-white">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex flex-row items-center gap-4 w-full ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"} p-2`}
        >
          {event.team === "home" ? (
            <div className="grid grid-cols-[30px_30px_auto] gap-1 w-full justify-items-center">
              <p className="font-bold">{`${event.minute}'`}</p>
              {"type" in event ? (
                <>
                  <img
                    src={`/src/assets/${event.type}Card.svg`}
                    className="h-6"
                    style={{ alignSelf: "center" }}
                  />
                  <p className="justify-self-start">
                    {homePlayers.filter(
                      (player) => player.id === parseInt(event.player),
                    )[0]?.knownAs ||
                      homePlayers.filter(
                        (player) => player.id === parseInt(event.player),
                      )[0]?.lastName ||
                      event.player}
                  </p>
                </>
              ) : (
                <>
                  <img
                    src="/src/assets/goal.svg"
                    className="h-5"
                    style={{ alignSelf: "center" }}
                  />
                  <div className="flex flex-row gap-2 items-baseline justify-self-start">
                    <p>
                      {homePlayers.filter(
                        (player) => player.id === parseInt(event.scorer),
                      )[0]?.knownAs ||
                        homePlayers.filter(
                          (player) => player.id === parseInt(event.scorer),
                        )[0]?.lastName ||
                        event.scorer}
                    </p>
                    <p className="text-[12px]">
                      {event.assist &&
                        `(${
                          homePlayers.filter(
                            (player) => player.id === parseInt(event.assist!),
                          )[0]?.knownAs ||
                          homePlayers.filter(
                            (player) => player.id === parseInt(event.assist!),
                          )[0]?.lastName ||
                          event.assist
                        })`}
                    </p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-[auto_30px_30px] gap-1 w-full justify-items-center">
              {"type" in event ? (
                <>
                  <p className="justify-self-end">
                    {awayPlayers.filter(
                      (player) => player.id === parseInt(event.player),
                    )[0]?.knownAs ||
                      awayPlayers.filter(
                        (player) => player.id === parseInt(event.player),
                      )[0]?.lastName ||
                      event.player}
                  </p>
                  <img
                    src={`/src/assets/${event.type}Card.svg`}
                    className="h-6"
                    style={{ alignSelf: "center" }}
                  />
                </>
              ) : (
                <>
                  <div className="flex flex-row gap-2 items-baseline justify-self-end">
                    <p className="text-[12px]">
                      {event.assist &&
                        `(${
                          awayPlayers.filter(
                            (player) => player.id === parseInt(event.assist!),
                          )[0]?.knownAs ||
                          awayPlayers.filter(
                            (player) => player.id === parseInt(event.assist!),
                          )[0]?.lastName ||
                          event.assist
                        })`}
                    </p>
                    <p>
                      {awayPlayers.filter(
                        (player) => player.id === parseInt(event.scorer),
                      )[0]?.knownAs ||
                        awayPlayers.filter(
                          (player) => player.id === parseInt(event.scorer),
                        )[0]?.lastName ||
                        event.scorer}
                    </p>
                  </div>
                  <img
                    src="/src/assets/goal.svg"
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

export default MatchEvents;
