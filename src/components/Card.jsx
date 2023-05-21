import './Card.css';

const statusColor = {
    ready: 'pink',
    progress: 'lightYellow',
    review: 'gray',
    completed: 'green'
}
export const Card = ({ id, name, desc,status, onDragStart }) => {

    const handleDragEnter = (event) => {
        event.preventDefault();
    }

    return (
        <div className="card"
             style = {{ backgroundColor: statusColor[status] }}
             id={id}
             onDragStart={(e) => onDragStart(e, id, status)}
             onDragEnter = {handleDragEnter}
             draggable
        >
           <div>
               <span className="card-title">{name}</span>
           </div>
            <div>
                <span className="card-description">{desc}</span>
            </div>
        </div>
    )
}