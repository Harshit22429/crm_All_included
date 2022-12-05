import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "70%",
  bgcolor: "background.paper",
  border: "1px solid grey",
  boxShadow: 2,
  p: 4,
  borderRadius: "5px",
  overflow: "scroll",
};

const Disposal = ({ data_id }) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [despositionList, setDespositionList] = useState();

  useEffect(() => {
    const getLeadsData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/desposition/${data_id}`
        );
        const data = await res.data;
        setDespositionList(data);
      } catch (error) {
        // Handle errors
        console.log(error);
      }
    };
    getLeadsData();
  }, []);
  console.log(despositionList);
  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      {despositionList === undefined ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& > .MuiBackdrop-root": {
              backgroundColor: "transparent",
              backdropFilter: "blur(0.3px)",
            },
          }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sales Lead Disposal --{data_id}
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }}>
              Progress
            </Button>
            <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <h4>Disposition</h4>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Disposition
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Disposition"
                >
                  <MenuItem value={10}>Tele Metting Done</MenuItem>
                  <MenuItem value={20}>Call Back</MenuItem>
                  <MenuItem value={30}>Final Negotiation (FN) Done</MenuItem>
                  <MenuItem value={30}>Final Negotiation (FN) Planned</MenuItem>
                  <MenuItem value={30}>
                    Final Negotiation (FN) Postponed
                  </MenuItem>
                  <MenuItem value={30}>Metting (F2F) Done</MenuItem>
                  <MenuItem value={30}>Metting (F2F) Planned</MenuItem>
                  <MenuItem value={30}>Metting (F2F) Postponed</MenuItem>
                  <MenuItem value={30}>Not Contactable</MenuItem>
                  <MenuItem value={30}>Not Interested</MenuItem>
                  <MenuItem value={30}>Site Vist (SV) Done</MenuItem>
                  <MenuItem value={30}>Site Vist (SV) Planned</MenuItem>
                  <MenuItem value={30}>Site Vist (SV) Postponed</MenuItem>
                </Select>
              </FormControl>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: 200 }}
              />
              <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }} align="center">
                        Disposition
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="center">
                        Sub Disposition
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="center">
                        Comment
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }} align="center">
                        Date
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {despositionList.map((data) => (
                      <TableRow
                        key={data._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          "&:hover": {
                            backgroundColor: "whitesmoke",
                          },
                        }}
                      >
                        <TableCell align="center">{data.userId}</TableCell>
                        <TableCell align="center">{data.desposition}</TableCell>
                        <TableCell align="center">{data.comment}</TableCell>
                        <TableCell align="center">
                          {data.despositionAt}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" sx={{ marginTop: "80px" }}>
                Submit
              </Button>

              <Button
                variant="contained"
                color="error"
                sx={{ marginTop: "80px", marginLeft: "5px" }}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};

export default Disposal;
