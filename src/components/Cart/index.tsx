import { Trash, ShoppingBasket as BasketIcon } from "lucide-react";

interface TCart {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  isLiked?: boolean;
}

const Cart = (props: TCart) => {
  return (
    <div key={props.id} className="flex items-center mb-9">
      <img
        src={props.image}
        alt={props.name}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="ml-4 flex-1">
        <p className="text-lg font-medium">{props.name}</p>
        <p className="text-teal-400 font-bebas text-xl font-semibold">${props.price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-center justify-between h-full">
        <button className="bg-red-500 rounded-md p-1">
          <Trash className="w-5 h-5 text-white"/>
        </button>
        {props.isLiked ? (
          <button className="bg-teal-400 p-1 rounded-md mt-2">
            <BasketIcon className="text-white w-5 h-5"/>
          </button>
        ) : <span className="mt-3">{props.quantity}</span>}
      </div>
    </div>
  )
};

export default Cart;