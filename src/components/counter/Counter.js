// import React from "react";
// import "./Counter.css";
// if (setCount(initialCount) <= -1) {
//   initialCount = 0;
// }

// function Counter({ initialCount = 0 }) {
//     // var initialCount = 0;
//     // const [state, setState] = useState(initialState);
//     // setState(newState);
//     const [count,  setCount] = useState(initialCount);
// //   setState(newState);
// //   console.log(count);
// //   console.log(initialCount );
// //   console.log(nextCount);
// //   console.log(prevCount);

//   return (
//     <div className="nav-bar">
//       Count: {count}
//       <div className="all-buttons">
//         <button className="set-count" onClick={() => setCount(initialCount)}>
//           Reset
//         </button>
//         <button
//           className="prev-count"
//           onClick={() => setCount((prevCount) => prevCount - 1)}
//         >
//           -
//         </button>
//         <button
//           className="next-count"
//           onClick={() => setCount((nextCount) => nextCount + 1)}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );

// }
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   if (count = -1) {
//       count = 0;
//   }

//   render() {
//     return (
//       <div className="nav-bar">
//         <p className="text">You clicked {this.state.count} times</p>

//         <button
//           className="button-1"
//           onClick={() => this.setState({ count: this.state.count - 1 })}
//         >
//           -
//         </button>
//         <button
//           className="button-1"
//           onClick={() => this.setState({ count: (this.state.count = 0) })}
//         >
//           reset
//         </button>
//         <button
//           className="button-1"
//           onClick={() => this.setState({ count: this.state.count + 1 })}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }
// class Counter extends React.Component {
//   state = { count: 0 };

//   handleIncrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   handleReset = () => {
//     this.setState((prevState) => ({
//       count: (prevState.count = 0),
//     }));
//   };

//   handleDecrement = () => {
//     if (this.state.count > 0) {
//       this.setState((prevState) => ({
//         count: prevState.count - 1,
//       }));
//     }
//   };

//   render() {
//     return (
//       <div className="nav-bar">
//         <h4 className="counter-text">Counter: {this.state.count}</h4>
//         <button className="prev-count" onClick={this.handleDecrement}>
//           -
//         </button>
//         <button className="set-count" onClick={this.handleReset}>
//           Reset
//         </button>
//         <button className="next-count" onClick={this.handleIncrement}>
//           +
//         </button>
//       </div>
//     );
//   }
// }


// export default Counter;
