const app = document.getElementById("app");

const Counter = () => {
  const [value, setValue] = React.useState(0);
  const decrease = () => setValue(value - 1);
  const increase = () => setValue(value + 1);
  const reset = () => setValue(0);

  return (
    <div
      style={{
        margin: "100px 0",
        backgroundColor: "salmon",
        padding: "10px",
        maxWidth: "500px",
      }}
    >
      <div>
        <h1>Counter</h1>
      </div>

      <div>
        <h1>{value}</h1>
      </div>

      <div>
        <button onClick={decrease}>Decrease</button>
        <button style={{ margin: "0 30px" }} onClick={increase}>
          Increase
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

const App = () => {
  const [turn, setTurn] = React.useState("X");

  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [winner, setWinner] = React.useState(null);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const Cell = ({ index, value, handleClick }) => {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
        {value}
      </div>
    );
  };

  const Check = (board) => {
    for (let line of lines) {
      const [a, b, c] = line;
      console.log(board);
      if (board[a] && board[a] == board[b] && board[a] == board[c]) {
        return turn;
      }
    }
  };

  const handleClick = (index) => {
    if (winner != null || board[index] != null) return;
    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);

    const win = Check(newBoard);
    if (win) {
      setWinner(win);
    } else {
      setTurn(turn == "X" ? "O" : "X");
    }
  };

  const Reset = () => {
    setTurn("X");
    setWinner(null);
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="container">
      <div className="header">
        <h1>{winner ? "winner" + winner : "turn:" + turn}</h1>
        {(winner || board.every(Boolean)) && <button onClick={Reset}>New Game</button>}
      </div>
      <div className="board">
        <div className="row">
          <Cell index={0} value={board[0]} handleClick={handleClick} />
          <Cell index={1} value={board[1]} handleClick={handleClick} />
          <Cell index={2} value={board[2]} handleClick={handleClick} />
        </div>
        <div className="row">
          <Cell index={3} value={board[3]} handleClick={handleClick} />
          <Cell index={4} value={board[4]} handleClick={handleClick} />
          <Cell index={5} value={board[5]} handleClick={handleClick} />
        </div>
        <div className="row">
          <Cell index={6} value={board[6]} handleClick={handleClick} />
          <Cell index={7} value={board[7]} handleClick={handleClick} />
          <Cell index={8} value={board[8]} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

//ReactDOM.render(<App />, app);
