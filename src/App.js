import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.children);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>ReactJS Reddit Posts</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Title</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Score</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>URL</th>
            <th style={{ border: "1px solid #ccc", padding: "10px" }}>
              Self Text
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {list.data.title}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {list.data.score}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {list.data.url}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                {list.data.selftext
                  ? list.data.selftext.slice(0, 100) + "..."
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
