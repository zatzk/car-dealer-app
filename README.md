# Vehicle Info App

This is a Next.js application that allows users to select a vehicle make and model year, and retrieves the corresponding vehicle models from the NHTSA API.

## Features

- Fetches vehicle makes and models from the NHTSA API.
- Allows users to select vehicle make and model year.
- Displays the available vehicle models based on user selection.

### Images

![Screenshot 1](/public/Screenshot1.png)
![Screenshot 2](/public/Screenshot2.png)
![Screenshot 3](/public/Screenshot3.png)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/zatzk/car-dealer-app.git
    cd car-dealer-app
    ```

2. Install Dependencies

  ```bash
    npm install
  ```

3. Create a `.env.local` file in the root directory to store your environment variables. Add the following line to it:

  ```bash
    NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles/
  ```

4. Start the development server:

 ```bash
    npm run dev
  ```

5. Open your browser and go to http://localhost:3000 to view the app.


### Usage

Once the app is running, you can select a vehicle make from the dropdown menu.
After selecting the make, choose the model year from the second dropdown.
Click the "Next" button to retrieve and display the available vehicle models for the selected make and year.