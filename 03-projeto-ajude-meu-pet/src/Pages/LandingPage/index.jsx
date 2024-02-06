import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const cards = [1, 2, 3, 4, 5, 6];

export default function LandingPage() {
  return (
    <>
      <main>
        <Container
          sx={{
            pt: 8,
            pb: 6
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
          >
            Bem vindo, pet lovers
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            O local onde seu animalzinho é bem cuidado e ganha um lar.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" color='primary' href='/dashboard' >
            Entre em contato</Button>
            <Button variant="outlined" href='/dashboard'>Mais informações</Button>
          </Stack>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1, backgroundColor:'white' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cachorros e gatos
                    </Typography>
                    <Typography>
                      Esse é o Bob Marley
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href='/dashboard' >Ver Detalhes</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}