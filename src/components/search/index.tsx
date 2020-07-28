import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {Props} from './interfaces';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {createStyles} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '20px 0px',
    },
  }),
);

const Search: React.FC<Props> = ({onChange, initialValue}) => {
  const classes = useStyles();
  const callChangeCallback = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const clickHandler = () => {
    callChangeCallback('');
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    callChangeCallback(event.currentTarget.value);
  };

  return (
    <TextField
      className={classes.root}
      variant="filled"
      fullWidth
      defaultValue={initialValue}
      onChange={changeHandler}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={clickHandler}>X</IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
