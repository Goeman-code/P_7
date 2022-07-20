import "./App.css";
import {Routes, Route} from "react-router-dom"
import Banner from "./components/Banner/Banner";
import LogPage from "./components/LogPage/LogPage"
import Register from "./components/Register/Register"
import { Stack } from "@mui/material";


function App() {

  return (
   <Stack spacing={2}>
    <Banner />
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
   </Stack>    
  );

}

export default App;

/* {values.map(v => (
  <Paper><Typography textAlign="center" variant="h1">{v}</Typography></Paper>
))} */