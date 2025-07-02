import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import type { FormikErrors } from "formik";
import type { UserValues } from "../Pages/UserCrud/UserAdd";

interface IGenDateFieldProps {
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
const GenDateField = (props: IGenDateFieldProps) => {
  const { label, valueType, value, setFieldValue, touched, errors } = props;
  return (
    <div style={{ width: "25%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          value={value ? dayjs(value) : null}
          defaultValue={value ? dayjs(value) : null}
          disableFuture
          onChange={(newValue) => {
            const dateString = newValue ? newValue.format("YYYY-MM-DD") : "";
            setFieldValue(valueType, dateString);
          }}
          slotProps={{
            textField: {
              fullWidth: true,
              readOnly: true,
              id: valueType,
              name: valueType,
              error: touched && Boolean(errors),
              helperText: touched && errors,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default GenDateField;
