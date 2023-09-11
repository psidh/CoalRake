// src/data/data.tsx

export const states = ['State 1', 'State 2'];
export const districts = ['District 1', 'District 2'];
export const companies = ['Company 1', 'Company 2'];
export const clusters = ['Cluster 1', 'Cluster 2'];

export const chartData = {
  labels: ['Coal Production per Day', 'Coal Production Annual'],
  datasets: [
    {
      label: 'Dummy Data',
      data: [50, 500], // Replace with actual data
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
    },
  ],
};

