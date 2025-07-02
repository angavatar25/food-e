import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

interface TFoodList {
  id: string;
  name: string;
  price: number;
  picture: string;
};

interface TRestaurantList {
  id: string;
  name: string;
  image: string;
};

const useFetchFood = () => {
  const [foodList, setFoodList] = useState<TFoodList[]>([]);
  const [restaurantList, setRestaurantList] = useState<TRestaurantList[]>([]);

  const fetchFoodList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "foodList"));
  
      const foodList = querySnapshot.docs.map(doc => {
        const id = doc.id;
        const data = doc.data();

        return {
          id,
          name: data.foodName,
          price: data.foodPrice,
          picture: data.foodPicture,
        }
      });

      setFoodList(foodList);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  const fetchRestaurantList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "restaurantList"));

      const restaurantList = querySnapshot.docs.map(doc => {
        const id = doc.id;
        const { name, image } = doc.data();

        return {
          id,
          name,
          image,
        }
      });

      setRestaurantList(restaurantList);
    } catch (e) {
      console.error("Error fetching food list:", e);
    }
  }

  return { fetchFoodList, fetchRestaurantList, restaurantList, foodList };
};

export default useFetchFood;