
# Smart India Hackathon 2023 Official Submission

Team Name:
- Prem Sai Verukuri
- Sanjeev Varma
- P Sidharth
- Prema Kalyani

## Project Details

### Overview

The "CEM Coal Express Navigators" project is a web application developed to optimize coal transportation from various mines to destination railway sidings. The goal of this project is to minimize demurrage charges incurred due to trains waiting for coal, ultimately saving costs and increasing the efficiency of coal transportation.

### Problem Statement

In the coal industry, trains (rakes) are used to transport coal from mines to central locations or railway sidings. Sometimes, when a train arrives at a siding, there may not be enough coal available, leading to delays and additional charges. This project aims to address this problem by providing a digital platform that:

- Tracks the coal quantity at different railway sidings.
- Calculates the shortest path to the destination, ensuring that trains go to the nearest location with enough coal.
- Minimizes waiting time and demurrage charges.

### Tech Stack

- Frontend:
  - Next.js
  - TypeScript
  - React-Query
  - Tailwind CSS

- Backend:
  - Node.js (or your chosen backend technology)
  - Database Management System (e.g., PostgreSQL, MongoDB)

- Algorithms:
  - Dijkstra's Algorithm or A* Search for path optimization

### License

This project is licensed under the [MIT License](LICENSE).

## How to Use the App

1. **Installation**
  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

   To run the application locally, follow these steps:

   - Clone the repository:

     ```bash
     git clone https://github.com/your/repo.git
     cd repo-directory
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

2. **Configuration**

   - Configure your backend server (if applicable) and database settings.

3. **Running the Application**

   - Start the development server:

     ```bash
     npm run dev
     ```

   The application will be available at `http://localhost:3000` in your web browser.

4. **Usage**

   - Use the web interface to input coal mine information, train capacities, and other relevant data.
   - The application will calculate optimized routes and display real-time coal quantities at each siding.
   - Monitor and manage coal transportation efficiently to minimize demurrage charges.

5. **Deployment**

   - Deploy the application to a hosting platform of your choice for production use.

## Contributors

- Prem Sai Verukuri
- Sanjeev Varma
- P Sidharth
- Prema Kalyani

Feel free to contribute to this project by submitting issues or pull requests.

---


