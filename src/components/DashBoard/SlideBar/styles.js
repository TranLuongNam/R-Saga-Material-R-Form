const styles = (theme) => ({
  drawerPaper: {
    width: 210,
    maxWidth: 210,
    height: '100%',
    zIndex: 999,
    position: 'relative',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: theme.color.hover,
    },
  },
});
export default styles;
