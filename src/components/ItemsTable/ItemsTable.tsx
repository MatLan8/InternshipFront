import styles from "./ItemsTable.module.css";
import type { Item } from "../../types/Item";
import { ItemEnum } from "../../constants/ItemEnum";

type ItemsTableProps = {
  items: Item[];
  onDelete: (itemId: string, itemIdentifier: string) => void;
};

export default function ItemsTable({ items, onDelete }: ItemsTableProps) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Type</th>
            <th>Comment</th>
            <th>Purchase Date</th>
            <th>Assigned User</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.identifier}</td>
              <td>{ItemEnum[item.itemType]}</td>
              <td>{item.comment}</td>
              <td>
                {new Date(item.purchaseDate).toLocaleString("en-CA", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </td>
              <td>{item.userName}</td>
              <td>
                <div
                  className={styles.deleteButton}
                  onClick={() => onDelete(item.id, item.identifier)}
                >
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
