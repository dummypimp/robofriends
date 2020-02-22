import React from 'react'; // eslint-disable-next-line
import CardList from './CardList';
//state is what describes an app as an object and states can change according to input 
//and usually live in the parent component
//props are outcomes of a state
const SearchBox = ({searchfield, SearchChange}) =>{
    return(
        <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' 
        type='search' placeholder='Look up bots' 
        onChange = {SearchChange}/>
        </div>
    );
}

export default SearchBox;