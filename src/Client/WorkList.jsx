import React, { useState } from 'react';

const WorkList = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      type: 'New Business',
      caseNumber: 'EXP122356470',
      clientCode: '1252418',
      insuranceCompany: 'ICICI - Prudential',
      contactPerson: 'KISHAN YASHWANT PATIL',
      address: '1102 SAI PRASAD ARCADE CHS LTD, PLOT NO 2 SECTOR 7, KAMOTHE, NR AXIS BANK, 410210',
      phone: '-',
      city: 'Kharghar',
      state: 'MUMBAI',
      zipCode: '410210',
    },
    {
      id: 2,
      type: 'Fund Transfer Case',
      caseNumber: 'EXP122356490',
      clientCode: 'C001841624',
      insuranceCompany: 'TATA AIA',
      contactPerson: 'ASHOK KUMAR',
      address: 'SHIVAM, R/H PLOT B-60, SECTOR-06, NEW PANVEL, SECTOR-06 - MAHARASHTRA - 410206',
      phone: '7751989136 / 9437223173',
      city: 'Panvel',
      state: 'MUMBAI',
      zipCode: '410206',
    }
  ]);

  const thTdStyle = {
    border: '1px solid #474F7A',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  const headerStyle = {
    backgroundColor: '#f2f2f2',
  };

  return (
    <div>
      <h2 className='font-SingleDay font-medium text-2xl pb-5'>WorkList </h2>
      <table className='border-collapse w-full shadow-2xl'>
        <thead>
          <tr style={headerStyle}>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Type</th>
            <th style={thTdStyle}>Case Number</th>
            <th style={thTdStyle}>Client ID</th>
            <th style={thTdStyle}>Company</th>
            <th style={thTdStyle}>Contact Person</th>
            <th style={thTdStyle}>Address</th>
            <th style={thTdStyle}>Phone</th>
            <th style={thTdStyle}>City</th>
            <th style={thTdStyle}>State</th>
            <th style={thTdStyle}>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData) => (
            <tr key={rowData.id} style={thTdStyle}>
              <td>{rowData.id}</td>
              <td>{rowData.type}</td>
              <td>{rowData.caseNumber}</td>
              <td>{rowData.clientCode}</td>
              <td>{rowData.insuranceCompany}</td>
              <td>{rowData.contactPerson}</td>
              <td>{rowData.address}</td>
              <td>{rowData.phone}</td>
              <td>{rowData.city}</td>
              <td>{rowData.state}</td>
              <td>{rowData.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkList;
