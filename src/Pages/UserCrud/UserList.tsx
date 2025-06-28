import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import userService from "../../Services/UserService";
import type { IUser } from "../../Services/UserModel";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const UserList = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    setUserList(userService.allUsers());
  }, []);

  const handleAdd = () => {
    navigate("/user/add");
  };

  return (
    <Box
      sx={{
        padding: "25px",
        border: "1px solid black",
        backgroundColor: "gray",
      }}
    >
      <Typography variant="h4" className="flex text-center justify-center">
        UserList
      </Typography>
      <Button
        onClick={handleAdd}
        variant="outlined"
        className="!py-2 !bg-amber-50 !border-2 !border-blue-500 !text-xl !mb-2 !px-5"
      >
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="!bg-amber-200">
            <TableRow>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
              >
                Id
              </TableCell>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
              >
                UserName
              </TableCell>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
              >
                Email
              </TableCell>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
              >
                DOB
              </TableCell>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.userName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  {moment(row.dob).format("DD MMM yyyy")}
                </TableCell>
                <TableCell align="center" className="flex">
                  <Button
                    variant="outlined"
                    type="button"
                    onClick={() => navigate(`/user/${row.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    type="button"
                    sx={{ marginLeft: "10px" }}
                    onClick={() => {
                      userService.deleteUser(row.id);
                      setUserList(userService.allUsers());
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
