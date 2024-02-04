"use client";
import React, { Suspense, useState } from "react";
import Details, { fetchData } from "../components/details";

const FetchButton = () => {
  const [showComp, setShowComp] = useState(false);
  const postRepo = fetchData();

  function mainCall() {
    return setShowComp(!showComp);
  }

  return (
    <>
      <button
        onClick={() => mainCall()}
        className=" xl:ml-32 md:ml w-14 h-14 bg-sky-300"
      >
        fetch!
      </button>
      {showComp ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Details promise={postRepo}></Details>
        </Suspense>
      ) : (
        ""
      )}
    </>
  );
};

export default FetchButton;
