import "./styles.css";
import { solveVoltorbFlip, print2D } from "./calculation.js";

export default function App() {
  let rowSum = [107, 105, 5, 203, 204];
  let colSum = [7, 104, 105, 106, 302];
  let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  board = [
    [2, 0, 0, 3, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [2, 0, 0, 0, 0]
  ];

  let sols = [];
  let ans = solveVoltorbFlip(board, rowSum, colSum, sols);
  console.log("Solved! " + sols.length + " total solutions found.");
  print2D(ans);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
