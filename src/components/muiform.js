import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import Select from '@mui/material/Select';
import { Field, Form, Formik , ErrorMessage} from "formik";
import { object, string } from "yup";
import  FormControl from '@mui/material/FormControl';
import  InputLabel  from '@mui/material/InputLabel';
import  MenuItem from '@mui/material/MenuItem';




const options = [
  { value: 'India', label: 'India' },
  { value: 'Uk', label: 'Uk' },
  { value: 'America', label: 'America' },
];
const options2 = [
  { value: 'Cricket', label: 'Cricket' },
  { value: 'Music', label: 'Music' },
  { value: 'Travelling', label: 'Travelling' },
];


const initalValues = {
  email: "",
  name: "",
  country:  "",
  picked:"",
  hobbies:"",
};

const MaterialForm = () => {
  return (
    <div className="MaterialForm">
      <Typography variant="h4">
        React Material From Using Formik 
      </Typography>
      <Formik
        initialValues={initalValues}
        validationSchema={object({
          email: string().required("Please enter email").email("Invalid email"),
          name: string().required("Please enter name").min(2, "Name too short"),
          country: string().required('Please select an country'),
          hobbies:string().required('Please select an Hobbies'),

        })}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, isValid, touched, dirty,values}) => (
          <Form>
         

          <Field
            name="name"
            type="name"
            as={TextField}
            variant="outlined"
            color="primary"
            label="Name"
            fullWidth
            error={Boolean(errors.name) && Boolean(touched.name)}
            helperText={Boolean(touched.name) &&  errors.name}
          />
          <Box height={14} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />

            <Box height={14} />
            <FormControl>
            <InputLabel id="dropdownOption-label">country</InputLabel>
            <Field
              name="country"
              labelId="dropdownOption-label"
              as={Select}
              variant="outlined"
              color="primary"
              fullWidth
              error={Boolean(errors.country) && Boolean(touched.country)}
            >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>
            <ErrorMessage name="country" component="div" className="error" />
          </FormControl>

          <Box height={14} />
          <div id="my-radio-group">Gender</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="M" />
              M
            </label>
            <label>
              <Field type="radio" name="picked" value="F" />
              F
            </label>
            <div>You select: {values.picked}</div>
          </div>
          <Box height={14} />
          <FormControl>
          <InputLabel id="dropdownOption-label">Hobbies</InputLabel>
          <Field
            name="hobbies"
            labelId="dropdownOption-label"
            as={Select}
            variant="outlined"
            color="primary"
            fullWidth
            error={Boolean(errors.hobbies) && Boolean(touched.hobbies)}
          >
          {options2.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name="hobbies" component="div" className="error" />
        </FormControl>
        <Box height={14} />

       
          


            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!isValid || !dirty}
            >
              submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;