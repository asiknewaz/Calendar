import React from "react";
import { useState } from "react";

const Test = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    if (item.trim() !== "") {
      setList((prev) => [...prev, item]);
      setItem("");
    }
  };
  const deleteTask = (index) => {
    setList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <ol>
        {list.map((value, index) => (
          <div key={index} style={{ display: "flex", gap: "2px" }}>
            <li>{value}</li>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </ol>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "Gray",
          gap: "5px",
        }}
      >
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="add to do"
        />
        <button onClick={addToList}>Add</button>
      </div>
    </>
  );
};

export default Test;
