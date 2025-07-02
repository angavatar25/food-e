import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import {
  Pencil,
  Wallet,
  MapPin,
  History,
  Headset,
  LogOut,
  ChevronRight,
} from 'lucide-react';

import { auth } from "../../firebase";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth)
        .then(() => {
          navigate('/');
        })
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const menuItems = [
    { icon: Pencil, label: 'Account and Profile', action: () => { return } },
    { icon: Wallet, label: 'Manage Payment Methods', action: () => { return } },
    { icon: MapPin, label: 'Manage Addresses', action: () => { return } },
    { icon: History, label: 'Order History', action: () => { return } },
    { icon: Headset, label: 'Contact Support', action: () => { return } },
    { icon: LogOut, label: 'Logout', action: handleLogout },
  ];

  return (
    <div className="min-h-screen flex justify-center items-start p-6">
      <div className="bg-white w-full max-w-sm rounded-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-teal-400 overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
        </div>

        <ul className="space-y-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className="flex items-center justify-between text-gray-800 hover:text-teal-600 cursor-pointer"
              >
                <div
                  className="flex items-center gap-3 my-2"
                  onClick={item.action}
                >
                  <Icon className="text-teal-500 w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
};

export default Profile;