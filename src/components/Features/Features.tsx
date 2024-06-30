import { useState } from "react";
import { features1, features2, features3 } from "../../assets";
type FeatureKey = "features1" | "features2" | "features3";

const features = {
  features1: {
    title: "Simple Bookmarking",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorites sites.",
    image: features1,
  },
  features2: {
    title: "Speedy cabbageworm",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: features2,
  },
  features3: {
    title: "Habile dactylology",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: features3,
  },
};

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] =
    useState<FeatureKey>("features1");

  return (
    <>
      <div className="pt-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark">Features</h1>
          <p className="mt-4 text-lg text-gray w-[540px] m-auto py-8">
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your bookmarks sync between your devices so you can access
            them on the go.
          </p>
        </div>

        <div className="flex justify-around w-[585.19px] m-auto">
          {Object.keys(features).map((feature, index) => (
            <div
              key={index}
              className="text-dark cursor-pointer"
              onClick={() => setSelectedFeature(feature as FeatureKey)}
            >
              {features[feature as FeatureKey].title}
            </div>
          ))}
        </div>

        <div className="flex mt-7 justify-around w-[585.19px] m-auto">
          {Object.keys(features).map((feature, index) => (
            <div
              key={index}
              className={`w-full max-w-[194.73px] h-1 ${
                selectedFeature === feature ? "bg-red" : "bg-[#f7f7f7]"
              }`}
            ></div>
          ))}
        </div>
        <div className="flex justify-center gap-16 my-12 items-center">
          <div>
            <img src={features[selectedFeature].image} alt="" />
          </div>
          <div>
            <div className="w-full max-w-[540px]">
              <h1 className="text-dark text-5xl font-bold">
                {features[selectedFeature].title}
              </h1>
              <p className="text-gray py-10 text-lg">
                A clean and simple interface to organize your favorite websites.
                Open a new browser tab and see your sites load instantly. Try it
                for free.
              </p>
              <div className="rounded-md w-40 h-12 flex items-center justify-center shadow-md cursor-pointer bg-blue text-white">
                <p className="text-base font-normal">More Info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
