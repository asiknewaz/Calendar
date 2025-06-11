import React, { useEffect, useState } from "react";

const Test1 = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(
      "https://en.wikipedia.org/w/api.php?action=parse&page=February_2&format=json&origin=*"
    )
      .then((res) => res.json())
      .then((item) => setData(item.parse.text["*"]));
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Wikipedia Data for February 2</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default Test1;
