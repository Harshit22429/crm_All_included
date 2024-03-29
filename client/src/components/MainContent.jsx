import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Disposal from "./Disposal";

const MainContent = () => {
  const [leadsData, setLeadsData] = useState();
<<<<<<< HEAD
=======
  const { setAuth } = useAuth();
>>>>>>> 85749d3ec343bc9ce56af47f4bf386ba663c1162

  useEffect(() => {
    const getLeadsData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/customer/Maurya");
        const data = await res.data;
        setLeadsData(data);
      } catch (error) {
        // Handle errors
        console.log(error);
      }
    };
    getLeadsData();
  }, []);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
<<<<<<< HEAD
      <NavLink to="/Form">Home/From</NavLink>
=======
      <NavLink to="/Dash/Form">Home/From</NavLink>
      <Button sx={{ marginLeft: "5px" }} onClick={userSignOut}>
        Sign Out
      </Button>

>>>>>>> 85749d3ec343bc9ce56af47f4bf386ba663c1162
      {leadsData === undefined ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Username
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Phone No
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Sales Agent
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Project
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Comment
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leadsData.map((data) => (
                <TableRow
                  key={data._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": {
                      backgroundColor: "whitesmoke",
                    },
                  }}
                >
                  <TableCell align="center">{data.name}</TableCell>
                  <TableCell align="center">{data.phone}</TableCell>
                  <TableCell align="center">{data.salesAgent}</TableCell>
                  <TableCell align="center">{data.project}</TableCell>
                  <TableCell align="center">{data.comment}</TableCell>
                  <TableCell align="center">
                    <Disposal data_id={data.lead_id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};
export default MainContent;
