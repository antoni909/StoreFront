import { useStyles } from "../hooks/useStyles";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function Header() {
  const classes = useStyles()
  return (
    <div>
      <AppBar
        position="static"
        color="secondary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            StoreFront 🏪
          </Typography>

          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              About
            </Link>
          </nav>

          <Button
            href="#"
            color="default"
            variant="outlined"
            className={classes.link}
          >
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
