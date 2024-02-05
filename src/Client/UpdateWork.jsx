import React, { useState } from 'react';

const UpdateForm = () => {
  const [formData, setFormData] = useState({
    Customername: '',
    MetPersonWith : '',
    Relation : '',
    Ownership :'', 
    LivingSince :'',
    Age : '',
    Qualification :'',
    TotalFamilyMember : '',
    EarningMember :'',
    Occupation :'',
    OfficeName : '',
    Address : '',
    Designation : '',
    Duration : '',
    AnnualIncome :'',
    Premium : '',
    email: '',
    AgentName : '',
    Neighbour : '',
    Drinking : false,
    Smoking: false,
    AnyIllness : '',
    CovidPatient : false,
    CompleteTwoDoses : false,

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };


  return (
    <div className='flex justify-center items-center '>
  <div className='bg-white w-full shadow-md rounded-xl p-10'>
      <h1 className='text-pretty font-SingleDay text-2xl'>Form </h1>

      <form className='flex flex-col' onSubmit={handleSubmit}>
        {/* Text Input */}
        <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Customer Name :</label>
        <input
        className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Customername"
          name="Customername"
          value={formData.Customername}
          onChange={handleChange}
          required
        />
 <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Met Person With : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="MetPersonWith"
          name="MetPersonWith"
          value={formData.MetPersonWith}
          onChange={handleChange}
          required
        />
        <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Relation : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Relation"
          name="Relation"
          value={formData.Relation}
          onChange={handleChange}
          required
        />
         <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">OwnerShip : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Ownership"
          name="Ownership"
          value={formData.Ownership}
          onChange={handleChange}
          required
        />
        <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Living Since : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="number"
          id="LivingSince"
          name="LivingSince"
          value={formData.LivingSince}
          onChange={handleChange}
          required
        />
         <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Age : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="number"
          id="Age"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          required
        />
         <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Qualification: </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Qualification"
          name="Qualification"
          value={formData.Qualification}
          onChange={handleChange}
          required
        />
         <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Total Family Member: </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="number"
          id="TotalFamilyMember"
          name="TotalFamilyMember"
          value={formData.TotalFamilyMember}
          onChange={handleChange}
          required
        />
        <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Earning Member : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="EarningMember"
          name="EarningMember"
          value={formData.EarningMember}
          onChange={handleChange}
          required
        />





<label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Occupation: </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Occupation"
          name="Occupation"
          value={formData.Occupation}
          onChange={handleChange}
          required
        />

<label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Office Name: </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="OfficeName"
          name="OfficeName"
          value={formData.OfficeName}
          onChange={handleChange}
          required
        />
<label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Office Address: </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
          required
          multiple
        />
<label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Designation : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Designation"
          name="Designation"
          value={formData.Designation}
          onChange={handleChange}
          required
        />
  <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Duration : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Duration"
          name="Duration"
          value={formData.Duration}
          onChange={handleChange}
          required
        />   
          <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Annual Income : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="AnnualIncome"
          name="AnnualIncome"
          value={formData.AnnualIncome}
          onChange={handleChange}
          required
        />      
          <label  className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Premium : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="number"
          id="Premium"
          name="Premium"
          value={formData.Premium}
          onChange={handleChange}
          required
        />        
          
        <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="email">Email:</label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
   <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Agent Name : </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="AgentName"
          name="AgentName"
          value={formData.AgentName}
          onChange={handleChange}
          required
        />   
         <label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Neighbour: </label>
        <input
          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="Neighbour"
          name="Neighbour"
          value={formData.Neighbour}
          onChange={handleChange}
          required
        />   
<div className='flex items-center'> {/* Habits */}
  <input
    className='mx-3 transform scale-150'
    type="checkbox"
    id="Drinking"
    name="Drinking"
    checked={formData.Drinking}
    onChange={handleChange}
  />
  <label className='text-xl font-semibold font-SingleDay mb-2 text-center' htmlFor="Drinking">Drinking </label>
  
  <input
    className='mx-3 transform scale-150'
    type="checkbox"
    id="Smoking"
    name="Smoking"
    checked={formData.Smoking}
    onChange={handleChange}
  />
  <label className='text-xl font-semibold font-SingleDay mb-2 text-center' htmlFor="Smoking">Smoking </label>
</div>



<label className='text-xl font-semibold font-SingleDay mb-2' htmlFor="name">Any Illness : </label>
        <input

          className='border border-1 rounded-xl p-2  border-[#474F7A] w-1/2 mb-4'
          type="text"
          id="AnyIllness"
          name="AnyIllness"
          value={formData.AnyIllness}
          onChange={handleChange}
       
        />


        {/* Checkbox */} 
        <div className='flex items-center w-1/2'>
        <input
         className='mx-3 transform scale-150'
          type="checkbox"
          id="CovidPatient"
          name="CovidPatient"
          checked={formData.CovidPatient}
          onChange={handleChange}
        />
        <label  className='text-xl font-semibold font-SingleDay mb-2' htmlFor="subscribe">Covid Patient in family </label>
        </div>
       
        <div className='flex items-center w-1/2'>
        <input
         className='mx-3 transform scale-150'
          type="checkbox"
          id="CompleteTwoDoses"
          name="CompleteTwoDoses"
          checked={formData.CompleteTwoDoses}
          onChange={handleChange}
        />
        <label  className='text-xl font-semibold font-SingleDay mb-2' htmlFor="subscribe">Completed Both Doses </label>
        </div>
        {/* Submit Button */}
       <button className='border-2 w-1/6 p-3 align-middle text-center border-[#474F7A] rounded-2xl 
                hover:bg-[#474F7A] hover:text-white hover:border-[#474F7A] 
                transition-all duration-200 ease-in-out hover:font-semibold
                shadow-md' type="submit">
  Submit
</button>


      </form>
      </div>
    </div>
  );
};

export default UpdateForm;
