import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../Services/UserService";
import { GenderMenu, type IUser } from "../../Services/UserModel";
import { Formik } from "formik";
import * as Yup from "yup";
import GenTextField from "../../GenericComponents/GenTextField";
import GenDateField from "../../GenericComponents/GenDateField";
import GenSelectField from "../../GenericComponents/GenSelectField";

const UserEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>({
    id: 0,
    userName: "",
    email: "",
    dob: "",
    gender: "Male",
  });
  const navigate = useNavigate();

  const UserValidationSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .min(5, "Minimum 5 characters are required")
      .max(20, "Maximum 20 characters are allowed")
      .required("Username is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    dob: Yup.string().required("Date of Birth is required"),
  });

  useEffect(() => {
    const userDetail = userService.getUserDetail(Number(id));
    if (userDetail) setUser(userDetail);
  }, [id]);

  const handleUserUpdate = (values: IUser) => {
    if (values)
      userService.updateUser(
        Number(id),
        values?.email,
        values?.userName,
        values?.dob,
        values?.gender
      );
    navigate("/users");
  };

  return (
    <Box>
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
          User Edit
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
        initialValues={user}
        enableReinitialize={true}
        validationSchema={UserValidationSchema}
        onSubmit={(values: IUser) => handleUserUpdate(values)}
      >
        {({ setFieldValue, values, handleSubmit, touched, errors }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Box
                className="flex flex-col bg-amber-100 items-center gap-2"
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
                    value={values?.dob ? dayjs(values.dob) : null}
                    defaultValue={dayjs(values.dob)}
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

                <Button
                  style={{ backgroundColor: "black", color: "white" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserEdit;
