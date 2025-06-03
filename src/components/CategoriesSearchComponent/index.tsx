import classNames from "classnames";

interface TCategories {
  categories: string[];
  action: (curr: string) => void;
  currentCategory: string;
}

const CategoriesSearchComponent = (props: TCategories) => {
  return (
    <>    
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bebas font-bold uppercase text-black">Categories</h3>
        <button className="font-bebas text-teal-500 font-semibold">View All</button>
      </div>
      <div className="overflow-scroll flex flex-nowrap gap-3">
        {props.categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => props.action(cat)}
            className={classNames({
              'bg-gray-100 inline-flex whitespace-nowrap rounded-full px-4 py-2 h-fit text-base font-medium text-black': true,
              'bg-teal-400 text-white': props.currentCategory === cat,
            })}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  )
};

export default CategoriesSearchComponent;