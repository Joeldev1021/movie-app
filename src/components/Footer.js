import React from "react";

export default function Footer () {
  return (
    <>
    <div style={{
      backgroundImage: "url(" + "/wave2.svg" + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "70vh"
    }} className="footer">
        <div style={{ paddingTop: "16rem" }} className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-4 text-white ">
          <div>
             <img className="img-footer" src="./workflow.png" alt="" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vero, veritatis illo reiciendis tenetur eum molestiae magni consequatur hic.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vero, veritatis illo reiciendis tenetur eum molestiae magni consequatur hic.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum vero, veritatis illo reiciendis tenetur eum molestiae magni consequatur hic.
          </div>
        </div>
      </div>
      </>
  );
}
