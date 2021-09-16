import React from 'react';
import GlobalStats from './GlobalStats';
import CountryStats from './CountryStats';
import Graphline from './Graphline';

export default function InfoPanel({currentScreen}) {
    
    if(currentScreen === 0){
        return(
            <GlobalStats/>
        );
    }
    else if(currentScreen === 1){
        return(
            <CountryStats/>
        );
    }
    else if(currentScreen === 2){
        return(
            <div className="graph">
                <Graphline/>
            </div>
        );
    }
}
