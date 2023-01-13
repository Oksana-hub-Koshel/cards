import React from 'react';

export const ResultLine = ({length}) => {
    return (
        <div className="results_line">
            <p>Results: {length}</p>
            <hr/>
        </div>
    );
};
