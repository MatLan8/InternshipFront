import styles from "./UsersTable.module.css";
import type { User } from "../../types/User";

type UsersTableProps = {
  users: User[];
};

export default function UserTable({ users }: UsersTableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Identifier</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.identifier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
