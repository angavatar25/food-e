import Button from "../../components/Button";
import Cart from "../../components/Cart";

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
  return (
    <div className="min-h-screen mx-auto p-6 bg-white">
      <h2 className="text-4xl font-bold mb-4 font-bebas">LIKED</h2>
      {basketItems.map((item) => (
        <Cart
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          isLiked={true}
        />
      ))}
    </div>
  )
};

export default Liked;