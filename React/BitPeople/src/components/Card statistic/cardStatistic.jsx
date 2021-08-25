import React from 'react';
import { numberOfFemaleUsers, numberOfMaleUsers } from '../../services/cardStatisticComponentFunctions';
import './scss/cardStatistic.css';

export const CardStatistic = ({userData}) => {
    
    return (
        <div className="statistic">
            <div className="male">
                <p>Male:<span>{numberOfMaleUsers(userData)}</span></p>
            </div>

            <div className="female">
                <p>Female:<span>{numberOfFemaleUsers(userData)}</span></p>
            </div>
        </div>

    );
}