import style from "./ResultOutput.module.css"

export const ResultOutput = () => {
    return (
        <div className={style.result__wrapper}>
            <input className={style.input}/>
            <span className={style.result}>135</span>
        </div>
    )
}