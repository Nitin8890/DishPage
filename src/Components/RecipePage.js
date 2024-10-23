import React from "react";
import omlette from "../assets/images/image-omelette.jpeg";
const RecipePage = () => {
  return (
    <>
      <article className="h-full bg-orange-300 flex justify-center items-center p-10">
        <div className="w-96 h-full p-2 bg-white rounded-md">
          <div className="p-2">
            <img
              className="w-96 h-48 rounded-md  object-cover"
              src={omlette}
              alt="Omeletteimage"
            />
          </div>
          <div className="p-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Simple Omelette Recipe
            </h1>
            <p className="text-wrap">
              An easy and quick dish,perfect for any meal.This classic omelette
              combines beaten eggs cooked to perfection,optuinally filled with
              your choice of cheese,vegetables, or meats.
            </p>
          </div>
          <div className="rounded-md p-2 bg-purple-100">
            <h1 className="text-xl text-purple-500 font-bold">
              Preparation time
            </h1>
            <ul className="list-disc pl-5">
              <li>
                <strong className="text-gray-800">Total:</strong> Approximately
                10 minutes
              </li>
              <li>
                <strong className="text-gray-800">Preparation:</strong> 5
                minutes
              </li>
              <li>
                <strong className="text-gray-800">Cooking:</strong> 5 minutes
              </li>
            </ul>
          </div>

          <hr className="w-80 mt-2 "></hr>

          <div className="p-2">
            <h1 className="font-bold text-2xl text-amber-950">Ingredients</h1>
            <ul className="list-disc text-amber-950 pl-5">
              <li className="text-black">2-3 large eggs</li>
              <li className="text-black">Salt to taste</li>
              <li className="text-black">Pepper to taste</li>
              <li className="text-black">1 tbsp of butter</li>
              <li className="text-black">
                <p className="text-wrap">
                  Optional fillings:cheese,diced vegetabels,cooked meats,herbs
                </p>
              </li>
            </ul>
          </div>
          <hr className="w-80  m-auto bg-slate-800 "></hr>
          <div className="p-2">
            <h1 className="text-amber-950 font-bold text-2xl">Instructions</h1>
            <ol className="list-decimal pl-5">
              <li>
                <strong className="text-gray-800">Beat the eggs:</strong>
                <p className="text-wrap">
                  In a bowl,beat the eggs with a pinch of salt and pepper until
                  they are well mixed.You can add a tablespoon of water or milk
                  for a fluffer texture.
                </p>
              </li>
              <li>
                <strong className="text-gray-800">Heat the pan:</strong>
                <p className="text-wrap">
                  Place a non-stick frying pan over a medium heat and add butter
                  or oil.
                </p>
              </li>
              <li>
                <strong className="text-gray-800">Cook the omelette:</strong>
                <p className="text-wrap">
                  Once the butter is melted and bubbling,pour in the eggs.Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </p>
              </li>
              <li>
                <strong className="text-gray-800">Add fillings:</strong>
                <p className="text-wrap">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle,sprinkle your chosen fillings over one
                  half of the omelette.
                </p>
              </li>
              <li>
                <strong className="text-gray-800">Beat the eggs:</strong>
                <p className="text-wrap">
                  As the omelette continyes to cook,carefully lift one edge and
                  fold it over the fillings.Let it cook for another minute,then
                  slide it on a plate.
                </p>
              </li>
              <li>
                <strong className="text-gray-800">
                  SERVE HOT AND ENJOY!!!!
                </strong>
              </li>
            </ol>
          </div>
          <div className="p-2">
            <h1 className="text-amber-950 font-bold text-2xl">Nutrition</h1>
            <div className="mt-2">
              <p>
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>
              <p className="flex justify-between">
                <span>Calories</span>
                <span className="text-amber-950 font-semibold">277kcal</span>
              </p>
              <hr className="w-80  m-auto bg-slate-800 "></hr>
              <p className="flex justify-between">
                <span>Carbs</span>
                <span className="text-amber-950 font-semibold">0g</span>
              </p>
              <hr className="w-80  m-auto bg-slate-800 "></hr>
              <p className="flex justify-between">
                <span>Protein</span>
                <span className="text-amber-950 font-semibold">20g</span>
              </p>
              <hr className="w-80  m-auto bg-slate-800 "></hr>
              <p className="flex justify-between">
                <span>Fat</span>
                <span className="text-amber-950 font-semibold">22g</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default RecipePage;
