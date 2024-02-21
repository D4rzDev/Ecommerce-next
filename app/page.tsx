import Banner from "./components/Banner";
import NewCollection from "./components/NewCollection";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className=" px-4 md:px-10 lg:p-12">
      <Hero/>
      <NewCollection/>
      <Banner/>
    </div>
  );
}
