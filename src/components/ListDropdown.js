/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const listFilters = [
  { name: "tv", status: false },
  { name: "movie", status: false },
  { name: "all", status: false },
  { name: "day", status: false },
  { name: "week", status: false }
];

const ListDropdown = ({ handleOptions }) => {
  const [filters, setFilters] = useState(listFilters);

  useEffect(() => {
    handleFilters();
  }, [filters]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const newFilters = filters.map((f) => f.name === name ? { ...f, status: !f.status } : f);
    setFilters(newFilters);
  };

  const handleFilters = () => {
    const type = filters.filter((f) => f.status === true).map((f) => f.name);
    handleOptions(type);
  };

  return (
    <ul className="dropdown-container border-2 text-sm p-3 rounded">
      {filters.map((f) => {
        return (
          <li key={f.name}>
            <input onChange={handleChange} defaultChecked={f.status} type="checkbox" name={f.name} id={f.name} />
            <label className="px-2" htmlFor={f.name}>
              {f.name === "tv" ? "Tv Show" : f.name.toLowerCase()}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ListDropdown;
