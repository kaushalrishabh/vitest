import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

export const AppProviders = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            { children }
        </ThemeProvider>
    )
}