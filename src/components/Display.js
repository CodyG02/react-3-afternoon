import React, {Component} from 'react'
import Profile from './Profile'
import data from '../data'
class Display extends Component{
    constructor(){
        super()

        this.state={
            currentProfile: data[0],
            currentIndex: 0,
        }
    }

  

    moveForward(){
        let currentIndex = this.state.currentIndex
        this.setState({
            currentIndex: currentIndex +1,
            currentProfile: data[currentIndex +1]
        })
    }

    moveBack(){
        let currentIndex = this.state.currentIndex
        this.setState({
            currentIndex: currentIndex -1,
            currentProfile: data[currentIndex -1]
        })
    }
    


    render(){
        console.log(this.state.currentIndex)
        return (
            <div className='display'>
               
                  <Profile currentProfile={this.state.currentProfile}/>
                  <button onClick={() => this.moveBack()}>Previous</button>
                    <button onClick={() => this.moveForward()}>Next</button>
                  
             </div>
        )
    }

}

export default Display