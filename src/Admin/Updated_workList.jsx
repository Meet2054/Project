// Updated_workList.js
import React from 'react';

const data = [
    {id:3, Customer_Name : "fref",Met_Person_with : "fcsw"  ,Relation :"friend" ,Ownership  :"", Living_Since :"" ,Age : 45, Qualification :"",  Total_Family_Member :"",},                  
    {id:3, Customer_Name : "fref",Met_Person_with : "fcsw"  ,Relation :"friend" ,Ownership  :"", Living_Since :"" ,Age : 34, Qualification :"",  Total_Family_Member :"",},                  
  {id:3, Customer_Name : "fref",Met_Person_with : "fcsw"  ,Relation :"friend" ,Ownership  :"", Living_Since :"" ,Age : 39, Qualification :"",  Total_Family_Member :"",},                  
]

const Updated_workList = () => {

  const thTdStyle = {
    border: '1px solid #474F7A',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return (<div>
  <div className="App">
          <table className="border-2 border-solid border-green-600 w-[100%] h-200">
          <tr className='text-center'>
                    <th style={thTdStyle}>Id</th>
                    <th style={thTdStyle}>Customer Name</th>
                    <th style={thTdStyle}>Met_Person_with</th>
                    <th style={thTdStyle}>Relation</th>
                    <th style={thTdStyle}>Ownership</th>
                    <th style={thTdStyle}>Living_Since</th>
                    <th style={thTdStyle}>Age</th>
                    <th style={thTdStyle}>Qualification</th>
                    <th style={thTdStyle}>Total_Family_Member</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} >
                            <td style={thTdStyle}>{val.id}</td>
                            <td style={thTdStyle}>{val.Customer_Name}</td>
                            <td style={thTdStyle}>{val.Met_Person_with}</td>
                            <td style={thTdStyle}>{val.Relation}</td>
                            <td style={thTdStyle}>{val.Ownership}</td>
                            <td style={thTdStyle}>{val.Living_Since}</td>
                            <td style={thTdStyle}>{val.Age}</td>
                            <td style={thTdStyle}>{val.Qualification}</td>
                            <td style={thTdStyle}>{val.Total_Family_Member}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
  </div>);
}

export default Updated_workList;
