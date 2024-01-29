// Employee.js
import React from 'react';

const data = [
  {id:1, Businessname: "New Business	EXP122356470", age: "1252418	ICICI - Prudential", address: "1102 SAI PRASAD ARCADE CHS LTD,PLOT NO 2 SECTOR 7,KAMOTHE,NR AXIS BANK" ,contact: 1234567890 },
  {id:2, Businessname: "New Business	EXP122356470", age: "1252418	ICICI - Prudential", address: "1102 SAI PRASAD ARCADE CHS LTD,PLOT NO 2 SECTOR 7,KAMOTHE,NR AXIS BANK" ,contact: 1234567890 },
  {id:3, Businessname: "New Business	EXP122356470", age: "1252418	ICICI - Prudential", address: "1102 SAI PRASAD ARCADE CHS LTD,PLOT NO 2 SECTOR 7,KAMOTHE,NR AXIS BANK" ,contact: 1234567890 },
]

const Employee = () => {

  const thTdStyle = {
    border: '1px solid #474F7A',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return <div>
  <div className="App">
          <table className="border-2 border-solid border-green-600 w-[100%] h-200">
          <tr className='text-center'>
                    <th style={thTdStyle}>Id</th>
                    <th style={thTdStyle}>Name</th>
                    <th style={thTdStyle}>Age</th>
                    <th style={thTdStyle}>Address</th>
                    <th style={thTdStyle}>Contact</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} >
                            <td style={thTdStyle}>{val.id}</td>
                            <td style={thTdStyle}>{val.Businessname}</td>
                            <td style={thTdStyle}>{val.age}</td>
                            <td style={thTdStyle}>{val.address}</td>
                            <td style={thTdStyle}>{val.contact}</td>

                        </tr>
                    )
                })}
            </table>
        </div>
  </div>;
}

export default Employee;
