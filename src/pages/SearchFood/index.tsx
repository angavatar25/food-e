import { X, Clock } from 'lucide-react';
import FilterSearchComponent from '../../components/FilterSearchComponent';
import CategoriesSearchComponent from '../../components/CategoriesSearchComponent';
import FoodRecommendation from '../../components/Cards/FoodRecommendation';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const CATEGORIES = [
  'Breakfast', 'Fastfood', 'Lunch',
  'South Indian', 'North Indian',
  'Dinner', 'Pure Veg', 'Non Veg'
];

const RECENTS_KEY = 'recentSearches';

const isSearch = true;

const SearchFood = () => {
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState<string>('');

  const setCategory = (curr: string) => {
    setCurrentCategory(curr);
  };

  const navigateToFoodDetail = () => {
    navigate('/food-detail');
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Search */}
      <div>
        <h3 className="font-bebas font-semibold text-teal-500 uppercase mb-2">Search</h3>
        <input
          type="text"
          placeholder="Cuisine / Dish"
          // value={search}
          // onChange={e => setSearch(e.target.value)}
          className="w-full p-4 rounded-full bg-gray-100 text-gray-500 placeholder:text-gray-400"
        />
      </div>

      {/* Categories */}
      <div className='mt-6'>
        <CategoriesSearchComponent
          categories={CATEGORIES}
          action={setCategory}
          currentCategory={currentCategory}
        />
      </div>

      <div className='mt-10'>
        {isSearch ? (
          <>
            <FilterSearchComponent/>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <FoodRecommendation
                action={navigateToFoodDetail}
              />
              <FoodRecommendation
                action={navigateToFoodDetail}
              />
              <FoodRecommendation
                action={navigateToFoodDetail}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bebas font-bold uppercase text-black">Recents</h3>
              <button className="font-bebas text-teal-500 font-semibold">Clear All</button>
            </div>
            <ul className="space-y-4">
                <li className="flex items-center justify-between text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-base">Test</span>
                  </div>
                  <button>
                    <X className="w-5 h-5" />
                  </button>
                </li>
            </ul>
          </>
        )}
      </div>

    </div>
  )
};

export default SearchFood;