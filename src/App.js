import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import Counter from './components/Counter/Counter';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const tableDataInit = [
    {
      dessert: "No data available",
      calories: ""
    }
  ];

  const [tableData, setTableData] = useState(tableDataInit);

  useEffect(() => {
    setCount(document.getElementById("count").innerHTML);
  });

  const submit = () => {
    if (tableData[0].dessert === tableDataInit[0].dessert) {
      const tableDataNew = [
        {
          dessert: name,
          calories: count
        }
      ];
      setTableData(tableDataNew);
    } else {
      const tableDataNew = [
        ...tableData,
        {
          dessert: name,
          calories: count
        }
      ];
      setTableData(tableDataNew);
    }
    setName('');
  }

  return (
    <div>
      <center>
      <table>
      <tr>
      <table>
        <tr>
          <th style={{width: "300px", height: "355px"}}>
            <Counter />
          </th>
          <th rowspan="2" style={{backgroundColor: "grey"}}>
            <table style={{border: "0px"}}>
              <tr>
                <td style={{width: "350px", backgroundColor: "black", padding: "10px"}}>
                  <p style={{color: "white", textAlign: "left"}}>Dessert (100g serving)</p>
                </td>
                <td style={{width: "100px", backgroundColor: "black", padding: "10px"}}>
                  <p style={{color: "white", textAlign: "left"}}>Calories</p>
                </td>
              </tr>
              {tableData.map((data) => {
                return <tr style={{backgroundColor: "white"}}>
                          <td style={{textAlign: "left", border: "1px solid grey", padding: "10px"}}>
                            {data.dessert}
                          </td>
                          <td style={{textAlign: "left", border: "1px solid grey", padding: "10px"}}>
                            {data.calories}
                          </td>
                        </tr> 
              })}
            </table>
          </th>
        </tr>
        <tr>
          <td style={{width: "300px", height: "50px"}}>
            <center>
                <form>
                    <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
                    <label> </label>
                    <button onClick={submit} disabled={(name === '')}>Submit</button>
                </form>
            </center>
          </td>
        </tr>
      </table>
      </tr>
      </table>
      </center>
    </div>
  );
}

export default App;
