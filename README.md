# Metricell-employee-database

This is an interview test that was developed to add and update employees in a database using React.js and C#. 

# Prerequistes

- **Node.js** (version 12.x, 14.x, or 16.x recommended)
- **npm** (comes with Node.js) 
- **.NET SDK** (version 6.0 or later)

## Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Set Up Client Application**:
    Navigate to the `ClientApp` directory and install the dependencies:
    ```bash
    cd ClientApp
    rm -rf node_modules package-lock.json
    npm install
    ```


## Running the Project

1. **Start the React Development Server**:
    In the `ClientApp` directory, run:
    ```bash
    npm start
    ```

2. **Run the .NET Application**:
    In the root directory, run:
    ```bash
    dotnet run
    ```

## Changes I made to the project 

-**App.js**: Edited the file to get the functionality of add and editing the employee database 
-**App.css**: Created a css file to design the outlook of the website. 
-**Startup.cs**: Edited the file to allow for data to be permanently saved in the database and edited out the automatic reset of the database when starting and stopping the program.
