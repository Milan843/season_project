import './seasonDisplay.css'
import React from "react";

const seasonConfig={
    summer:{
        text:"lets hit the beach",
        iconName:"sun"
    },
    winter:{
        text:"burr it is cold",
        iconName:"snowflake"
    }
}

const getSeason=(latti,month)=>{
    if(month>2 && month<9){
        return latti>0 ? "summer":"winter";
    }else{
        return latti>0 ? "winter":"summer"
    }
}
const SeasonDisplay=props=>
{
    const season=getSeason(props.latti,new Date().getMonth())
    const { text, iconName}=seasonConfig[season]
// console.log(season)
// const text=season==="winter" ?"Burr its winter":"OHH its hot";
// const icon=season==="winter" ?"snowflake": "sun"
// console.log(icon)
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text} </h1>
        <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}
export default SeasonDisplay;