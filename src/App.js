import "./styles.css";
import { solveVoltorbFlip, print2D } from "./calculation.js";

export default function App() {
    // board: [
    //   [2, 0, 0, 3, 0],
    //   [1, 0, 0, 0, 0],
    //   [1, 1, 1, 1, 1],
    //   [1, 0, 0, 0, 0],
    //   [2, 0, 0, 0, 0]
    // ],
    const vBoard = {
        board: [
            [2, 0, 0, 3, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [2, 0, 0, 0, 0]
        ],
        rowSum: [107, 105, 5, 203, 204],
        colSum: [7, 104, 105, 106, 302],
        myRowSum: [0, 0, 0, 0, 0],
        myColSum: [0, 0, 0, 0, 0]
    };
    let ans = solveVoltorbFlip(vBoard);
    print2D(ans);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
