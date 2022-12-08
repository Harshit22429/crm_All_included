import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CustomerFrom = () => {
  let navigate = useNavigate();
<<<<<<< HEAD
=======
  const [salesAgentData, setSalesAgentData] = useState();
  const [currentSalesAgent, setCurrentSalesagent] = useState();
  const { setAuth } = useAuth();

  const handleChange = (event) => {
    setCurrentSalesagent(event.target.value);
  };
  useEffect(() => {
    const getSalesAgentData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/user/admin/getAllAgentName/TL1"
        );
        const data = await res.data;
        setSalesAgentData(data);
        console.log(data);
      } catch (error) {
        // Handle errors
        console.log(error);
      }
    };
    getSalesAgentData();
  }, []);
>>>>>>> 85749d3ec343bc9ce56af47f4bf386ba663c1162
  const coustomerInfo = (e) => {
    e.preventDefault();
    let newCustomer = {
      name: e.target.userName.value,
      phone: e.target.phoneNo.value,
      salesAgent: e.target.salesAgent.value,
      project: e.target.project.value,
      comment: e.target.comment.value,
    };
    sendCoustomerInfo(newCustomer);
  };

  const sendCoustomerInfo = async (newCustomer) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/customer/admin",
        newCustomer
      );
      console.log(res);
      navigate("/");
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };

  return (
    <Box>
      <Link to="/">Home</Link>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={coustomerInfo}
      >
        <TextField
          label="Name"
          type={"text"}
          variant="outlined"
          name="userName"
        />
        <TextField
          type={"text"}
          label="Phone"
          variant="outlined"
          name="phoneNo"
        />
        <TextField
          type={"text"}
          label="Sales Agent"
          variant="outlined"
          name="salesAgent"
        />
        <TextField
          type={"text"}
          label="Project"
          variant="outlined"
          name="project"
        />
        <TextField label="Comment" multiline rows={4} name="comment" />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerFrom;
