import { TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import styles from '../../styles/SearchPanel.module.css';

const SearchPanel: React.FC = () => {
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
    <form className={styles.form} onSubmit={submitHandler}>
      <TextField
        value={name}
        className={styles.searchTextField}
        label="Search by name"
        onChange={nameTextFieldChangeHandler}
      />
      <FormControl className={styles.genderSelect}>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select value={gender} labelId="gender-select-label" onChange={genderSelectChangeHandler}>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        value={nationality}
        className={styles.searchTextField}
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
