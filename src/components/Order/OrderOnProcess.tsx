import { Check } from "lucide-react";

import Button from "../Button";

const OrderOnProcess = () => {
  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center">
      <div className="max-w-md w-full text-center text-white p-6">
        <h1 className="text-2xl font-bold mb-8 tracking-wide">ORDER CONFIRMED!</h1>

        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-full bg-blue-300 p-4 flex justify-center items-center">
            <Check size={100}/>
          </div>
        </div>

        <p className="mb-12 text-base">
          Hang on Tight! We’ve received your order and<br />
          we’ll bring it to you ASAP!
        </p>

        <Button
          text="Track my order"
          action={() => console.log("Heheh")}
        />
      </div>
    </div>
  )
};

export default OrderOnProcess;