import { TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    height: '70px',
    backgroundColor: '#edf3f3',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '220px',
      flexDirection: 'column',
      marginTop: '0',
    },
  },
  textField: {
    width: '260px',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  formControl: {
    width: '100px',
    [theme.breakpoints.down('sm')]: {
      width: '140px',
    },
  },
}));

const SearchPanel: React.FC = () => {
  const classes = useStyles();

  const [name, setName] = useState('');

  const [gender, setGender] = useState('');

  const [nationality, setNationality] = useState('');

  const nameTextFieldChangeHandler = (e: React.ChangeEvent<{ value: string }>) => {
    setName(e.target.value);
  };

  const genderSelectChangeHandler = (e: React.ChangeEvent<{ value: string }>) => {
    setGender(e.target.value);
  };

  const nationalityTextFieldChangeHandler = (e: React.ChangeEvent<{ value: string }>) => {
    setNationality(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <TextField
        value={name}
        className={classes.textField}
        label="Search by name"
        onChange={nameTextFieldChangeHandler}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select value={gender} labelId="gender-select-label" onChange={genderSelectChangeHandler}>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        value={nationality}
        className={classes.textField}
        label="Search by nationality"
        onChange={nationalityTextFieldChangeHandler}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchPanel;
