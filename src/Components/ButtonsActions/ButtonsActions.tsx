import {Button, Grid} from "@mui/material";
import React from "react";

export const ButtonsActions = () => {
    return (
        <Grid
            item
            container
            md={4}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
        >
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth>-</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth>+</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth>*</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth>/</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" color={'secondary'} fullWidth>=</Button>
            </Grid>
        </Grid>
    )
}