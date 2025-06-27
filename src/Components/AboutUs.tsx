// components/AboutUs.js

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AboutUs = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    
    if (userName.trim() === "") {
      alert("Username is required");
      return;
    }
    if (email.trim() === "") {
      alert("email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const obj = {
      userName: userName,
      email: email,
      message: message,
    };
    console.log("Form Values:", obj);
    setUserName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <header className="hero">
        <h1>About Us</h1>
        <p>Passionate. Creative. Reliable.</p>
      </header>

      <section className="about">
        <div className="container">
          <h2>User Form (controlled)</h2>

          <form>
            <Box
              component="form"
              className="flex flex-col bg-amber-100 items-center gap-2"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                padding: "10px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="UserName"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="Enter any Message"
                multiline
                minRows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button
                style={{ backgroundColor: "black", color: "white" }}
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
