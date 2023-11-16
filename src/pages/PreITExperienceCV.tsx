import React, { useEffect } from "react";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documentURL =
    "https://docs.google.com/document/d/e/2PACX-1vR34udhVF6GIG3nNvW4Vv2QfU9WBZKC6HCp5ox7x1RZyVQUc-bi-6_RJDntdWLRObU4nDVLh20hKthP/pub?embedded=true";
  return (
    <>
      <div className="mt-5 ms-5">
        <iframe src={documentURL} width="100%" height="600px" />
      </div>
    </>
  );
};

export default CV;
