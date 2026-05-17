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
  applyFilters: () => void;
  resetFilters: () => void;
};

function ItemsFilter({
  users,
  selectedTypes,
  setSelectedTypes,
  selectedUsers,
  setSelectedUsers,
  comment,
  setComment,
  applyFilters,
  resetFilters,
}: ItemsFilterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.TitleRow}>
        <span className={styles.Title}>Filters</span>
        <div className={styles.ButtonContainer}>
          <div className={styles.ApplyButton} onClick={applyFilters}>
            Apply
          </div>
          <div className={styles.ResetButton} onClick={resetFilters}>
            Reset
          </div>
        </div>
      </div>
      <div className={styles.Divider} />
      <div className={styles.FilterContainer}>
        <span className={styles.FilterTitle}>Comment</span>
        <input
          type="text"
          className={styles.FilterInput}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter a comment..."
        />
      </div>
      <div className={styles.FilterContainer}>
        <span className={styles.FilterTitle}>Types</span>
        <div className={styles.FilterOptions}>
          {Object.entries(ItemEnum).map(([key, typeName]) => (
            <div
              className={`${styles.FilterOption} ${selectedTypes.includes(parseInt(key)) ? styles.ItemPillSelected : styles.ItemPill}`}
              key={key}
              onClick={() =>
                setSelectedTypes(
                  selectedTypes.includes(parseInt(key))
                    ? selectedTypes.filter((type) => type !== parseInt(key))
                    : [...selectedTypes, parseInt(key)],
                )
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
          {users.map((user) => (
            <div
              className={`${styles.FilterOption} ${selectedUsers.includes(user.id) ? styles.UserPillSelected : styles.UserPill}`}
              key={user.id}
              onClick={() =>
                setSelectedUsers(
                  selectedUsers.includes(user.id)
                    ? selectedUsers.filter((userId) => userId !== user.id)
                    : [...selectedUsers, user.id],
                )
              }
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
