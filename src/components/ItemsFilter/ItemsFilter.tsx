import styles from "./ItemsFilter.module.css";

import { ItemEnum } from "../../constants/ItemEnum";

import type { User } from "../../types/User";

type ItemsFilterProps = {
  users: User[];
  selectedTypes: number[];
  setSelectedTypes: (types: number[]) => void;
  selectedUsers: string[];
  setSelectedUsers: (users: string[]) => void;
  comment: string;
  setComment: (comment: string) => void;
};

function ItemsFilter({
  users,
  selectedTypes,
  setSelectedTypes,
  selectedUsers,
  setSelectedUsers,
  comment,
  setComment,
}: ItemsFilterProps) {
  const sortedUsers = users.sort((a, b) => {
    return a.firstName.localeCompare(b.firstName);
  });

  return (
    <div className={styles.container}>
      <span className={styles.Title}>Filters</span>
      <div className={styles.Divider} />
      <div className={styles.FilterContainer}>
        <span className={styles.FilterTitle}>Comment</span>
        <input
          type="text"
          className={styles.FilterInput}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className={styles.FilterContainer}>
        <span className={styles.FilterTitle}>Types</span>
        <div className={styles.FilterOptions}>
          {Object.entries(ItemEnum).map(([key, typeName]) => (
            <div
              className={styles.FilterOption}
              key={key}
              onClick={() =>
                setSelectedTypes([...selectedTypes, parseInt(key)])
              }
            >
              {typeName}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.FilterContainer}>
        <span className={styles.FilterTitle}>Users</span>
        <div className={styles.FilterOptions}>
          {sortedUsers.map((user) => (
            <div
              className={styles.FilterOption}
              key={user.id}
              onClick={() => setSelectedUsers([...selectedUsers, user.id])}
            >
              {user.firstName} {user.lastName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsFilter;
