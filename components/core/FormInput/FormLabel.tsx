/* eslint-disable no-nested-ternary */
import { Input, InputNumber } from 'antd';

export type TFormLabelProps = {
  label: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  useSearch?: boolean;
  isNumber?: boolean;
  loading?: boolean;
};

export const FormLabel = ({
  label,
  placeholder,
  disabled = false,
  useSearch = false,
  isNumber = false,
  loading = false,
  ...props
}: TFormLabelProps) => {
  return (
    <div {...props}>
      <p className="mb-2 text-base font-bold text-charcoal-500">{label}</p>
      {useSearch ? (
        <Input.Search
          placeholder={placeholder}
          disabled={disabled}
          className=""
          loading={loading}
        />
      ) : isNumber ? (
        <InputNumber
          placeholder={placeholder}
          disabled={disabled}
          className="w-full"
        />
      ) : (
        <Input placeholder={placeholder} disabled={disabled} className="" />
      )}
    </div>
  );
};
