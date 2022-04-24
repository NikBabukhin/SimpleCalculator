import style from "./ResultOutput.module.css"
import React from "react";

type ResultOutputPropsType = {
    value: string,
    result: string,
}

export const ResultOutput: React.FC<ResultOutputPropsType> = (props) => {
    return (
        <div className={style.result__wrapper}>
            <span className={style.current__expression}>{props.value || '0'}</span>
            <span className={style.result}>{props.result || '0'}</span>
        </div>
    )
}