import { Routes, Route } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/items" element={<ItemsPage />} />
      </Routes>
    </>
  );
}

export default App;
