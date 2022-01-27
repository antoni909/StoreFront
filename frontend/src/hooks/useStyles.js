import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  fullHeight: {
    height: "100%"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flex: 1,
  },
}));
