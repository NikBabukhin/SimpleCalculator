import React from 'react';
import './App.css';
import {Container, Grid} from "@mui/material";
import {ResultOutput} from "./Components/ResultOutput/ResultOutput";
import {ButtonsNumber} from "./Components/ButtonsNumber/ButtonsNumber";
import {ButtonsMemory} from "./Components/ButtonsMemory/ButtonsMemory";
import {ButtonsActions} from "./Components/ButtonsActions/ButtonsActions";

function App() {
    return (
        <div className="App">
            <Container maxWidth="sm" sx={{
                border: '2px solid #c9d1d9',
                borderRadius: '5px',
                justifyContent: 'center',
                padding: "15px"
            }}>
                <Grid container spacing={4}>
                    <Grid item md={12}>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <ResultOutput/>
                        </Grid>
                    </Grid>
                    <Grid item md={8} container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          rowSpacing={2}
                    >
                        <ButtonsNumber/>
                        <ButtonsMemory/>
                    </Grid>
                    <ButtonsActions/>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
