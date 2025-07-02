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
import { useNavigate } from "react-router-dom";
import postService from "../../Services/PostService/PostService";
import type { IPost } from "../../Services/PostService/PostModel";

const PostList = () => {
  const [userList, setUserList] = useState<IPost[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    postService.getAll().then((res) => {
      if (res.status === 200 || res.status === 201) {
        setUserList(res.data ?? []);
      }
    });
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
        height: "100vh",
      }}
    >
      <Typography variant="h4" className="flex text-center justify-center">
        PostList
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
                UserId
              </TableCell>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
                style={{ width: "400px" }}
              >
                Title
              </TableCell>
              <TableCell
                align="center"
                className="!text-lg !text-blue-700 !font-bold"
                style={{ width: "550px" }}
              >
                Body
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
            {userList.length > 0 &&
              userList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.userId}</TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.body}</TableCell>

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
                      //   onClick={() => {
                      //     userService.deleteUser(row.id);
                      //     setUserList(userService.allUsers());
                      //   }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            {userList.length === 0 && (
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  {" "}
                  No Record Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PostList;
