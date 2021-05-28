import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import UserDetails from '../components/Account/RenterProfile';
import AccountProfileDetails from '../components/Account/RenterProfileDetails';

import Activity from '../components/Account/Activity';


const Account = () => (

    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}   
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <UserDetails />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>

        <Grid 
          container
          p={9}
          >
            <Grid 
              item
              >
                <Activity />
            </Grid>              
          </Grid>
      </Container>
    </Box>
  
);

export default Account;