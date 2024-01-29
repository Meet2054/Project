import React, { useState } from 'react';
import AssignWork from './UpdateWork';
import Worklist from './WorkList';
import WorkToDo from './UpdateWork';

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState('Work to do');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Work to do':
        return <WorkToDo />;
      case 'Worklist':
        return <Worklist />;
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
            selectedOption === 'Work to do' && 'bg-gray-700'
          }`}
          onClick={() => handleOptionClick('Work to do')}
        >
          Work to do
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
       
      </div>
      <div className="flex-1 p-5">{renderContent()}</div>
    </div>
  );
}

export default Sidebar;

