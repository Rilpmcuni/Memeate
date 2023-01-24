interface Props {
  label: string;
  value: string;
  onChange: any;
}

const Input: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col my-1">
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>
      <input
        className="px-3 py-1 rounded-lg"
        type="text"
        id={label}
        name={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
