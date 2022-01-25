import React from "react";

export default function Footer () {
  return (
    <>
    <div style={{
      backgroundImage: "url(" + "/wave2.svg" + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }} className="footer">
        <div style={{ paddingTop: "16rem" }} className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-4 text-white ">
          <div>
             <img className="img-footer" src="./workflow.png" alt="" />
          </div>
          <div>
            <h1 className="text-2xl py-2 font-bold ">MovieApp</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vero, veritatis illo reiciendis tenetur eum molestiae magni consequatur hic.
          </div>
          <div>
          <h1 className="text-2xl py-2 font-bold ">Contact</h1>
               <li>Lorem, i ing elit. Sapie!</li>
               <li>Magni no praesentium sap!</li>
               <li>Molestia fugit cum amet.</li>
               <li>Quas ips is numquam nostr.</li>
               <li>Deleniti e doloremque ve?</li>
          </div>
          <div style={{ width: "100px" }} className="text-center">
          <h1 className="text-2xl py-2 font-bold ">Social</h1>
             <p className="text-2xl"><i className="fab fa-twitter "></i></p>
             <p className="text-2xl"><i className="fab fa-instagram"></i></p>
             <p className="text-2xl"><i className="fab fa-facebook-square"></i></p>
          </div>
        </div>
      </div>
      </>
  );
}
