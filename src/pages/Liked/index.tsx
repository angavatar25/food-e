import { motion } from "framer-motion";

import Cart from "../../components/Cart";
import { pageVariants } from "../../framer/animation";
import useTransaction from "../../hooks/useTransaction";
import { useEffect } from "react";

const basketItems = [
  {
    id: 1,
    name: "Egg Salad",
    price: 10,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 2,
    name: "Grilled Salmon",
    price: 45,
    quantity: 3,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=80&q=80",
  },
];

const Liked = () => {
  const { favouriteList, fetchFavouriteFoodList } = useTransaction();

  useEffect(() => {
    fetchFavouriteFoodList();
  }, []);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="min-h-screen mx-auto p-6 bg-white">
        <h2 className="text-4xl font-bold mb-4 font-bebas">LIKED</h2>
        {favouriteList.map((item) => (
          <Cart
            id={item.id}
            image={item.picture}
            name={item.name}
            price={item.price}
            isLiked={true}
          />
        ))}
      </div>
    </motion.div>
  )
};

export default Liked;