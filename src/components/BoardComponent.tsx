import React, { useState } from 'react'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'

interface IBoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: React.FC<IBoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell)
    }
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map(cell => (
            <CellComponent
              key={cell.id}
              cell={cell}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
              click={click}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BoardComponent
