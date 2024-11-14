import { Box } from '@mui/material';
import Avatar from '../Avatar/Avatar';

const ContactInfoStub = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Avatar width={'75px'} height={'75px'} fontSize="2.5rem" />
      <h2>Contact Details</h2>
    </Box>
  );
};

export default ContactInfoStub;
