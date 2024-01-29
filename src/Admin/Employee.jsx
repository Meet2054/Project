// Employee.js
import React from 'react';

const data = [
  {id:1, name: "Anom", email:"Anom2003@gmail.com", contact: "123456789" },
  {id:2, name: "Megha", email: "Megha2003@gmail.com", contact: "123456789" },
  {id:3, name: "Subham", email: "Subham2003@gmail.com", contact: "123456789" },
]

// const Employee = () => {
//   const thTdStyle = {
//     border: '1px solid #474F7A',
//     padding: '10px',
//     textAlign: 'center',
//     borderRadius: '10px',
//   };
//   return <div>
//   <div className="App">
//           <table className="border-2 border-solid border-green-600 w-[100%] h-200">
//           <tr className='text-center bg-[#f2f2f2]'>
//                     <th style={thTdStyle}>Id</th>
//                     <th  style={thTdStyle}>Name</th>
//                     <th  style={thTdStyle}>Email</th>
//                     <th  style={thTdStyle}>Contact</th>
//                 </tr>
//                 {data.map((val, key) => {
//                     return (
//                         <tr key={key} >
//                             <td  style={thTdStyle}>{val.id}</td>
//                             <td  style={thTdStyle}>{val.name}</td>
//                             <td  style={thTdStyle}>{val.email}</td>
//                             <td  style={thTdStyle}>{val.contact}</td>

//                         </tr>
//                     )
//                 })}
//             </table>
//         </div>
//   </div>;
// }



const Employee = () => {
  return(
    <div className="">
      <div className="grid max-w-sm w-full lg:max-w-full lg:flex gap-9" >
     {data.map((val, key) => {
      return (
           <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" key={key}>
             <div className="mb-8">
               <p className="text-sm text-gray-600 flex items-center">
                 {/* <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                   <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                 </svg> */}
                 {val.id}
               </p>
               <div className="text-gray-900 font-bold text-xl mb-2">{val.name}</div>
               <p className="text-gray-700 text-base">{val.email}</p>
             </div>
             <div className="flex items-center">
               {/* <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
               <div className="text-sm">
                 <p className="text-gray-900 leading-none">{val.contact}</p>
                 <p className="text-gray-600">Aug 18</p>
               </div>
             </div>
           </div>
      )
        })}
          </div>
    </div>
  )
}
  export default Employee;