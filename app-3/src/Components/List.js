// import React, {Component} from 'react'

// export default class List extends Component {
//     constructor(){
//         super()
//         this.state= {
//             listArr : [],
//             userInput : ''
//         }
//             }
//     handleChange = (e) => {
//         this.setState({
//             userInput: e.target.value
//         })
//     }
    
//     enterArrFn = ()=> {
//         this.setState({
//         listArr  : [...this.state.listArr, this.state.userInput], 
//         userInput: ''
//         })
//     }
//     clear = ()=> {
//         this.setState({
//             listArr:[]
//         })
//     }
//     search = ()=> {
//         this.setState({
            
//         })
//     }
//     render(){
//         return(
//             <div>
//            <input type="text" value={this.state.userInput} onChange= {this.handleChange}  />

//            <button onClick= {this.enterArrFn}>enter</button>
//            <button onClick = {this.search}>search</button>
//            <button onClick= {this.clear}>clear</button>
           
//               <ul>
//                  <li>{listArr.map()}</li>
//               </ul>
//             </div>
//         )
//     }
// }
