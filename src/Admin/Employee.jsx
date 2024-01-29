// Employee.js
import React from 'react';

const data = [
  {id:1, name: "Anom", email:"Anom2003@gmail.com", contact: "123456789" },
  {id:2, name: "Megha", email: "Megha2003@gmail.com", contact: "123456789" },
  {id:3, name: "Subham", email: "Subham2003@gmail.com", contact: "123456789" },
]

const Employee = () => {
  return <div>
  <div className="App">
          <table className="border-2 border-solid border-green-600 w-[100%] h-200">
          <tr className='text-center'>
                    <th className='border-b border-solid border-black text-center'>Id</th>
                    <th className='border-b border-solid border-black text-center'>Name</th>
                    <th className='border-b border-solid border-black'>Email</th>
                    <th className='border-b border-solid border-black'>Contact</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} >
                            <td className='text-center'>{val.id}</td>
                            <td className='text-center'>{val.name}</td>
                            <td className='text-center'>{val.email}</td>
                            <td className='text-center'>{val.contact}</td>

                        </tr>
                    )
                })}
            </table>
        </div>
  </div>;
}

export default Employee;
