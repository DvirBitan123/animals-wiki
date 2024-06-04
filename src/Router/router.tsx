import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route> */}
    </Routes>
  );
};

export default Router;
