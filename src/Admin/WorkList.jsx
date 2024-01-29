// Employee.js
import React from 'react';

const data = [
  {id:1, Businessname: "New Business	EXP122356470", age: "1252418	ICICI - Prudential", address: "1102 SAI PRASAD ARCADE CHS LTD,PLOT NO 2 SECTOR 7,KAMOTHE,NR AXIS BANK" ,contact: 1234567890 },
  {id:2, Businessname: "New Business	EXP122356470", age: "1252418	ICICI - Prudential", address: "1102 SAI PRASAD ARCADE CHS LTD,PLOT NO 2 SECTOR 7,KAMOTHE,NR AXIS BANK" ,contact: 1234567890 },
  {id:3, Businessname: "New Business	EXP122356470", age: "1252418	ICICI - Prudential", address: "1102 SAI PRASAD ARCADE CHS LTD,PLOT NO 2 SECTOR 7,KAMOTHE,NR AXIS BANK" ,contact: 1234567890 },
]

const Employee = () => {
  return <div>
  <div className="App">
          <table className="border-2 border-solid border-green-600 w-[100%] h-200">
          <tr className='text-center'>
                    <th className='border-b border-solid border-black text-center'>Id</th>
                    <th className='border-b border-solid border-black text-center'>Name</th>
                    <th className='border-b border-solid border-black'>Age</th>
                    <th className='border-b border-solid border-black'>Address</th>
                    <th className='border-b border-solid border-black'>Contact</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} >
                            <td className='text-center'>{val.id}</td>
                            <td className='text-center'>{val.Businessname}</td>
                            <td className='text-center'>{val.age}</td>
                            <td className='text-center'>{val.address}</td>
                            <td className='text-center'>{val.contact}</td>

                        </tr>
                    )
                })}
            </table>
        </div>
  </div>;
}

export default Employee;
