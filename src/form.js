import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

function Form() {
  
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    desc: 'hello',
    count: 0
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const increment = () => {
    setValues(prev => ({ ...values, count: prev.count + 1 }));
  }

  return (
    <div>
       <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={increment}>
          Add
      </Button>
    </div>
  );
}

export default Form;