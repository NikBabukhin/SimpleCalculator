import {Button, Grid} from "@mui/material";
import '../../App.css';
import React from "react";

type ButtonsNumberPropsType = {
    addSymbol: (currentSymbol: string) => void,
}

export const ButtonsNumber: React.FC<ButtonsNumberPropsType> = (props) => {

    return (
        <Grid item container spacing={1} justifyContent="space-between" md={9}>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('1')}>1</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('2')}>2</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('3')}>3</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('4')}>4</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('5')}>5</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('6')}>6</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('7')}>7</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('8')}>8</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('9')}>9</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" size="large" fullWidth onClick={() => props.addSymbol('0')}>0</Button>
            </Grid>
        </Grid>
    )
}