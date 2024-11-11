import { Button } from '@mui/material';

const SubmitButton = ({ children, ...otherProps }) => {
  return (
    <Button variant="contained" color="secondary" type="submit" {...otherProps}>
      {children}
    </Button>
  );
};

export default SubmitButton;
