import { Modal } from 'antd';

export type TModalAntDesignProps = {
  [key: string]: any;
};

export const ModalAntDesign = ({
  open,
  onOk,
  onCancel,
  children,
}: TModalAntDesignProps) => {
  return (
    <Modal
      title="Confirmation"
      centered
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};
