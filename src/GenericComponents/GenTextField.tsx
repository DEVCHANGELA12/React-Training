import { TextField } from "@mui/material";
import type { FormikErrors } from "formik";
import type { UserValues } from "../Pages/UserCrud/UserAdd";

interface IGenTextFieldProps {
  label: string;
  valueType: string;
  value: string;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<UserValues>>;
  touched: boolean | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}

const GenTextField = (props: IGenTextFieldProps) => {
  const { label, value, valueType, touched, setFieldValue, errors } = props;
  return (
    <div style={{ width: "25%" }}>
      <TextField
        fullWidth
        id={label}
        label={label}
        variant="outlined"
        value={value}
        onChange={(e) => {
          setFieldValue(valueType, e.target.value);
        }}
        error={touched && Boolean(errors)}
        helperText={touched && errors}
      />
    </div>
  );
};

export default GenTextField;
