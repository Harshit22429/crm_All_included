import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

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
  return (
    <Box>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
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
                <MenuItem value={10}>Call Back</MenuItem>
                <MenuItem value={20}>Meeting</MenuItem>
                <MenuItem value={30}>Final Negotiation</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Disposal;
