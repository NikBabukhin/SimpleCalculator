import {Button, Grid} from "@mui/material";
import React from "react";

export const ButtonsMemory = () => {

    const specialColor = {
        backgroundColor: "#2d3641"
    }

    return (
        <Grid
            item
            container
            md={3}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <Button variant="contained" size="large" fullWidth sx={specialColor}>MC</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="large" fullWidth sx={specialColor}>MR</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="large" fullWidth sx={specialColor}>M+</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" size="large"
                        sx={{padding: '8px 19px', backgroundColor: "#2d3641"}}>Del</Button>
            </Grid>
        </Grid>
    )
}