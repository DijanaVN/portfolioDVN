import React, { useEffect } from "react";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documentURL =
    "https://drive.google.com/file/d/1BiCSDJdH2BJymSS9vKNKX7a0EgO9DeZ0/preview";

  https: return (
    <>
      <div className="mt-5 text-center">
        <div className="ratio ratio-1x1">
          <iframe src={documentURL} width="100%" height="1200px" />
        </div>
      </div>
    </>
  );
};

export default CV;
