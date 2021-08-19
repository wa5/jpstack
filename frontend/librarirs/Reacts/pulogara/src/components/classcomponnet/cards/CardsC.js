import { Component } from "react";
import Akshita from "./Akshita";

class CardsC extends Component{
constructor(){
super()
this.state={
    count:0,
    show:true,
    rname:"ifa-restrount"
}
console.log("customer came nfirst life sycle method");
}


componentDidMount(){
    console.log("customer taken the seat");
}

componentDidUpdate(preProps,preStates){
console.log("customer has given orders",`prious order:${preStates.count} : ${this.state.count}`)
}

shouldComponentUpdate(){
    console.log("give the food")
    return true
}




render(){
console.log("im monitoring u")

return(
<>

<h1>{this.state.count}</h1>
    <button onClick={()=>{this.setState({count:this.state.count+1})}}>click me</button>
    <h1>button increment concep </h1>

    <h2>

        
        {
            this.state.show==true ?<Akshita/>:(<span>{this.state.rname}</span>)
        }
    </h2>
    <button   onClick={()=>{this.setState({show:!this.state.show})}}>hide and show</button>
    </>
)
}

}

export default CardsC