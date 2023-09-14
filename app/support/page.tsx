"use client";
import React, { useState } from 'react';

const Support: React.FC = () => {
  const [issue, setIssue] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [issueList, setIssueList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you can handle the submission of the issue, email, images, and issue list to your backend or support system
    // For this example, we'll just log the values to the console
    console.log('Submitted Issue:', issue);
    console.log('Submitted Email:', email);
    console.log('Submitted Images:', selectedImages);
    console.log('Submitted Issue List:', issueList);

    // Clear the form fields
    setIssue('');
    setEmail('');
    setSelectedImages([]);
    setIssueList([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setSelectedImages([...selectedImages, ...newImages]);
    }
  };

  const handleAddIssueToList = () => {
    if (issueList.includes(issue)) {
      alert('This issue is already in the list.');
    } else {
      setIssueList([...issueList, issue]);
      setIssue('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Get Help Center</h2>
      <p className="text-gray-600 mb-4">
        If you have any issues or questions regarding our website, please fill
        out the form below, and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="issue" className="block text-gray-700 font-semibold">
            Issue or Question
          </label>
          <textarea
            id="issue"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            rows={4}
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700 font-semibold">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issueList" className="block text-gray-700 font-semibold">
            Issue List
          </label>
          <ul className="list-disc list-inside">
            {issueList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
          onClick={handleAddIssueToList}
        >
          Add Issue to List
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {selectedImages.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Selected Images</label>
          <div className="flex flex-wrap">
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Selected Image ${index + 1}`}
                className="rounded-lg mx-2 my-2 w-20 h-20 object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
