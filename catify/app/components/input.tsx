"use client";
import { useState } from "react";
import { Data } from "../breed/page";

var item = "";
var setItem = () => {};

export function getItem() {
  return item;
}

const InputBar = ({ data }: { data: Array<Data> }) => {
  const [item, setItem] = useState("Abyssinian");

  const handleChange = (event: any) => {
    setItem(event.target.value);
  };

  return (
    <div>
      <select
        id="my-select"
        value={item}
        onChange={handleChange}
        className=" h-10 w-60 mt-2 ml-2 mr-2 block"
      >
        {data.map((note, index) => (
          <option value={note.breed} key={index}>
            {note.breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBar;
