import React, { useEffect } from "react";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documentURL =
    "https://drive.google.com/file/d/12JDDhOR3JUBhjrKtFaEyqn0eam0IS7di/preview";

  return (
    <>
      <div className=" text-center">
        <div className="ratio ratio-1x1">
          <iframe src={documentURL} width="100%" height="100vh" />
        </div>
      </div>
    </>
  );
};

export default CV;
