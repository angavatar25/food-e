import { useAuth } from "../provider/AuthProvider"

const useAuthUser = () => {
  const { user } = useAuth();

  if (user) {
    const [data] = user.providedData;

    return { data }
  }

  return { user };
};

export default useAuthUser;