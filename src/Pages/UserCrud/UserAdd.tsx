import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../Services/UserService";
import type { IUser } from "../../Services/UserModel";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const UserAdd = () => {
  const [user, setUser] = useState<IUser>();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!user) return alert("please fill details");
    if (user?.userName.trim() === "") {
      alert("Username is required");
      return;
    }
    if (!user?.email || user?.email.trim() === "") {
      alert("email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user?.email && !emailRegex.test(user?.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!user?.dob || user?.dob === "") {
      alert("Dob is required");
      return;
    }
    if (user) {
      let isAdded = userService.create(user?.userName, user?.email, user?.dob);
      if (isAdded) {
        alert("UserAdded");
        navigate("/users");
      } else {
        alert("duplicate username");
      }
    }
  };

  return (
    <Box>
      User Add
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
            value={user?.userName}
            onChange={(e) => {
              const newUserName = e.target.value;
              setUser((prev) =>
                prev
                  ? { ...prev, userName: newUserName }
                  : ({ userName: newUserName } as IUser)
              );
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={user?.email}
            onChange={(e) => {
              const newEmail = e.target.value;
              setUser((prev) =>
                prev
                  ? { ...prev, email: newEmail }
                  : ({ email: newEmail } as IUser)
              );
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <DatePicker
                label="Date of Birth"
                value={user?.dob ? dayjs(user.dob) : null}
                defaultValue={null}
                disableFuture
                onChange={(newValue) => {
                  const dobString = newValue
                    ? newValue.format("YYYY-MM-DD")
                    : "";
                  setUser((prev) =>
                    prev
                      ? { ...prev, dob: dobString }
                      : ({ dob: dobString } as IUser)
                  );
                }}
              />
            </Box>
          </LocalizationProvider>

          <Button
            style={{ backgroundColor: "black", color: "white" }}
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserAdd;
