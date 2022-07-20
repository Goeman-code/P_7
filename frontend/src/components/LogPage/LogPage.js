import React, {useState} from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import '@fontsource/roboto/500.css'


const Login = () => {
    const [form, setForm] = useState({email: "", password: ""})
    const [error, setError] = useState({email: "", password: ""})

    const handleButtonClick = () => {
        console.log(form);
        // submit form
    }

    const handleChangeEmail = (event) => {
        const email = event.target.value
        if (email !== undefined) {
            // regex pour test email

            setError({...error, email: "Email non valide"})
            return;
        }

        setError({...error, email: ""})
        setForm({...form, email: event.target.value})
    }

    const handleChangePassword = (event) => {
        setForm({...form, password: event.target.value})
    }


    return (
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                paddingLeft="5%"
                paddingRight="5%"
                paddingTop="3rem"
                width="20%"
            >
                <Typography variant="h5" color="#FD2D01">Connexion :</Typography>
                <TextField
                    error={error.email.length > 0}
                    helperText={error.email}
                    onChange={handleChangeEmail}
                    id="standard-basic"
                    label="e-mail"
                    variant="standard"
                    size="normal"
                    fullWidth />
                <TextField
                    onChange={handleChangePassword}
                    id="standard-basic"
                    label="password"
                    variant="standard"
                    size="normal"
                    fullWidth />
                <Button variant="contained" sx={{marginTop:'25px!important'}} onClick={handleButtonClick}>Log in</Button>
            </Stack>
    )
}

export default Login;