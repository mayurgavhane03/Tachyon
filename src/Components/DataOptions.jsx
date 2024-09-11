import { useState } from "react";


const DataOptions = () => {
  const [selectedOption, setSelectedOption] = useState("Test-data-2");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleGetData = () => {
    alert(`Selected Option: ${selectedOption}`);
  };

  return (
    <div className="   absolute top-50 right-10  items-start p-4 border border-blue-500 rounded-md">
      <label className="flex items-center mb-2">
        <input
          type="radio"
          name="dataOption"
          value="Test-data-1"
          checked={selectedOption === "Test-data-1"}
          onChange={handleChange}
          className="form-radio text-blue-600 mr-2"
        />
        Test-data-1
      </label>
      <label className="flex items-center mb-2">
        <input
          type="radio"
          name="dataOption"
          value="Test-data-2"
          checked={selectedOption === "Test-data-2"}
          onChange={handleChange}
          className="form-radio text-blue-600 mr-2"
        />
        Test-data-2
      </label>
      <label className="flex items-center mb-4">
        <input
          type="radio"
          name="dataOption"
          value="Custom"
          checked={selectedOption === "Custom"}
          onChange={handleChange}
          className="form-radio text-blue-600 mr-2"
        />
        Custom
      </label>
      <button
        className="bg-blue-200 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-blue-300"
        onClick={handleGetData}
      >
        Get Data
      </button>
    </div>
  );
};

export default DataOptions;
