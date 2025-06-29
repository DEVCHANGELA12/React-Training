import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { FormikErrors } from "formik";
import type { UserValues } from "../Pages/UserCrud/UserAdd";

interface IGenSelectFieldProps {
  label: string;
  fieldType: string;
  value: string;
  menuList: string[];
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<UserValues>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const GenSelectField = (props: IGenSelectFieldProps) => {
  const { label, fieldType, value, menuList, setFieldValue } =
    props;
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={`${label}-${fieldType}`}>{label}</InputLabel>
        <Select
          labelId={`${label}-${fieldType}`}
          id="select-label"
          value={value}
          label={label}
          defaultValue={value}
          onChange={(e) => {
            setFieldValue(fieldType, e.target.value);
          }}
        >
          {menuList.map((menu) => {
            return <MenuItem value={menu}>{menu}</MenuItem>;
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default GenSelectField;
