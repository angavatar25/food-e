import { ChevronLeft } from 'lucide-react';
import Button from '../../components/Button';

const Checkout = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="w-full">
        <ChevronLeft className="mb-10"/>

        <h1 className="text-3xl font-bebas font-bold mb-12">CHECKOUT</h1>

        <div className="mb-6 font-bebas">
          <p className="text-sm font-bold text-gray-700">PRICE</p>
          <p className="text-3xl font-bold text-teal-400">$ 65.00</p>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <div>
            <p className="text-sm font-bold text-gray-700 font-bebas">DELIVER TO</p>
            <p className="text-lg">Home</p>
          </div>
          <button className="text-orange-400 font-semibold">Change</button>
        </div>

        <div className="mb-10 flex justify-between items-center">
          <div>
            <p className="text-sm font-bold text-gray-700 font-bebas">PAYMENT METHOD</p>
            <p className="text-lg">XXXX XXXX XXXX 2538</p>
          </div>
          <button className="text-orange-400 font-semibold">Change</button>
        </div>

        <Button
          text="Confirm Order"
          bgColor="bg-teal-400"
          textColor="text-white"
          action={() => console.log("hehehe")}
        />
      </div>
    </div>
  )
};

export default Checkout;