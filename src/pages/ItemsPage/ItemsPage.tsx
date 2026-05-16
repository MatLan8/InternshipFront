import styles from "./ItemsPage.module.css";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import { useNavigate } from "react-router-dom";

import { useGetAllUsers } from "../../api/useGetAllUsers";
import { useGetAllItemsFiltered } from "../../api/useGetAllItemsFiltered";
import ItemsFilter from "../../components/ItemsFilter/ItemsFilter";
import { useState } from "react";

function ItemsPage() {
  const navigate = useNavigate();

  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  console.log("selectedTypes", selectedTypes);
  console.log("selectedUsers", selectedUsers);
  console.log("comment", comment);

  const { data, isLoading, error } = useGetAllItemsFiltered({
    itemTypes: selectedTypes,
    userIds: selectedUsers,
    comment: comment,
  });
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useGetAllUsers();
  if (usersLoading) return <div>Loading...</div>;
  if (usersError) return <div>Error: {usersError.message}</div>;
  if (!users) return <div>No data</div>;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;
  console.log(data);

  return (
    <div className={styles.Container}>
      <div className={styles.FilterContainer}>
        <ItemsFilter
          users={users}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
          comment={comment}
          setComment={setComment}
        />
      </div>
      <div className={styles.DataContainer}>
        <div className={styles.TitleContainer}>
          <h1 className={styles.Title}>All Items</h1>
          <div className={styles.ButtonContainer} onClick={() => navigate("/")}>
            Users page
          </div>
        </div>
        <div className={styles.TableContainer}>
          <ItemsTable items={data} />
        </div>
      </div>
    </div>
  );
}

export default ItemsPage;
