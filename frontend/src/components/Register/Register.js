import React from "react";
import { Stack, Typography, TextField, Button } from "@mui/material";
import '@fontsource/roboto/500.css'

class LogInButton extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

}

export default function register() {
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
                <Typography variant="h5" color="#FD2D01">Créer mon compte :</Typography>
                <TextField id="standard-basic" label="e-mail" variant="standard" size="normal" fullWidth />
                <TextField id="standard-basic" label="password" variant="standard" size="normal" fullWidth />
                <Button variant="contained" sx={{marginTop:'25px!important'}}>Create</Button>
            </Stack>
    )
}