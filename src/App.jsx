import React, { useState } from "react";
import logo from "./media/logo.jpg";

function App() {
  const [appear, setAppear] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setAppear(true);
  };

  return (
    <>
      <nav>
        <span>
          <img src={logo} alt="Smile" />
          <h1>My Website</h1>
        </span>
      </nav>
      <main>
        {appear ? (
          <div>
            <h1>
              Welcome {fname} {lname}
            </h1>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <h2>Form Submit</h2>
            <div>
              <label htmlFor="fname">First Name:</label>
              <input
                type="text"
                id="fname"
                value={fname}
                placeholder="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lname">Last Name:</label>
              <input
                type="text"
                id="lname"
                value={lname}
                placeholder="Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </main>
    </>
  );
}

export default App;
