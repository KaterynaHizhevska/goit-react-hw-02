import s from "./Options.module.css";

const Options = ({ updateValues, total, resetValues }) => {
    return (
        <div className={s.container}>
            <button className={s.button} onClick={() => {updateValues('good')}}>Good</button>
            <button onClick={() => {updateValues('neutral')}}>Neutral</button>
            <button onClick={() => {updateValues('bad')}}>Bad</button>
            {total > 0 && <button onClick={resetValues}>Reset</button>}
        </div>
    );
};

export default Options;