import React from "react";
import AllRoute from "./Routes/route";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
function App() {
  return (
    <main className="column">
      <AllRoute></AllRoute>
    </main>
    // <div className="login-wrapper">
    //   <h1>Learnathon 2.0</h1>
    //   <h2>Habibullah</h2>
    //   <form>
    //     <label>
    //       <p>iamhabib</p>
    //       <input type="text" />
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input type="password" />
    //     </label>
    //     <div>
    //       <button type="submit">Login</button>
    //     </div>
    //   </form>
    // </div>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
