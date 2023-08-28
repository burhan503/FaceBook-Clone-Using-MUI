import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Add from "./components/Add";

function App() {
    const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        }
    })

    return ( <
        ThemeProvider theme = { darkTheme } >
        <
        Box bgcolor = { "background.default" }
        color = { "text.primary" } >
        <
        Navbar / >
        <
        Stack direction = "row"
        spacing = { 2 }
        justifyContent = { "space-evenly" } >
        <
        Sidebar setMode = { setMode }
        mode = { mode }
        / > < 
        Feed / >
        <
        Rightbar / >
        <
        Add / >
        <
        /Stack> < /
        Box >
        <
        /ThemeProvider>
    );
}

export default App;