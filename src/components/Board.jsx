import {Card} from "./Card";
import './Board.css';
import {useState} from "react";

export const Board = ({ data }) => {

    const [board, setBoard] = useState(data);

    const renderLane = ( status ) => {
        const tasks = board[status];
        return (
            <div className="lane">
                {Object.keys(tasks).map(task =>
                    <Card id={task}
                          name={tasks[task].name}
                          status={status}
                          desc={tasks[task].desc}
                          onDragStart={onDragStart}
                    />)}
            </div>
        )
    }

    const onDragStart = (event, id, status) => {
        console.log(id, status);
        event.dataTransfer.setData("id", id);
        event.dataTransfer.setData("status", status);
    }

    const onDrop = (event, newStatus) => {
        const id = event.dataTransfer.getData("id");
        const oldStatus = event.dataTransfer.getData("status");

        const newBoard = {...board};
        const tasksFrom = newBoard[oldStatus];
        const tasksTo = newBoard[newStatus];
        const newTask = {...tasksFrom[id], status: newStatus};
        newBoard[newStatus] = { ...tasksTo, newTask};
        delete newBoard[oldStatus][id];

        setBoard(newBoard);
    }

    const onDragOver = (event) => {
        event.preventDefault();
    }

    return (
        <div className="board">
            {
                Object.keys(board).map(key => {
                    return (
                        <div className="lane" onDrop={(e) => onDrop(e, key)} onDragOver={onDragOver}>
                            {renderLane(key)}
                        </div>
                    )
                })
            }
        </div>
    )
}