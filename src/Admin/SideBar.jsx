import React, { useState } from 'react';
import AssignWork from './AssignWork';
import Worklist from './WorkList';
import EmployeeList from './Employee';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Assign Work');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Assign Work':
        return <AssignWork />;
      case 'Worklist':
        return <Worklist />;
      case 'Employee List':
        return <EmployeeList />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-60 bg-[#474F7A] rounded-xl text-white shadow-2xl m-2 select-none">
        <a
          href="#"
          className={`block py-2 px-4 text-lg no-underline transition duration-300 ease-in-out hover:bg-gray-700 ${
            selectedOption === 'Assign Work' && 'bg-gray-700'
          }`}
          onClick={() => handleOptionClick('Assign Work')}
        >
          Assign Work
        </a>
        <a
          href="#"
          className={`block py-2 px-4 text-lg no-underline transition duration-300 ease-in-out hover:bg-gray-700 ${
            selectedOption === 'Worklist' && 'bg-gray-700'
          }`}
          onClick={() => handleOptionClick('Worklist')}
        >
          Worklist
        </a>
        <a
          href="#"
          className={`block py-2 px-4 text-lg no-underline transition duration-300 ease-in-out hover:bg-gray-700 ${
            selectedOption === 'Employee List' && 'bg-gray-700'
          }`}
          onClick={() => handleOptionClick('Employee List')}
        >
          Employee List
        </a>
      </div>
      <div className="flex-1 p-5">{renderContent()}</div>
    </div>
  );
}

export default Sidebar;

