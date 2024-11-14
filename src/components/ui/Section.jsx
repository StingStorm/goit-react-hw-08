import { Box } from '@mui/material';

const Section = ({ children, sx = {} }) => {
  return <Box sx={{ padding: '75px 0', ...sx }}>{children}</Box>;
};

export default Section;
