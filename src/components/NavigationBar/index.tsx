import { ReactComponent as HomeIcon } from '../../assets/icons/Home.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/Search.svg';
import { ReactComponent as BasketIcon } from '../../assets/icons/Basket.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/Heart.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/User.svg';
import { useNavigate } from 'react-router';

const menuNav = [
  { id: 1, path: '', Icon: HomeIcon },
  { id: 2, path: 'search', Icon: SearchIcon },
  { id: 3, path: 'cart', Icon: BasketIcon },
  { id: 4, path: 'liked', Icon: HeartIcon },
  { id: 5, path: 'profile', Icon: UserIcon },
];

const NavigationBar = () => {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="bg-white grid grid-cols-5 py-4">
      {menuNav.map(({ id, path, Icon }) => (
        <div
          onClick={() => goToPage(path)}
          key={id}
          className="mx-auto cursor-pointer"
        >
          <Icon fill='red' />
        </div>
      ))}
    </div>
  )
};

export default NavigationBar;