import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,.5)',
  },
  heading: {
    color: 'rgba(255,255,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
