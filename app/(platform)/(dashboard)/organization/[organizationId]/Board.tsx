import React from 'react'

interface BoardProps{
    title: string,
    id: string
}
const Board = ({id, title}: BoardProps) => {
    return (
        <div >
            Board title :{title}
            <div>
                Boardid: {id}
            </div>
        </div>
    )
}

export default Board
