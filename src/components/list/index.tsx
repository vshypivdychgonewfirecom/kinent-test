import React from 'react';
import {Props} from './interfaces';
import {default as MaterialList} from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {createStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      overflow: 'auto',
      color: 'white',
      '& li:nth-child(odd)': {
        background: 'lightslategray',
      },
      '& li:nth-child(even)': {
        background: 'lightblue',
      },
    },
  }),
);

const List: React.FC<Props> = ({data = []}) => {
  const classes = useStyles();
  return (
    <Box maxHeight="600px" className={classes.root}>
      <MaterialList>
        {data.map((text: string, index: number) => (
          <ListItem key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </MaterialList>
    </Box>
  );
};

export default List;
