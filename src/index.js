import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay'
import Spinner from  './spinner'
class App extends React.Component{

    state={latti:null, errorMessage:""}
    // constructor(props){
    //     super(props);
    //     //THIS IS ONLY TIMW WHEN WE DIRECT ASSSIGN
    //     this.state={latti:null, errorMessage:""}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
            this.setState({ latti:position.coords.latitude})
           
            },
             (err)=>{
                 this.setState({ errorMessage:err.message})
             }
        )
    }
    //renderContent when there is so many return() in render
    renderContent(){
        if(this.state.errorMessage && !this.state.latti){
            return <div>latitude:{this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.latti){
            return <SeasonDisplay latti={this.state.latti} />
        }
        return <Spinner/>
    }
    render(){
        return(
       <div className="Border red"> 
           {this.renderContent()}
       </div>
        )
    }
}
    
ReactDOM.render(<App />,document.querySelector('#root'))