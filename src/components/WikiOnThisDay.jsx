import React, { useEffect, useState } from "react";

const WikiOnThisDay = ({ date }) => {
  const [htmlContent, setHtmlContent] = useState("");

  const fetchWikiPage = async () => {
    const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${date}&format=json&origin=*`;

    const res = await fetch(url);
    const data = await res.json();
    setHtmlContent(data.parse.text["*"]);
  };
  useEffect(() => {
    if (!date) {
      return;
    }
    fetchWikiPage();
  }, [date]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default WikiOnThisDay;
