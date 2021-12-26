/* eslint-disable no-unused-vars */
import { useState } from "react";

const listFilters = [
  { name: "tv", status: false },
  { name: "movie", status: false },
  { name: "all", status: false },
  { name: "day", status: false },
  { name: "week", status: true }
];

const ListDropdown = ({ handleOptions }) => {
  const [filters, setFilters] = useState(listFilters);

  const handleChange = (e) => {
    handleOptions(e.target.name);
  };

  return (
    <ul className="dropdown-container border-2 text-sm p-3 rounded">
      {filters.map((f) => {
        return (
          <li key={f.name}>
            <input onChange={handleChange} checked={f.status} type="checkbox" name={f.name} id={f.name} />
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
