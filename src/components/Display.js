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
        if(currentIndex === 24){
          this.setState({
            currentProfile: data[0],
            currentIndex: 0
          })  
        }else{
        this.setState({
            currentIndex: currentIndex +1,
            currentProfile: data[currentIndex +1]
        })
    }
    }

    moveBack(){
        let currentIndex = this.state.currentIndex
        if(currentIndex === 0){
          this.setState({
            currentProfile: data[24],
            currentIndex: 24
          })
        } else{
        this.setState({
            currentIndex: currentIndex -1,
            currentProfile: data[currentIndex -1]
        })
    }
    }
    // componentDidUpdate( prevProps, prevState) {
    //     if(prevState.currentIndex === 24){
    //         this.setState({
    //             currentProfile: data[0],
    //         currentIndex: 0,
    //         })
    //     }         else if(prevState.currentIndex === 0){
    //         this.setState({
    //             currentProfile: data[24],
    //             currentIndex: 24,
    //         })
    //     }
    // }


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