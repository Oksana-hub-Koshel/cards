import React from 'react';
import s from "./ResultLine.module.scss"

export const ResultLine = ({length}) => {
    return (
        <div className={s.results_line}>
            <p>Results: {length}</p>
            <hr/>
        </div>
    );
};
