import Jumbotron from "@/components/Jumbotron";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="w-10/12 my-auto py-10 mx-auto">
        <Jumbotron />
      </div>
    </>
  );
}
