import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

import FoodRecommendation from "../../components/Cards/FoodRecommendation";
import Banner from "../../components/Cards/Banner";
import Restaurant from "../../components/Cards/Restaurants";

import LocationTagIcon from "../../assets/icons/location.svg";
import { pageVariants } from "../../framer/animation";
import { useAuth } from "../../provider/AuthProvider";
import useFetchFood from "../../hooks/useFetchFood";
import useTransaction from "../../hooks/useTransaction";

const Home = () => {
  const {
    foodList,
    restaurantList,
    fetchRestaurantList,
    fetchFoodList,
  } = useFetchFood();

  const { insertFavouriteFood } = useTransaction();

  const navigate = useNavigate();

  const { user } = useAuth();

  const redirectToFoodDetail = () => {
    navigate('/food-detail');
  };

  const addToFavouriteFood = (fav: { id: string; name: string; price: number; picture: string}) => {
    insertFavouriteFood(fav);
  };

  useEffect(() => {
    fetchFoodList();
    fetchRestaurantList();
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between gap-3 mb-10">
          <p className="text-xl font-semibold">Hello, <span className=" text-teal-400">{user.displayName}</span> </p>
          <div className="flex gap-2">
            <p className="font-bebas text-orange-400 my-auto font-semibold">Home</p>
            <img src={LocationTagIcon} alt="" />
          </div>
        </div>
        <div className="mb-10">
          <Banner/>
        </div>
        <div className="mb-10">
          <p className="font-bebas font-semibold mb-6">Recommended for you</p>
          <div className="grid grid-cols-2 gap-4">
            {foodList.length > 0 && foodList.map((food) => (
              <FoodRecommendation
                key={`food-recommendation-${food.id}`}
                name={food.name}
                price={food.price}
                image={food.picture}
                action={() => redirectToFoodDetail()}
                addToFav={() => addToFavouriteFood(food)}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="font-bebas font-semibold mb-6">Restaurants</p>
          <div className="grid grid-cols-4 gap-4">
            {restaurantList.length > 0 && restaurantList.map((res) => (
              <Restaurant
                key={`index-${res.id}`}
                icon={res.image}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Home;