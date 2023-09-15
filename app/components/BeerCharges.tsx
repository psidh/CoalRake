import React from 'react';

const DemurrageCalculator = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Demurrage Charges Calculator</h2>
      <p className="mb-4">
        Demurrage is a charge imposed for the delay in loading or unloading cargo beyond the allowed free time at a port or terminal. Here's how you can calculate demurrage charges:
      </p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Days</th>
            <th className="border border-gray-300 p-2">Charge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">0-2 days</td>
            <td className="border border-gray-300 p-2">$0</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">3-5 days</td>
            <td className="border border-gray-300 p-2">$50 per day</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">6-10 days</td>
            <td className="border border-gray-300 p-2">$100 per day</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">11+ days</td>
            <td className="border border-gray-300 p-2">$200 per day</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        To calculate demurrage charges, follow these steps:
      </p>
      <ol className="list-decimal ml-6 mt-2">
        <li>Identify the number of days the cargo is delayed beyond the allowed free time.</li>
        <li>Refer to the table above to determine the applicable charge per day based on the number of days.</li>
        <li>Multiply the number of days by the daily charge to calculate the total demurrage charges.</li>
      </ol>
    </div>
  );
};

export default DemurrageCalculator;
