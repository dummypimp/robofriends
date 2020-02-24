import React, { Component } from 'react';
import CardList from '../components/CardList'; // eslint-disable-next-line
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import { setSearchField, requestRobots } from '../actions';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) =>{
 return{ 
     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
     onRequestRobots: () => dispatch(requestRobots())
    }  
}

class App extends Component{
    // constructor(){ // NO NEED COMPDIDMOUNT REQUESTS ROBOTS 
    //     super()
    //     this.state = { // states are called smart components 
    //         robots: []
        
    //     }
    // }
    componentDidMount(){
        this.props.onRequestRobots();
    }

 
    render() {
        //cleaning up PRACTICE
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots =robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? //alt = robots.length === 0 ; it defaults to fales.using Turnary
            <h1>LOADING</h1> :
            (
                <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox SearchChange={onSearchChange}/>
                <Scroll> 
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/> 
                    </ErrorBoundry>
                </Scroll>
                </div>
            );
           
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
