import React from 'react'
import axios from 'axios'




class Game extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: '',
      board: [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ]


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
        {this.state.board  &&  this.state.board.map((x, index) => {
          return(

          )
        })}
        </div>

      </div>




    )
  }
}
export default Game
