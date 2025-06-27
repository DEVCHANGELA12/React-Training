import { Box, Button, TextField, Typography } from "@mui/material";
import { useId, useRef } from "react";

const Home = () => {
  const id = useId();

  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const userName = userNameRef?.current?.value.trim() || "";
    const email = emailRef?.current?.value.trim() || "";
    const message = messageRef?.current?.value || "";

    if (userName === "") {
      alert("Username is required");
      return;
    }
    if (email === "") {
      alert("email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const obj = {
      userName,
      email,
      message,
    };
    console.log("Form Values:", obj);

    // Clear the form fields
    if (userNameRef.current) userNameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };
  return (
    <>
      <Typography id={id} variant="h3" style={{ margin: "10px" }}>
        This is the Home Page.
      </Typography>

      <form className="mt-3">
        <Box
          component="form"
          className="flex flex-col bg-amber-100 items-center gap-2"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" }, padding: "10px" }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4" color="info" style={{ margin: "20px" }}>
            User Form (Uncontrolled)
          </Typography>
          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            ref={userNameRef}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            ref={emailRef}
          />
          <TextField
            id="outlined-textarea"
            label="Message"
            placeholder="Enter any Message"
            multiline
            minRows={3}
          />
          <Button type="button" variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Home;
