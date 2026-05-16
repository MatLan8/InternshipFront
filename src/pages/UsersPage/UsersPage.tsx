import { useGetAllUsers } from "../../api/useGetAllUsers";
import styles from "./UsersPage.module.css";
import UsersTable from "../../components/UsersTable/UsersTable";
import { useNavigate } from "react-router-dom";

function UsersPage() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAllUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <h1 className={styles.Title}>All Users</h1>
        <div
          className={styles.ButtonContainer}
          onClick={() => navigate("/items")}
        >
          Items page
        </div>
      </div>
      <div className={styles.TableContainer}>
        <UsersTable users={data} />
      </div>
    </div>
  );
}

export default UsersPage;
