import React, { useState } from "react";
import logo from "./media/logo.jpg";
import Confetti from "react-confetti";

function App() {
  const [appear, setAppear] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [confetti, setConfetti] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 3000);
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
            {confetti && <Confetti numberOfPieces={200} />}
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
