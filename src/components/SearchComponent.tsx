import { useState, useEffect } from "react";

interface SearchComponentProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  delay?: number;
  defaultValue?: string;
}

const SearchComponent = ({
  onSearch,
  placeholder = "Search here...",
  delay = 500,
  defaultValue = "",
}: SearchComponentProps) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, onSearch]);

  return (
    <section>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
      />
    </section>
  );
};

export default SearchComponent;