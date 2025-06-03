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

const Basket = () => {
  const total = basketItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen mx-auto p-6 bg-white">
      <h2 className="text-4xl font-bold mb-4 font-bebas">BASKET</h2>

      {basketItems.map((item) => (
        <Cart
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

      <div className="mt-6 text-left font-bebas">
        <p className="font-semibold">TOTAL</p>
        <p className="text-orange-500 text-4xl font-bold">${total.toFixed(2)}</p>
      </div>

      <div className="mt-10">
        <Button
          text="Proceed to checkout"
          action={() => console.log("heheh")}
          bgColor="bg-teal-400"
          textColor="text-white"
        />
      </div>
    </div>
  )
};

export default Basket;