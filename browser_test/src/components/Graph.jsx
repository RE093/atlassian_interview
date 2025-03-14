import { useEffect, useState } from "react";
import { getData } from "../connected/data";
import Bar from "./Bar";
import "../styles/components/Graph.scss";

function Graph() {
  const [graphData, setGraphData] = useState([]);
  const [highest, setHighest] = useState(0);

  async function fetchData() {
    try {
      const data = await getData();

      let highestCount = data[0].ticketCount;

      data.map((item) => {
        if (item.ticketCount > highestCount) {
          highestCount = item.ticketCount;
        }
      });

      setHighest(highestCount);
      setGraphData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="graph">
      <ul className="graph__inner">
        {graphData && highest > 0
          ? graphData.map((barItem) => {
              return (
                <Bar
                  highest={highest}
                  key={barItem.id}
                  barItem={barItem}
                  length={graphData.length}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default Graph;
