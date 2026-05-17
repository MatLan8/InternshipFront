import styles from "./ItemsPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ItemsTable from "../../components/ItemsTable/ItemsTable";
import ItemsFilter from "../../components/ItemsFilter/ItemsFilter";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import PdfDropdown from "../../components/PdfDropdown/PdfDropdown";

import { useGetAllUsers } from "../../api/useGetAllUsers";
import { useGetAllItemsFiltered } from "../../api/useGetAllItemsFiltered";
import { useDeleteItem } from "../../api/useDeleteItem";
import { useExportItemsPdf } from "../../api/useExportItemsPdf";

import { ROUTES } from "../../routes/paths";
import { downloadPdf } from "../../helpers/downloadPdf";
import { ExportTypeName } from "../../constants/ExportType";
import { toast } from "react-toastify";

function ItemsPage() {
  const navigate = useNavigate();

  const [selectedTypes, setSelectedTypes] = useState<number[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [comment, setComment] = useState<string>("");

  const [appliedTypes, setAppliedTypes] = useState<number[]>([]);
  const [appliedUsers, setAppliedUsers] = useState<string[]>([]);
  const [appliedComment, setAppliedComment] = useState<string>("");

  const [isConfirmModalShown, setIsConfirmModalShown] =
    useState<boolean>(false);
  const [deleteItemId, setDeleteItemId] = useState<string>("");
  const [deleteItemIdentifier, setDeleteItemIdentifier] = useState<string>("");

  const { mutateAsync: exportPdf } = useExportItemsPdf();
  const { mutate: deleteItem } = useDeleteItem();

  const { data, isLoading, error } = useGetAllItemsFiltered({
    itemTypes: appliedTypes,
    userIds: appliedUsers,
    comment: appliedComment,
  });
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useGetAllUsers();

  if (usersLoading || isLoading) return <div>Loading...</div>;
  if (usersError || error)
    return <div>Error: {usersError?.message || error?.message}</div>;
  if (!users || !data) return <div>No data</div>;

  const applyFilters = () => {
    setAppliedTypes(selectedTypes);
    setAppliedUsers(selectedUsers);
    setAppliedComment(comment);
  };

  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedUsers([]);
    setComment("");

    setAppliedTypes([]);
    setAppliedUsers([]);
    setAppliedComment("");
  };

  const onDelete = (itemId: string, itemIdentifier: string) => {
    setDeleteItemId(itemId);
    setDeleteItemIdentifier(itemIdentifier);
    setIsConfirmModalShown(true);
  };

  const onConfirmModalConfirm = () => {
    deleteItem(deleteItemId, {
      onSuccess: () => {
        toast.success("Item deleted successfully");
      },
      onError: () => {
        toast.error("Failed to delete item");
      },
    });
    setDeleteItemId("");
    setDeleteItemIdentifier("");
    setIsConfirmModalShown(false);
  };

  const handleExport = async (template: number) => {
    try {
      const response = await exportPdf({
        itemTypes: appliedTypes,
        comment: appliedComment,
        userIds: appliedUsers,
        templateType: template,
      });
      downloadPdf(response, `items_${ExportTypeName[template]}.pdf`);
      toast.success("PDF exported successfully");
    } catch {
      toast.error("Failed to export PDF");
    }
  };

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
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        />
      </div>
      <div className={styles.DataContainer}>
        <div className={styles.TitleContainer}>
          <div className={styles.InfoContainer}>
            <h1 className={styles.Title}>All Items</h1>
            <PdfDropdown onExport={handleExport} />
          </div>

          <div
            className={styles.ButtonContainer}
            onClick={() => navigate(ROUTES.users)}
          >
            Users page
          </div>
        </div>
        {data.length > 0 ? (
          <div className={styles.TableContainer}>
            <ItemsTable items={data} onDelete={onDelete} />
          </div>
        ) : (
          <div className={styles.NoData}>No items match the filters</div>
        )}
      </div>

      <ConfirmModal
        isShown={isConfirmModalShown}
        onCancel={() => setIsConfirmModalShown(false)}
        onConfirm={onConfirmModalConfirm}
        itemIdentifier={deleteItemIdentifier}
      />
    </div>
  );
}

export default ItemsPage;
