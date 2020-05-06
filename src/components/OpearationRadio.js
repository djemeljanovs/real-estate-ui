import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/Select';

export function OperationRadio() {
    const [value, setValue] = useState(null);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio />} label="Rent" />
            <FormControlLabel value="male" control={<Radio />} label="Sale" />
        </RadioGroup>
    </FormControl>
    );
}