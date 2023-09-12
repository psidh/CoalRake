'use client';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../config.js';
import CustomNav from '../components/CustomNav'; // Replace './CustomNav' with the actual path to your 'customNav' component.


// Define a type for your data
interface CoalData {
  region: string;
  district: string;
  owner: string;
  mineName: string;
  coalProduction: number;
}

const Dashboard = () => {

  const navigator = useRouter();


  // Define state variables for your data and filters
  const [data, setData] = useState<CoalData[]>([]);
  const [regionFilter, setRegionFilter] = useState('');
  const [districtFilter, setDistrictFilter] = useState('');
  const [ownerFilter, setOwnerFilter] = useState('');
  const [mineFilter, setMineFilter] = useState('');

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockData: CoalData[] = [
      {
        region: 'Region 1',
        district: 'District A',
        owner: 'Owner X', 
        mineName: 'Mine 1',
        coalProduction: 100,
      },
      {
        region: 'Region 1',
        district: 'District B',
        owner: 'Owner Y',
        mineName: 'Mine 2',
        coalProduction: 200,
      },
      {
        region: 'Region 1',
        district: 'District C',
        owner: 'Owner Z',
        mineName: 'Mine 3',
        coalProduction: 120,
      },
      {
        region: 'Region3',
        district: 'District D',
        owner: 'Owner Z',
        mineName: 'Mine 3',
        coalProduction: 150,
      },
      {
        region: 'Assam',
        district: 'Dispur',
        owner: 'Billionaire Premsai ',
        mineName: 'PremSai Coaler',
        coalProduction: 150,
      },
      // Add more data entries as needed
    ];

    setData(mockData);

    // Extract and set unique values for the dropdowns
    const uniqueRegions = Array.from(
      new Set(mockData.map((item) => item.region))
    );
    setUniqueOptions(uniqueRegions, setRegionFilter);

    const uniqueDistricts = Array.from(
      new Set(mockData.map((item) => item.district))
    );
    setUniqueOptions(uniqueDistricts, setDistrictFilter);

    const uniqueOwners = Array.from(
      new Set(mockData.map((item) => item.owner))
    );
    setUniqueOptions(uniqueOwners, setOwnerFilter);

    const uniqueMines = Array.from(
      new Set(mockData.map((item) => item.mineName))
    );
    setUniqueOptions(uniqueMines, setMineFilter);
  }, []);

  // Function to set unique options in a dropdown
  const setUniqueOptions = (
    options: string[],
    setter: (value: string) => void
  ) => {
    setter(''); // Reset the filter
    options.sort(); // Sort the options alphabetically
    options.unshift(''); // Add an empty option
    setter(options[0]); // Set the dropdown value to the first option
  };

  // Define a function to filter data based on dropdown selections
  const filteredData = data.filter(
    (item) =>
      (!regionFilter || item.region === regionFilter) &&
      (!districtFilter || item.district === districtFilter) &&
      (!ownerFilter || item.owner === ownerFilter) &&
      (!mineFilter || item.mineName === mineFilter)
  );

  return (
    <div>
      <CustomNav />
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Coal Production Dashboard
        </h1>
        {/* Dropdown Filters */}
        <div className="flex flex-col space-y-4 mb-4">
          <div>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full bg-blue-50 border border-gray-300 rounded p-2"
            >
              <option value="">Select Region</option>
              {Array.from(new Set(data.map((item) => item.region))).map(
                (region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                )
              )}
            </select>
          </div>

          <div>
            <select
              value={districtFilter}
              onChange={(e) => setDistrictFilter(e.target.value)}
              className="w-full bg-blue-50 border border-gray-300 rounded p-2"
            >
              <option value="">Select District</option>
              {Array.from(new Set(data.map((item) => item.district))).map(
                (district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                )
              )}
            </select>
          </div>

          <div>
            <select
              value={ownerFilter}
              onChange={(e) => setOwnerFilter(e.target.value)}
              className="w-full bg-blue-50 border border-gray-300 rounded p-2"
            >
              <option value="">Select Owner</option>
              {Array.from(new Set(data.map((item) => item.owner))).map(
                (owner, index) => (
                  <option key={index} value={owner}>
                    {owner}
                  </option>
                )
              )}
            </select>
          </div>


          {/* Add similar dropdowns for owner and mine */}
        </div>

        {/* Table to display filtered data */}
        <div className="overflow-x-auto">
          {filteredData.length > 0 ? (
          <table className="w-full border border-rounded  text-center">
            <thead className="bg-blue-200">
              <tr>
                <th className="p-2">Region</th>
                <th className="p-2">District</th>
                <th className="p-2">Owner</th>
                <th className="p-2">Mine Name</th>
                <th className="p-2">Coal Production</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-200 ">
                  <td className="p-2 border border-gray-200">{item.region}</td>
                  <td className="p-2 border border-gray-200">{item.district}</td>
                  <td className="p-2 border border-gray-200">{item.owner}</td>
                  <td className="p-2 border border-gray-200">{item.mineName}</td>
                  <td className="p-2 border border-gray-200">{item.coalProduction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          // Display a message when no matching rows are found
          <div className="text-center text-2xl text-gray-500 mt-4">
            No matching records found.
          </div>
        )}
      </div>      
    </div>
    <Footer />
    </div>

  );
};

export default Dashboard;
