import {
  Box,
  Button,
  Snackbar,
  Typography,
  type SnackbarCloseReason,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import userService from "../../Services/UserService/UserService";
import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import GenTextField from "../../GenericComponents/GenTextField";
import GenDateField from "../../GenericComponents/GenDateField";
import GenSelectField from "../../GenericComponents/GenSelectField";
import { GenderMenu } from "../../Services/UserService/UserModel";
import postService, {
  type UpdatePayload,
} from "../../Services/PostService/PostService";

export interface UserValues {
  userName: string;
  email: string;
  dob: string;
  gender: string;
}

const UserAdd = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState({ open: false, message: "" });
  const UserValidationSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .test("charTest", "Wrong Input 'd' not allowed", (val) => {
        if (val?.toLowerCase().includes("d")) return false;
        return true;
      })
      .min(5, "Minimum 5 characters are required")
      .max(20, "Maximum 20 characters are allowed")
      .required("Username is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    dob: Yup.string().required("Date of Birth is required"),
  });

  const handleUserAdd = (values: UserValues) => {
    const payload: UpdatePayload = {
      id: 1,
      userId: 1,
      body: "abcde",
      title: "Hii Dev",
    };
    postService.add(payload).then((res) => {
      if (res.status === 200 || res.status === 201) {
        const isAdded = userService.create(
          values?.userName,
          values?.email,
          values?.dob,
          values?.gender
        );
        if (isAdded) {
          alert("User Added Successfully.");
          navigate("/users");
        } else {
          setToast({ open: true, message: "User Already Exists." });
        }
      }
    });
  };

  const initialValues: UserValues = {
    userName: "",
    email: "",
    dob: "",
    gender: "Male",
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setToast({ open: false, message: "" });
  };

  return (
    <Box>
      <Snackbar
        open={toast.open}
        onClose={handleClose}
        autoHideDuration={3000}
        message={toast.open ? toast.message : ""}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "grey",
        }}
      >
        <Typography
          variant="h4"
          className="flex text-center justify-center text-amber-50"
        >
          User Add
        </Typography>
        <Button
          variant="outlined"
          className="!bg-amber-100 "
          onClick={() => navigate("/users")}
        >
          Back
        </Button>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={UserValidationSchema}
        onSubmit={(values) => handleUserAdd(values)}
      >
        {({
          setFieldValue,
          values,
          errors,
          handleSubmit,
          touched,
          resetForm,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                className="flex flex-col bg-amber-100 items-center gap-2 !min-h-full"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                  padding: "10px",
                }}
              >
                <GenTextField
                  label="User Name"
                  valueType="userName"
                  value={values.userName}
                  setFieldValue={setFieldValue}
                  touched={touched.userName}
                  errors={errors?.userName}
                />
                {/* <TextField
                  id="outlined-basic"
                  label="UserName"
                  variant="outlined"
                  value={values.userName}
                  onChange={(e) => {
                    setFieldValue("userName", e.target.value);
                  }}
                  error={touched.userName && Boolean(errors.userName)}
                  helperText={touched.userName && errors.userName}
                /> */}
                <GenTextField
                  label="Email"
                  valueType="email"
                  value={values.email}
                  setFieldValue={setFieldValue}
                  touched={touched.email}
                  errors={errors?.email}
                />
                {/* <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={(e) => {
                    setFieldValue("email", e.target.value);
                  }}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                /> */}

                <GenDateField
                  label="Date Of Birth"
                  valueType="dob"
                  value={values.dob}
                  errors={errors.dob}
                  setFieldValue={setFieldValue}
                  touched={touched.dob}
                />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date of Birth"
                    value={values.dob ? dayjs(values.dob) : null}
                    defaultValue={null}
                    disableFuture
                    onChange={(newValue) => {
                      const dobString = newValue
                        ? newValue.format("YYYY-MM-DD")
                        : "";
                      setFieldValue("dob", dobString);
                    }}
                    slotProps={{
                      textField: {
                        readOnly: true,
                        id: "dob",
                        name: "dob",
                        error: touched.dob && Boolean(errors.dob),
                        helperText: touched.dob && errors.dob,
                      },
                    }}
                  />
                </LocalizationProvider> */}

                <GenSelectField
                  label="Gender"
                  fieldType="gender"
                  value={values.gender}
                  menuList={GenderMenu}
                  setFieldValue={setFieldValue}
                />

                <Box sx={{ width: "25%", display: "flex" }}>
                  <Button
                    style={{ backgroundColor: "black", color: "white" }}
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                  <Button
                    fullWidth
                    style={{
                      backgroundColor: "cyan",
                      color: "black",
                      marginLeft: "15px",
                    }}
                    type="button"
                    onClick={() => resetForm()}
                  >
                    Reset Form
                  </Button>
                </Box>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserAdd;
