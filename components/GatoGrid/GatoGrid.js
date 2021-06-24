import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
const GatoGrid = (props) => {
  const {
      gridToRepresent = [
        ['','',''],
        ['','',''],
        ['','',''],
      ]
  } = props

    return (
          <Grid columns={3} celled className='GatoGrid'>
            {map(gridToRepresent, (row,i) => (
                <Grid.Row key={i}>
                  {map(row, (column,j) => (
                    <Grid.Column key={`${i}${j}`}>
                      { column === '' ? <Icon fitted /> : (column.toLowerCase() === 'x' ? <Icon fitted name='close' /> : <Icon fitted name='dot circle' />) }
                    </Grid.Column>
                  ))}
                </Grid.Row>
              )  
            )}
          </Grid>
    );
}
 
export default GatoGrid;