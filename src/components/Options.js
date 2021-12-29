import { useState } from "react";
import { filterMovieDate, filterMovieType } from "../helper/filterMovie";
import ListDropdown from "./ListDropdown";

const Options = ({ setStateFitler, handleButton }) => {
  const [showOption, setShowOption] = useState(false);
  const [resType, setResType] = useState(null);
  const [resDate, setResDate] = useState(null);
  const handleShowOption = (e) => {
    setShowOption(!showOption);
  };
  const handleOptions = (f) => {
    const resT = filterMovieType(f);
    const resD = filterMovieDate(f);
    setResType(resT);
    setResDate(resD);
  };

  const handleClick = () => {
    handleButton(resType, resDate);
  };

  return (
       <div className="options flex flex-col items-start">
           <button onClick={handleShowOption} style={{ width: "190px" }} className="p-2  border-2 rounded-lg text-left flex justify-between items-center">Filter
           <span className="fas fa-chevron-right"></span>
           </button>
           {
              !showOption
                ? null
                : <ListDropdown handleOptions={handleOptions}/>
            }
           <button style={{ width: "190px" }} onClick={handleClick} className="p-1 border-2 rounded-full mt-2 btn text-white">Search</button>
        </div>
  );
};

export default Options;
