import React, { useState } from "react";
import logo from "./media/logo.jpg";
import background from "./media/background.jpeg";
import Confetti from "react-confetti";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

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
    }, 5000);
    setAppear(true);
  };

  return (
    <Box>
      <Box
        sx={{
          background: "#1976d2",
          p: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          width={100}
          style={{ boxShadow: "0 0 10px black" }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: "20px",
            fontFamily: "Arial",
            m: 2,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Mario Logo
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {appear ? (
          <Box sx={{ marginInline: "auto", width: "90%" }}>
            <Typography
              variant="h1"
              id="header"
              sx={{
                textAlign: "center",
                textShadow: "2px 2px 10px gray",
                fontFamily: "cursive",
                fontSize: "30px",
              }}
            >
              Welcome {fname} {lname}
            </Typography>
            <Box id="wrapper"></Box>
            {confetti && <Confetti numberOfPieces={200} />}
          </Box>
        ) : (
          <FormControl
            component="form"
            onSubmit={onSubmit}
            sx={{ boxShadow: "0 0 10px black", p: 2, borderRadius: 5, mt: 5 }}
          >
            <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
              Form Submit
            </Typography>
            <Box>
              <TextField
                label="First Name"
                type="text"
                sx={{ width: "100%", mb: 2 }}
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </Box>
            <Box>
              <TextField
                label="Last Name"
                type="text"
                sx={{ width: "100%", mb: 2 }}
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </Box>
            <Button
              type="submit"
              sx={{ background: "#1976d2", color: "white" }}
              id="button"
            >
              Submit
            </Button>
          </FormControl>
        )}
      </Box>
    </Box>
  );
}

export default App;
