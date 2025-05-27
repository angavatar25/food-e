import { useState } from "react";

import { motion } from "framer-motion";

import { ChevronLeft, MoreVertical, Minus, Plus, Clock } from "lucide-react";

import FirstImage from "../../assets/images/salmon-1.png";
import SecondImage from "../../assets/images/salmon-2.png";
import ThirdImage from "../../assets/images/salmon-3.png"
import Button from "../../components/Button";

const images = [
  FirstImage,
  SecondImage,
  ThirdImage,
];

const slideLeftVariants = {
  initial: {
    x: '10%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
  exit: {
    x: '-10%',
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const FoodDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const index = Math.round(target.scrollLeft / target.offsetWidth);
    setCurrentImage(index);
  };

  const total = (15.0 * quantity).toFixed(2);

  return (
    <motion.div
      variants={slideLeftVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="relative overflow-hidden">
          <div
            className="w-full overflow-x-auto scroll-smooth"
            onScroll={handleScroll}
          >
            <div className="flex w-max">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Salmon Dish"
                  className="w-[500px] h-[300px] object-cover"
                />
              ))}
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
            <ChevronLeft size={20} />
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
            <MoreVertical size={20} />
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-4 rounded-full transition-all duration-300 ${
                  i === currentImage ? "bg-teal-400" : "bg-white/50"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold font-bebas">SALMON</h2>
                <p className="text-orange-500">The Nautilus</p>
              </div>
              <div className="flex flex-col items-end text-orange-500 space-x-1">
                <Clock size={18} />
                <span className="text-sm">34 mins</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="uppercase text-sm font-semibold text-gray-700">Description</h4>
              <p className="text-gray-500 text-sm mt-2">
                Non odit iusto delectus maxime sit placeat voluptatum dolorem. Dolores quos rerum
                iusto. Beatae totam ab veritatis aliquid tenetur qui ut. Quia ut dolorum enim et.
                Exercitationem occaecati eum est ex qui harum aliquam.
              </p>
            </div>

            <div className="mt-6 flex justify-between items-center mb-10">
              <div>
                <h5 className="text-teal-500 font-bold uppercase font-bebas">Quantity</h5>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-40 justify-between mt-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus size={16} className="text-gray-500" />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <Plus size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="text-right font-bebas">
                <h5 className="text-gray-800 font-semibold uppercase">Sub Total</h5>
                <span className="text-teal-500 font-bold text-3xl">$ {total}</span>
              </div>
            </div>
            
            <Button
              text="Add to basket"
              bgColor="bg-teal-400"
              textColor="text-white"
              action={() => console.log("hehehe")}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default FoodDetail;