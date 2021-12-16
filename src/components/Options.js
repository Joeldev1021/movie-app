import { useState } from "react";

const Options = () => {
  const [showOption, setShowOption] = useState(false);
  const handleShowOption = (e) => {
    setShowOption(!showOption);
  };
  return (
       <div className="options flex flex-col items-start">
           <button onClick={handleShowOption} style={{ width: "190px" }} className="p-2  border-2 rounded-lg text-left flex justify-between items-center">Ordenar
           <span className="fas fa-chevron-right"></span>
           </button>
           {
              !showOption
                ? null
                : <ul className="dropdown border-2 text-sm p-3 rounded">
                <li >Popularidad descendente</li>
                <li>Popularidad ascendente</li>
              </ul>
            }
           <button style={{ width: "190px" }} className="p-1 border-2 rounded-full mt-2">Search</button>
        </div>
  );
};

export default Options;
