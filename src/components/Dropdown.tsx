import { ChangeEvent, OptionHTMLAttributes } from "react";

type OptionValue = OptionHTMLAttributes<HTMLOptionElement>["value"];

export type DropdownOption<T extends OptionValue> = {
  key: string;
  label: string;
  value: T;
};

type Props<T extends OptionValue> = {
  options: DropdownOption<T>[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

const Dropdown = <T extends OptionValue>(props: Props<T>) => {
  const { options, onChange, value } = props;

  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export { Dropdown };
