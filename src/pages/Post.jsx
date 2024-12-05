import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getPost } from "../services/api";
import Loading from "../components/Loading";
import DataPost from "../components/DataPost";

const Post = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState();
  useEffect(() => {
    setIsLoading(true);
    getPost()
      .then((res) => {
        setPosts(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }, []);
  return (
    <MainLayout>
      {isLoading ? <Loading /> : <DataPost datas={posts} />}
    </MainLayout>
  );
};
export default Post;
