import React, { useState } from "react";

const XTable = () => {
    const initalData =
    [
        { date: "2022-09-10", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ];
    
    const [data, setData] = useState(initalData);

    const sortByDate = () => {
        const sortedData = [...data].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          if (dateA > dateB) return -1;
          if (dateA < dateB) return 1;
          return 0;
        });
        setData(sortedData);
      };

    const sortByViews = () => {
        const sortedData = [...data].sort((a, b) => {
          if (a.views > b.views) return -1;
          if (a.views < b.views) return 1;
          return 0;
        });
        setData(sortedData);
      };
 
    return(
        <div>
         <h1>Date annd Views Table</h1>
         <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
         <table>
            <thead>
                <tr>
                <th >Date</th>
                <th>Views</th>
                <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr>
                        <td>{row.date}</td>
                        <td>{row.views}</td>
                        <td>{row.article}</td>
                    </tr>
                ))}
            </tbody>
         </table>
        </div>
    )
}

export default XTable;