import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getUsers } from "../services/api";
import Loading from "../components/Loading";
import User from "../components/User";

const Home = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((res) => {
        setUsers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return (
    <MainLayout>{isLoading ? <Loading /> : <User users={users} />}</MainLayout>
  );
};

export default Home;
