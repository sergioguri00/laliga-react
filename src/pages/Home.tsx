import { HomeButtons } from "@/components/HomeButtons";
import { LeagueTable } from "@/components/LeagueTable";

const Home = () => {
  return (
    <>
      <section className="py-24 px-4 flex flex-col gap-4">
        <HomeButtons />
        <LeagueTable />
      </section>
    </>
  );
};

export { Home };
