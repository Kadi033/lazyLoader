import { hero } from "../../assets";
import "./Home.css"
function Home() {
  return (
    <div className="mt-10">
      <div className="flex justify-center gap-28 items-center">
        <div className="w-full max-w-[540px]">
          <h1 className="text-dark text-5xl font-bold">A Simple Bookmark Manager</h1>
          <p className="text-gray py-10 text-lg">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex gap-9">
            <div className="rounded-md w-40 h-12 flex items-center justify-center shadow-md cursor-pointer bg-blue text-white hove0">
              <p className="text-base font-normal">Get it on Chrome</p>
            </div>
            <div className="rounded-md w-40 h-12 flex items-center justify-center shadow-md cursor-pointer bg-[#f7f7f7] text-gray hove1">
              <p className="text-base font-normal">Get it on Firefox</p>
            </div>
          </div>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
