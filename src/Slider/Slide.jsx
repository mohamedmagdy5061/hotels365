import React, { Component } from 'react';
import "./Slide.css"


class Slide extends Component {
state={
  counter: 0,
  min:0,
  max:0,
  data:[],
}

componentDidMount(){
  this.setState({max:this.props.photos.length})
  // this.setState({data:this.props.photos})
}

countUp=()=>{
  const {max} = this.state
  
  this.setState(prevState => {
    const count = prevState.counter
    if(count < max-1 ){
      return {counter:count+1}
    } 

  })
}

countDown=()=>{
  const {min} = this.state

  this.setState(prevState => {
    const count = prevState.counter
    if(count > min ){
      return {counter:count-1}
    } 
  })
}



  render(){
    const {counter,max}=this.state
    
    return(
      <div>
      <div className="slide__photo__big">
        <img src={this.props.photos[`${counter}`].photo} alt="hotel-img"/>
      </div>

      <div className={`slide__photo__thumbnail slider-active-${counter}`}>
        <div className="slider-wraper" style={{transform: `translateX(-${counter*(100/this.state.max)}%)`}}>
          {this.props.photos.map((ele,i)=><img id={`card-${i}`} className="slider__img" src={ele.thumbnail} alt="hotel-img"/>)}
        </div>
      </div>


      <div className="slide__photo__range" >
        <button className="slide__photo__range__btn"  disabled={counter<=0} onClick={this.countDown}>&laquo;</button>
        <input type="range" min={0} max={this.props.photos.length} onChange={()=>{this.handelRange(this)}} value={ counter === max-1 ? (counter+1):counter}/>
        <button className="slide__photo__range__btn" disabled={counter>=max-1}  onClick={this.countUp}>&raquo;</button>
      </div>
      </div>
    )
  }
}


export default Slide