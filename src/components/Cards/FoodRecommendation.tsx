import { Heart, ShoppingCart } from "lucide-react";

import DummyImage from '../../assets/images/salad-image.png';

interface TRecommendation {
  action: () => void;
}

const FoodRecommendation = (props: TRecommendation) => {
  return (
    <div
      onClick={props.action}
      className="max-w-xs bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden rounded-3xl">
        <img
          src={DummyImage}
          alt="Egg Salad"
          className="w-full object-cover"
        />
        <button className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-60 rounded-xl p-2">
          <Heart className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-xl text-gray-800">Egg Salad</h2>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-teal-500 text-2xl font-bebas font-bold">$ 5.00</span>
          <button className="bg-teal-400 p-2 rounded-xl hover:bg-teal-500 transition">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default FoodRecommendation;