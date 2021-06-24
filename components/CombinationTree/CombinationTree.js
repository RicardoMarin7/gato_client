import { cloneDeep, map } from 'lodash';
import React from 'react';
import GatoGrid from '../GatoGrid'

const CombinationTree = ({firstMove}) => {
    const initialGrid = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]

    initialGrid[firstMove.row][firstMove.column] = 'x'

    const isFirstMove = (row, column)=>{
        if( row === firstMove.row && column === firstMove.column ){
            return true
        } 
            return false
    }

    const isAlreadyBusy = ( row, column, grid ) =>{
        if( grid[row][column] === ''){
            return false
        }

        return true
    }

    const grids = []

    const generateFirstLevelTree = ( grid ) =>{

        for (let row = 0; row < 3; row++) {
            let auxGrid
            for (let column = 0; column < 3; column++) {
                if(!isFirstMove(row,column)){
                    auxGrid = cloneDeep(grid)
                    auxGrid[row][column] = 'o'
                    grids.push(cloneDeep(auxGrid))
                }
            }
        }
    }

    generateFirstLevelTree(initialGrid)
    console.log(grids)

    return (
        <div className="Tree" >
            {map( grids, (grid, row) =>(
                <div className='board' key={`grid-${row}`}>
                    <h2>{`Tablero ${row}`}</h2>
                    <GatoGrid gridToRepresent={grid} /> 
                </div>
            ))}
        </div>
    );
}
 
export default CombinationTree;