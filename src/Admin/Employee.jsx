// Employee.js
import React from 'react';

const data = [
  {id:1, name: "Anom", email:"Anom2003@gmail.com", contact: "123456789" },
  {id:2, name: "Megha", email: "Megha2003@gmail.com", contact: "123456789" },
  {id:3, name: "Subham", email: "Subham2003@gmail.com", contact: "123456789" },
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
          <tr className='text-center bg-[#f2f2f2]'>
                    <th style={thTdStyle}>Id</th>
                    <th  style={thTdStyle}>Name</th>
                    <th  style={thTdStyle}>Email</th>
                    <th  style={thTdStyle}>Contact</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} >
                            <td  style={thTdStyle}>{val.id}</td>
                            <td  style={thTdStyle}>{val.name}</td>
                            <td  style={thTdStyle}>{val.email}</td>
                            <td  style={thTdStyle}>{val.contact}</td>

                        </tr>
                    )
                })}
            </table>
        </div>
  </div>;
}

export default Employee;
