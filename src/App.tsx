import { Routes, Route, Navigate } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { ROUTES } from "./routes/paths";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.users} element={<UsersPage />} />
        <Route path={ROUTES.items} element={<ItemsPage />} />
        <Route path="*" element={<Navigate to={ROUTES.users} replace />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
    </>
  );
}

export default App;
