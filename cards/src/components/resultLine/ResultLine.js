import React from 'react';
import s from "./ResultLine.module.css"

export const ResultLine = ({length}) => {
    return (
        <div className={s.results_line}>
            <p>Results: {length}</p>
            <hr/>
        </div>
    );
};
