'use client'
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  type CoalProductionData = {
    [key: string]: number; // Use a string as the key and assign a number as the value
  };

  // Define the initial state for dropdown selections
  const initialState = {
    state: '',
    district: '',
    companyName: '',
    clusterId: '',
    coalProductionPerDay: {Cluster1: 1000},
  };

  // Dummy data object
  const dummyData = {
    state: ['State1', 'State2'],
    district: {
      State1: ['District1', 'District2'],
      State2: ['District3', 'District4'],
    },
    companyName: {
      State1: {
        District1: ['CompanyA', 'CompanyB'],
        District2: ['CompanyC', 'CompanyD'],
      },
      State2: {
        District3: ['CompanyE', 'CompanyF'],
        District4: ['CompanyG', 'CompanyH'],
      },
    },
    clusterId: {
      mineA: ['Cluster1', 'Cluster2'],
      mineB: ['Cluster3', 'Cluster4'],
      mineC: ['Cluster5', 'Cluster6'],
      // ... Define clusters for other companies
    },
    coalProductionPerDay: {
      Cluster1: 1000,
      Cluster2: 1200,
      Cluster3: 800,
      Cluster4: 1500,
      Cluster5: 900,
      Cluster6: 1100,
      // ... Define production per day for other clusters
    },
  };

  // State variables to hold selected values
  const [selectedValues, setSelectedValues] = useState(initialState);

  // Event handler to update selected state
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = event.target.value;
    setSelectedValues({
      ...selectedValues,
      state: newState,
    });
  };

  // Event handler to update selected district
  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = event.target.value;
    setSelectedValues({
      ...selectedValues,
      district: newDistrict,
    });
  };

  // Event handler to update selected company name
  const handleCompanyNameChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCompanyName = event.target.value;
    setSelectedValues({
      ...selectedValues,
      companyName: newCompanyName,
    });
  };

  // Event handler to update selected cluster ID
  const handleClusterIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newClusterId = event.target.value;
    setSelectedValues({
      ...selectedValues,
      clusterId: newClusterId,
    });
  };
  
  // Ensure selectedValues.clusterId is a valid key from coalProductionPerDay
  const clusterId = selectedValues.clusterId as keyof typeof dummyData.coalProductionPerDay;

  // Access the coal production per day using the valid key
  const coalProductionPerDay = dummyData.coalProductionPerDay[clusterId];

  // Calculate coal production per day and annual production based on selected parameters
  const coalProductionAnnual = coalProductionPerDay * 365; // Assuming 365 days in a year

  return (
    <div>
      <h2>Coal Production Dashboard</h2>
      <div>
        <label htmlFor="state">Select State:</label>
        <select
          id="state"
          name="state"
          value={selectedValues.state}
          onChange={handleStateChange}
        >
          <option value="">Select State</option>
          {dummyData.state.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      {/* Add dropdowns for District, Company Name, and Cluster ID */}
      {/* Implement similar dropdowns as the State dropdown */}
      {/* ... */}
      <div>
        <h3>Output:</h3>
        <p>Coal Production per Day: {coalProductionPerDay} tons</p>
        <p>Coal Production Annual: {coalProductionAnnual} tons</p>
      </div>
    </div>
  );
};

export default Dashboard;
