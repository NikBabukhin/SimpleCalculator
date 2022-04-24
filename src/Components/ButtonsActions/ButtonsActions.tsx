import {Button, Grid} from "@mui/material";
import React from "react";

type ButtonsActionsPropsType = {
    currentValue: string,
    setResultHandler: () => void,
    clearValue: () => void,
    addSymbol: (currentSymbol: string) => void,
}

export const ButtonsActions: React.FC<ButtonsActionsPropsType> = (props) => {
    const addSymbol = (value: string) => {
        if (props.currentValue[props.currentValue.length - 1] !== value && props.currentValue && value !== '-') {
            props.addSymbol(value)
        }
        if (props.currentValue[props.currentValue.length - 1] !== value && value === '-') {
            props.addSymbol(value)
        }
    }

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
                <Button variant="contained" size="medium" fullWidth onClick={() => addSymbol('-')}>-</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth onClick={() => addSymbol('+')}>+</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth onClick={() => addSymbol('*')}>*</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" fullWidth onClick={() => addSymbol('/')}>/</Button>
            </Grid>
            <Grid item md={12}>
                <Button variant="contained" size="medium" color={'secondary'} fullWidth
                        onClick={props.setResultHandler}>=</Button>
            </Grid>
        </Grid>
    )
}