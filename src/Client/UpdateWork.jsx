import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    MetPersonwith: "",
    Relation: "",
    Ownership: "",
    LivingSince: "",
    Age: "",
    Qualification: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add additional validation and processing here
    // For simplicity, we'll just log the submitted data
    console.log('Form Data:', formData);
  };

  const formFields = [
    'Customer Name',
    'Met Person with',
    'Relation',
    'Ownership',
    'Living Since',
    'Age',
    'Qualification',
  ];

  return (
    <div>
 <div className='flex flex-col'>
      {formFields.map((field, index) => (
        <div key={index} className='flex flex-col items-left text-left '>
          <h2 className='mr-2'>{field} :</h2>
          <Input
            type="text"
            name={field.split(' ').join('')} // Use a unique name for each input field
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      ))}
    </div>

    
    </div>
   
  );
};

const inputStyle = {
  width: "40%",
  padding: "20px",
  margin: "10px 0",
  borderRadius: "10px",
  border: "1px solid #474F7A",

};

export default UpdateForm;
