import { Routes, Route } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { ROUTES } from "./routes/paths";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.users} element={<UsersPage />} />
        <Route path={ROUTES.items} element={<ItemsPage />} />
      </Routes>
    </>
  );
}

export default App;
