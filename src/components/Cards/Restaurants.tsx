import RestaurantIcon from "../../assets/images/Logo.svg";

const Restaurant = () => {
  return (
    <div className="bg-white shadow-xl max-w-28 min-h-28 h-full rounded-xl flex items-center justify-center">
      <img src={RestaurantIcon} alt="" />
    </div>
  )
};

export default Restaurant