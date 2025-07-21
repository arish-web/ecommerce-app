interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: Props) => (
  <div className="mb-4">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded"
    />
  </div>
);

export default SearchBar;
