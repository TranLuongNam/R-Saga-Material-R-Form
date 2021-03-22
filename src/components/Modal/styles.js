const styles = (theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    position: 'absolute',
    width: 350,
    outline: 'none',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(1, 1, 1),
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textColor,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.color.textColor,
    fontSize: 15,
    fontWeight: 700,
  },
  icon: {
    cursor: 'pointer',
    fontSize: 25,
  },
  content: {
    padding: theme.spacing(1),
  },
});
export default styles;
