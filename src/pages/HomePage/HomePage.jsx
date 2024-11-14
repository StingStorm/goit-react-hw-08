import { Box, Button, Container } from '@mui/material';
import Section from '../../components/ui/Section';
import heroImg from '../../assets/hero.jpg';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Section>
      <Container
        maxWidth="lg"
        sx={{
          padding: '1rem',
          border: '2px solid #4e5d72',
          borderRadius: '1rem',
          backgroundColor: 'rgba(225, 153, 94, 0.95)',
        }}
      >
        <h1 className={css.appTitle}>
          Welcome to the <span>Contact Book</span> App
        </h1>
        <Box sx={{ display: 'flex', gap: '1.5rem' }}>
          <Box
            sx={{
              overflow: 'hidden',
              maxWidth: '50%',
              border: '2px solid #4e5d72',
              borderRadius: '1rem',
            }}
          >
            <img src={heroImg} alt="App" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              fontSize: '1.2rem',
              padding: '1rem',
            }}
          >
            <Box className={css.heroDescr}>
              <h2>Contact Book</h2>
              <p>
                — your go-to app for effortless contact management. Save, add,
                edit, and organize all your contacts in one place with ease and
                efficiency.
              </p>
            </Box>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              color="border"
              size="large"
            >
              Sing Up
            </Button>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default HomePage;
