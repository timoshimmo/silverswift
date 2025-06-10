import { useState } from "react";
import ConfirmationCard from "../ui/cards/confirmation-card";
import {
  useModalAction,
  useModalState,
} from "../ui/modal/modal.context";
import { toast } from "react-toastify";


const UpdateStatusView = () => {
  const [loading, setLoading] = useState(false);

  const { closeModal } = useModalAction();
  const { data } = useModalState();

  async function handleUpdate() {
    if(!loading) {

      setLoading(true);

      let userid = '';
      if (typeof localStorage !== 'undefined') {
          const user = localStorage.getItem('userid');
          if(user !== null) {
            userid = user;
          }
      }

        setLoading(false);
        closeModal();
        toast.success("Ticket status succesfully updated");
        data.refresh();
    }


  }

  return (
    <ConfirmationCard
      onCancel={closeModal}
      onConfirm={handleUpdate}
      confirmBtnText="Yes"
      title="Ticket Status"
      description="Are you sure you want to update ticket status?"
      confirmBtnLoading={loading}
    />
  );
};

export default UpdateStatusView;
