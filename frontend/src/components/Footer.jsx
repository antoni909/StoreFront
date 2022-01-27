import { useStyles } from "../hooks/useStyles";
import Container from '@material-ui/core/Container';

function Footer() {
  const classes = useStyles()

  return (
    <div >
      <Container 
        maxWidth="lg" 
        component="footer" 
        className={classes.footer}
      >Footer
      </Container>
    </div>
  );
}

export default Footer;
