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
    <section className="px-4 xl:px-96 py-10 gap-2 flex flex-col font-laliga">
      {events.map((event, index) => (
        <div key={index} className="flex flex-row items-center gap-4 w-full">
          {event.team === "home" ? (
            <div className="grid grid-cols-[30px_30px_auto] gap-1 items-start w-full">
              <p className="font-bold">{`${event.minute}'`}</p>
              {"type" in event ? (
                <>
                  <img
                    src={`/src/assets/${event.type}Card.svg`}
                    className="h-6"
                    style={{ alignSelf: "center" }}
                  />
                  <p>
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
                  <p>
                    {homePlayers.filter(
                      (player) => player.id === parseInt(event.scorer),
                    )[0]?.knownAs ||
                      homePlayers.filter(
                        (player) => player.id === parseInt(event.scorer),
                      )[0]?.lastName ||
                      event.scorer}
                  </p>
                  <p className="text-[10px]">
                    {`(${
                      event.assist &&
                      (homePlayers.filter(
                        (player) => player.id === parseInt(event.assist!),
                      )[0]?.knownAs ||
                        homePlayers.filter(
                          (player) => player.id === parseInt(event.assist!),
                        )[0]?.lastName ||
                        event.assist)
                    })`}
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-[auto_30px_30px] gap-1 items-start w-full">
              {"type" in event ? (
                <>
                  <p>
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
                  <img
                    src="/src/assets/goal.svg"
                    className="h-5"
                    style={{ alignSelf: "center" }}
                  />
                  <div className="flex flex-row gap-1 items-baseline">
                    <p>
                      {awayPlayers.filter(
                        (player) => player.id === parseInt(event.scorer),
                      )[0]?.knownAs ||
                        awayPlayers.filter(
                          (player) => player.id === parseInt(event.scorer),
                        )[0]?.lastName ||
                        event.scorer}
                    </p>
                    <p className="text-[10px]">
                      {event.assist !== null &&
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
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default MatchEvents;
