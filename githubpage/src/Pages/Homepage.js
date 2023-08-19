import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../components/Navigation/Navigation'
import {CareerData, EducationData} from '../Data/HomepageData/HomePageData'
import DataTable from '../components/Datatable';
import { Divider } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Homepage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ResponsiveAppBar/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#ADC4CE',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Philip Here.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            I am a Software Engineer Working at a Cyber security company. 
            Here is a link to my GitHub repo, not that there is much there...
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="success" href='https://github.com/PhilipSheerin'>GitHub</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {CareerData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">
                      {card.name}
                    </Typography>
                    <Typography variant="h7">
                      {card.year}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider/>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {EducationData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5">
                      {card.name}
                    </Typography>
                    <Typography variant="h7">
                      {card.year}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Divider/>
        <Container sx={{ py: 8 }} maxWidth="lg">
                <DataTable/>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#F1F0E8', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thanks for visting!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}