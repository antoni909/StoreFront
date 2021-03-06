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
  button: {
    fontSize: 15,
    borderRadius: 10,
    boxShadow: '1px 1px 1px 1px rgba(30, 203, 243, .3)',
    '&:hover':{
      backgroundColor: '#f50057'
    },
    marginTop: '10px', 
  },
  card: {
    margin: '10px 10px 10px 10px',
    paddingBottom: '10px',
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`
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
