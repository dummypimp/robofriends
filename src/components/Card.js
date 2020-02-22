import React from 'react';

const Card = ({ name , email , id }) => {  //done to keep it clean.
    //const { name , email , id } = props; 
    // this is destructuring // can remove props. from string templates
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
        <img alt='idphoto' src={`https://robohash.org/${id}?200x200`} />
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;