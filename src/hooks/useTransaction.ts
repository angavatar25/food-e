import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { useAuth } from "../provider/AuthProvider";

interface TFavouriteList {
  id: string;
  name: string;
  price: number;
  picture: string;
}

const useTransaction = () => {
  const { user } = useAuth();

  const [favouriteList, setFavouriteList] = useState<TFavouriteList[]>([]);

  const fetchFavouriteFoodList = async () => {
    try {
      const q = query(collection(db, "foodFavouriteCollection"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const foodFavouriteList = querySnapshot.docs.map(doc => {
        const id = doc.id;
        const data = doc.data();

        return {
          id,
          name: data.name,
          price: data.price,
          picture: data.picture,
        }
      });

      setFavouriteList(foodFavouriteList);
    } catch (e) {
      console.error("Error fetching food list:", e);
    }
  }

  const insertFavouriteFood = async (fav: TFavouriteList) => {
    const payload = {
      uid: user.uid,
      ...fav,
    };

    await addDoc(collection(db, "foodFavouriteCollection"), payload).then(() => {
      console.log("Successfully add favourite");
    })
  }

  return { favouriteList, fetchFavouriteFoodList, insertFavouriteFood }
};

export default useTransaction;