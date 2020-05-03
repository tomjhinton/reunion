import React from 'react'
import axios from 'axios'




class Game extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''


    }
    this.componentDidMount = this.componentDidMount.bind(this)






  }


  componentDidMount(){

  }

  componentDidUpdate(){



  }





  render() {
    console.log(this.state)


    return (
      <div className="body">
        <div className='title'>

        </div>

      </div>




    )
  }
}
export default Game
