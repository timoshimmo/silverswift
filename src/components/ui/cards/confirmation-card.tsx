import { CheckIcon } from "../../icons/check-icon";
import { success_check } from "../../../lib/images";
import Button from "../button";
import cn from "classnames";

type ConfirmationCardProps = {
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  icon?: any;
  description?: string;
  cancelBtnClassName?: string;
  confirmBtnClassName?: string;
  cancelBtnText?: string;
  confirmBtnText?: string;
  cancelBtnLoading?: boolean;
  confirmBtnLoading?: boolean;
};

const ConfirmationCard: React.FC<ConfirmationCardProps> = ({
  onCancel,
  onConfirm,
  icon,
  title = "Confirm",
  description = "Are you sure?",
  cancelBtnText = "Cancel",
  confirmBtnText = "Yes",
  cancelBtnClassName,
  confirmBtnClassName,
  cancelBtnLoading,
  confirmBtnLoading,
}) => {

  return (
    <div className="p-4 pb-6 bg-light m-auto max-w-sm w-full rounded-md md:rounded-xl sm:w-[24rem]">
      <div className="w-full h-full text-center">
        <div className="flex h-full flex-col justify-between">
          {icon ? (
            icon
          ) : (
            <CheckIcon className="mt-4 w-12 h-12 m-auto text-accent" />
          )}
          <p className="text-heading text-xl font-bold mt-4">{title}</p>
          <p className="text-body-dark dark:text-muted leading-relaxed py-2 px-6">
            {description}
          </p>
          <div className="flex items-center justify-between space-x-4 w-full mt-8">
            <div className="w-1/2">
              <Button
                onClick={onCancel}
                loading={cancelBtnLoading}
                disabled={cancelBtnLoading}
                variant="custom"
                className={cn(
                  "w-full py-2 px-4 bg-red-500 focus:outline-none hover:bg-red-700 focus:bg-red-700 text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md",
                  cancelBtnClassName
                )}
              >
                {cancelBtnText}
              </Button>
            </div>

            <div className="w-1/2">
              <Button
                onClick={onConfirm}
                loading={confirmBtnLoading}
                disabled={confirmBtnLoading}
                variant="custom"
                className={cn(
                  "w-full py-2 px-4 bg-accent focus:outline-none hover:bg-accent-hover focus:bg-accent-hover text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md",
                  confirmBtnClassName
                )}
              >
                {confirmBtnText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
