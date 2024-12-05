import Navbar from "./Navbar";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <div className="px-10 py-5">{children}</div>
    </>
  );
};

export default MainLayout;
