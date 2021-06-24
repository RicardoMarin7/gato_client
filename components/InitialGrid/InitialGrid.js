import React from 'react';
import { Grid, Icon, Button} from 'semantic-ui-react'
import { map } from 'lodash'

const InitialGrid = ({setFirstMove}) => {
    const grid = [
        ['','',''],
        ['','',''],
        ['','',''],
    ]

    const madeFirstMove = (row,column) =>{
        setFirstMove({
            row,
            column
        })
    }
    
    return (
        <div className="GridContainer">
            <h1>Haz tu primer movimiento<span>!</span></h1>
            <Grid columns={3} celled className='InitialGrid'>
                {map(grid, (row,i) => (
                    <Grid.Row key={i}>
                    {map(row, (column,j) => (
                        <Grid.Column key={`${i}${j}`}>
                            <Button animated='fade'>
                                <Button.Content hidden onClick={()=> madeFirstMove(i,j)}><Icon name='close' /></Button.Content>
                                <Button.Content visible>
                                    
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                    ))}
                    </Grid.Row>
                )  
                )}
            </Grid>
        </div>
    );
}
 
export default InitialGrid;