import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';

// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import Countries from '.../sharedData/Countries';


const styles = (theme) => {

}

const states = [
            {
                stateName: "Gujarat",
                stateId: "G0",
                cities: [
                      {
                      name: "Ahemdabad",
                      cityId: "A0"
                      },
                      {
                        name: "Morbi",
                        cityId: "M1"
                      }
                ]
            },
            {
              stateName: "Delhi",
              stateId: "D1",
              cities: [
                  {
                  name: "Delhi East",
                  cityId: "DE0"
                  },
                  {
                    name: "Delhi West",
                    cityId: "DW1"
                  }
              ]
            },
            {
                stateName: "Maharashtra",
                stateId: "M0",  
                cities: [
                  {
                  name: "Mumbai",
                  cityId: "M0"
                  },
                  {
                    name: "Pune",
                    cityId: "P1"
                  }
              ]              
            },
            {
                stateName: "Jammu & Kashmir",
                stateId: "JK1",
                cities: [
                  {
                  name: "Jammu",
                  cityId: "J0"
                  },
                  {
                    name: "Leh",
                    cityId: "L1"
                  }
              ]
            }

          ];



const AccountProfileDetails = (props) => {

  // const { classes } = this.props;

  const [values, setValues] = useState({
    firstName: 'Rushi',
    lastName: 'Kadivar',
    email: 'unonymous@gmail.com',
    phone: '',
    currentAddress: ''
  });

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  
  const [disable, setEnabled] = useState(true);
  
  const [buttonText, setButtonText] = useState("Edit Details");

  // const [confirmEdit, setConfirmEdit] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeState = (e) => {
      setState(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  }


  // Doesn't Work



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   window.location("/");
  // }

  // const revokeSubmit = (e) => {
  //   e.preventDefault();
  // }



  // Till here 

  const handleClick = (e) => {
      setEnabled(false);
      setButtonText("Submit Details");

        // Doesn't Work

      // if (buttonText === "Submit Details") {
      //   return (
      //     <Popup position="right center" onSubmit={handleSubmit}>
      //       <div className="confirm-submit">
      //         <h3>Are you sure to want to submit</h3>
      //         <Grid
      //           item
      //           md={6}
      //           xs={12}
      //         >
      //           <Button
      //             color="primary"
      //             type="submit">
      //               Yes
      //           </Button>
      //         </Grid>
              
      //         <Grid
      //           item
      //           md={6}
      //           xs={12}
      //         >
      //           <Button
      //             color="primary"
      //             onClick={revokeSubmit}>
      //               no
      //           </Button>
      //         </Grid>                            
      //       </div>
      //     </Popup>
      //   )
      // }


        // Till here 


  }
  
  // const Activity = () => {
  //   return (
  //     <div className="">HelloHello WorldHello WorldHello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World
  //     Hello World World</div>
  //   );
  // }

  return (
    <div>
      <form
    //   autoComplete="off"
    //   noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="View Only Profile Click Edit to update the details"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
                disabled={disable}
              />
            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the last name"
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
                disabled={disable}
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                helperText="Please specify Email address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                disabled={disable}
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
                disabled={disable}
              />
            </Grid>

            <Grid
              item              
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please enter the current address"
                label="current address"
                name="currentAddress"
                onChange={handleChange}
                required
                value={values.currentAddress}
                variant="outlined"
                disabled={disable}
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="state-label">state</InputLabel>
                    <Select label="State"
                        value={state}
                        onChange={handleChangeState}
                        // disabled={disable}
                        >
                        {states.map((state) => (
                            <MenuItem
                                value={state.stateName}
                                key={state.stateId}
                                >
                                {state.stateName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Grid>
            
            <Grid
              item
              md={6}
              xs={12}
            >

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="city-label">city</InputLabel>
                    <Select label="city"
                        value={city}
                        onChange={handleChangeCity}
                        disabled={!state}
                        >
                            {
                                state ? states.find(({ stateName }) => 
                                    stateName === state
                                ).cities.map((city) => (
                                    <MenuItem value={city.name} key={city.cityId}>
                                        {city.name}
                                    </MenuItem>
                                )) : []
                            }
                    </Select>
                </FormControl>
              </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box m={2}
        //   sx={{
        //     display: 'flex',
        //     justifyContent: 'flex-end',
        //     p: 2
        //   }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            {buttonText}
          </Button>
        </Box>
      </Card>
    </form>
    </div>
    
  );
};

export default AccountProfileDetails;