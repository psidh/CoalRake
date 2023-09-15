'use client';
import { useState } from 'react';

// Define your component
const ToggleFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState('Option A'); // Dummy value
  const [selectedOption2, setSelectedOption2] = useState('Option 1'); // Dummy value
  const [numericalInput, setNumericalInput] = useState('42'); // Dummy value

  const [message, setMessage] = useState('');

  // Dummy data for dropdowns
  const options1 = ['Option A', 'Option B', 'Option C'];
  const options2 = ['Option 1', 'Option 2', 'Option 3'];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Display a message to the user
    // Display a message to the user using a window alert
    window.alert('Form submitted successfully');

    // Clear the form fields
    setSelectedOption1('');
    setSelectedOption2('');
    setNumericalInput('');
  };

  return (
    <div>
      {/* Toggle button to show/hide the modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 w-full md:w-1/2 mx-2 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Form Modal</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="option1" className="block font-semibold mb-2">
                  Dropdown 1
                </label>
                <select
                  id="option1"
                  className="w-full p-2 border rounded"
                  value={selectedOption1}
                  onChange={(e) => setSelectedOption1(e.target.value)}
                >
                  {/* Populate options dynamically */}
                  {options1.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="option2" className="block font-semibold mb-2">
                  Dropdown 2
                </label>
                <select
                  id="option2"
                  className="w-full p-2 border rounded"
                  value={selectedOption2}
                  onChange={(e) => setSelectedOption2(e.target.value)}
                >
                  {/* Populate options dynamically */}
                  {options2.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numericalInput"
                  className="block font-semibold mb-2"
                >
                  Numerical Input
                </label>
                <input
                  type="number"
                  id="numericalInput"
                  className="w-full p-2 border rounded"
                  value={numericalInput}
                  onChange={(e) => setNumericalInput(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pop-up message */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 w-full md:w-1/2 mx-2 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">{message}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setMessage('')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleFormModal;
