import theme from '../../common/Theme';

const styles = () => ({
  tashboard: {
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
});

export default styles;
