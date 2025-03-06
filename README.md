# tdd-incubyte
tdd string calculator

## Installation
1. Clone the repository:
    ```sh 
    git clone https://github.com/nikhilkewat/tdd-stringcalculator-incubyte.git
    ```
    
2. Navigate to the project directory:
    ```sh 
   cd tdd-stringcalculator-incubyte
   ```

3. Install dependencies:
```sh 
    npm install
    ```

## Usage

### Running the Server

To start the server, run:
```sh
npm run dev
```

# The server will be running on http://localhost:5000.

## Usage
To run the tests, use:
```sh
npm run test
```
OR
```sh
npm run test:watch
```


## API
# POST /add
Calculates the sum of numbers in a string.
URL: http://localhost:5000/add
Method: POST
body: { 
    "numbers" : "1,2,3"
}

# Response
{ "result": 6 }