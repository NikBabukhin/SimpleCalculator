import React, {useState, KeyboardEvent} from 'react';
import './App.css';
import {Button, Container, Grid} from "@mui/material";
import {ResultOutput} from "./Components/ResultOutput/ResultOutput";
import {ButtonsNumber} from "./Components/ButtonsNumber/ButtonsNumber";
import {ButtonsMemory} from "./Components/ButtonsMemory/ButtonsMemory";
import {ButtonsActions} from "./Components/ButtonsActions/ButtonsActions";
import BackspaceIcon from '@mui/icons-material/Backspace';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function App() {

    const [currentValue, setCurrentValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const clearValue = () => {
        setCurrentValue('')
        setResult('')
    };
    const clearLastSymbol = () => setCurrentValue(currentValue.substring(0, currentValue.length - 1));

    const setResultHandler = () => {
        setResult(eval(currentValue).toString());
        setCurrentValue(result);
    };
    const addSymbol = (currentSymbol: string) => {
        setCurrentValue(currentValue + currentSymbol)
    };


    const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        switch (event.code) {
            case 'Digit1':
            case 'Numpad1':
                addSymbol('1');
                break;
            case 'Digit2':
            case 'Numpad2':
                addSymbol('2');
                break;
            case 'Digit3':
            case 'Numpad3':
                addSymbol('3');
                break;
            case 'Digit4':
            case 'Numpad4':
                addSymbol('4');
                break;
            case 'Digit5':
            case 'Numpad5':
                addSymbol('5');
                break;
            case 'Digit6':
            case 'Numpad6':
                addSymbol('6');
                break;
            case 'Digit7':
            case 'Numpad7':
                addSymbol('7');
                break;
            case 'Digit8':
            case 'Numpad8':
                addSymbol('8');
                break;
            case 'Digit9':
            case 'Numpad9':
                addSymbol('9');
                break;
            case 'Digit0':
            case 'Numpad0':
                addSymbol('0');
                break;
            case 'Equal':
            case 'NumpadAdd':
                if (!['+', '-', '*', '/'].includes(currentValue[currentValue.length - 1]) && currentValue) {
                    addSymbol('+');
                }
                break;
            case 'Backspace':
                clearLastSymbol();
                break;
            case 'NumpadSubtract':
            case 'Minus':
                if (!['+', '-', '*', '/'].includes(currentValue[currentValue.length - 1])) {
                    addSymbol('-');
                }
                break;
            case 'NumpadMultiply':
                if (!['+', '-', '*', '/'].includes(currentValue[currentValue.length - 1]) && currentValue) {
                    addSymbol('*');
                }
                break;
            case 'NumpadDivide':
                if (!['+', '-', '*', '/'].includes(currentValue[currentValue.length - 1]) && currentValue) {
                    addSymbol('/');
                }
                break;
            case 'Enter':
            case 'NumpadEnter':
                setResultHandler();
                break;
            default:
                return;
        };
    }

    return (
        <div className="App" onKeyDown={onKeyDownHandler} tabIndex={0}>
            <Container maxWidth="sm" sx={{
                border: '2px solid #c9d1d9',
                borderRadius: '5px',
                justifyContent: 'center',
                padding: "15px",
                position: 'relative'
            }}>
                <Grid container spacing={4}>
                    <Grid item md={12}>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="center">
                            <ResultOutput value={currentValue} result={result}/>
                            <div className="delete-button-wrapper">
                                <Button variant="text" endIcon={<BackspaceIcon/>} onClick={clearLastSymbol}/>
                                <Button variant="text" endIcon={<DeleteForeverIcon/>} onClick={clearValue}/>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item md={8} container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          rowSpacing={2}
                    >
                        <ButtonsNumber addSymbol={addSymbol}/>
                        <ButtonsMemory/>
                    </Grid>
                    <ButtonsActions setResultHandler={setResultHandler} addSymbol={addSymbol} clearValue={clearValue}
                                    currentValue={currentValue}/>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
