# Investment Calculator

A simple React application for calculating investment returns based on the following parameters:

- **Initial Investment**
- **Annual Investment**
- **Expected Return**
- **Duration**

The application visualizes the annual growth of capital and interest and displays the final data in a convenient table.

---

## Project Structure

.
├─ public/
│ └─ index.html // Application entry point
├─ src/
│ ├─ components/
│ │ ├─ Header.jsx // Application header
│ │ ├─ Counter.jsx // Input field component with a label
│ │ └─ Results.jsx // Component that displays results in a table
│ ├─ util/
│ │ └─ investment.js // Functions for calculations and formatting
│ ├─ App.jsx // Main application component
│ ├─ index.css // Main styles
│ └─ main.jsx // React entry point
├─ package.json
└─ README.md

### Main Files

- **App.jsx**  
  Contains the main components (`Header`, `Counter`, `Results`) and the logic for storing and updating data using React’s `useState`.

- **Counter.jsx**  
  A separate component that displays a label and an input field. It calls the `onChange` function whenever its value changes, which updates the state in `App`.

- **Results.jsx**  
  Displays the calculated data by year in a table. Uses the `calculateInvestmentResults` function for calculations and the `formatter` object for formatting values.

- **investment.js**  
  Contains functions for calculating the final value of investments and for currency formatting:

  - `calculateInvestmentResults`: Calculates how the investment grows each year, considering annual contributions and expected returns.
  - `formatter`: An `Intl.NumberFormat` object for formatting values as currency (USD).

- **index.css**  
  Contains global styles for the entire application.

---

## Installation and Usage

1. **Clone the repository** or download the project archive.
2. **Install dependencies**:

   ```
   npm install

   ```

3. **Start the development server:**

   ```
   npm run dev
   ```

4. **Open http://localhost:5173/** (the port may vary depending on Vite settings) in your browser.

## How to Use

1. Enter values in the input fields:

   - **Initial Investment** – The initial amount of investment
   - **Annual Investment** – The annual contribution
   - **Expected Return** – The expected annual return percentage
   - **Duration** – The number of years you plan to invest

2. If all data is entered correctly (e.g., `Duration > 0`), a results table will be displayed:
   - **Year** – The year number
   - **Investment Value** – The total value of the investment at the end of that year
   - **Interest (Year)** – The amount of interest earned during that year
   - **Total Interest** – The total interest earned since the start of the investment
   - **Invested Capital** – The total amount contributed (initial + annual contributions)
