import MiniVDrawer from "./MiniVDrawer";
import Notes from "./notes/Notes.jsx";
import * as React from "react";
import {Box} from "@mui/material";
import Bins from "./bin/Bins.jsx";
import Reminders from "./reminders/Reminders.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
    return(
        <Box style={{ display: 'flex', width: '100%' }}>
            <Router>
                <MiniVDrawer/>
                <Routes>
                    <Route path='/' element={<Notes />} />
                    <Route path='/reminder' element={<Reminders />} />
                    <Route path='/bin' element={<Bins />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default Home;