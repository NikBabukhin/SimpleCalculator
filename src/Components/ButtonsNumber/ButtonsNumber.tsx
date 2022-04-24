import {Button, Grid} from "@mui/material";
import '../../App.css';
import React from "react";

export const ButtonsNumber = () => {
    return (
        <Grid item container spacing={1} justifyContent="space-between" md={9}>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>1</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>2</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>3</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>4</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>5</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>6</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>7</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>8</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth>9</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" size="large" fullWidth>0</Button>
            </Grid>
        </Grid>
    )
}