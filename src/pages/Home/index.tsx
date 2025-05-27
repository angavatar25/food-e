import { motion } from "framer-motion";

import FoodRecommendation from "../../components/Cards/FoodRecommendation";
import Banner from "../../components/Cards/Banner";
import Restaurant from "../../components/Cards/Restaurants";

import LocationTagIcon from "../../assets/icons/location.svg";
import { useNavigate } from "react-router";


const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const Home = () => {
  const navigate = useNavigate();

  const redirectToFoodDetail = () => {
    navigate('/food-detail');
  };

  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={{ duration: 0.3 }}>
      <div className="p-6">
        <div className="flex justify-between gap-3 mb-10">
          <p className="text-xl font-semibold">Hello, <span className=" text-teal-400">John</span> </p>
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
            <FoodRecommendation
              action={redirectToFoodDetail}
            />
            <FoodRecommendation
              action={redirectToFoodDetail}
            />
          </div>
        </div>
        <div>
          <p className="font-bebas font-semibold mb-6">Restaurants</p>
          <div className="grid grid-cols-4 gap-4">
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Home;