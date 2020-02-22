import React from 'react';// eslint-disable-next-line
import { robots } from './robots';
import Card from './Card';

const CardList = ({ robots }) =>{
    const cardComponent = robots.map((users, i) => {
        return ( <Card 
            key ={i}
            id={robots[i].id}
            name={robots[i].name} 
            email={robots[i].email}
             />)
    })
    return(
        <div>
            { cardComponent }
        </div>
    );
}

export default CardList;