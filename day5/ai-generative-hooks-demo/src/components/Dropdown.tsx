export type OptionType<T> = {
  label: string;
  value: T;
};

interface DropdownProps<T> {
  options: OptionType<T>[];
  onSelect: (option: OptionType<T>) => void;
  placeholder?: string;
}

function Dropdown<T>({ options, onSelect, placeholder }: DropdownProps<T>) {
  return (
    <select
      onChange={e => {
        const ix = Number(e.target.value);
        onSelect(options[ix]);
      }}
      style={{ margin: 8, fontSize: 16, padding: 6, borderRadius: 6 }}
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder || "Select ..."}
      </option>
      {options.map((opt, ix) => (
        <option value={ix} key={ix}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
