import Modal from "./modal";
import { MODAL_VIEWS, useModalAction, useModalState } from "./modal.context";
import UpdateStatusView from "../../dialogs/update-status-view";

function renderModal(view: MODAL_VIEWS | undefined, data: any) {
  switch (view) {
    case "MAKE_PAYMENT":
      return <UpdateStatusView />;
    default:
      return null;
  }
}

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {renderModal(view, data)}
    </Modal>
  );
};

export default ManagedModal;
