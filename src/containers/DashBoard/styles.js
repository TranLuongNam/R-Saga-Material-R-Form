import theme from '../../common/Theme';

const styles = () => ({
  dashboard: {
    display: 'flex',
    alignItems: 'center',
  },
  shape: {
    backgroundColor: theme.color.primary,
    color: theme.shape.color,
    padding: 20,
    margin: 10,
    borderColor: '#cccccc',
    borderRadius: theme.shape.borderRadius,
  },
  button: {
    marginLeft: 600,
  },
});

export default styles;
