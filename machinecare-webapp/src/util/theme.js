export default {
  palette: {
      primary: {
        light: '#33c9dc',
        main: '#00bcd4',
        dark: '#008394',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff6333',
        main: '#ff3d00',
        dark: '#b22a00',
        contrastText: '#fff'
      }
  },
  tablasInfo: {
    root: {
      width: '100%',
      //marginTop: theme.spacing(3),
    },
    paper: {
      width: '100%',
      //marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    typography: {
      useNextVariants: true
    }
  },
  spreadThis: {
    formControl: {
      //margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      //marginTop: theme.spacing(2),
    },
    form: {
      textAlign: 'center'
    },
    image: {
      margin: '20px auto 20px auto'
    },
    pageTitle: {
      margin: '10px auto 10px auto'
    },
    textField: {
      margin: '10px auto 10px auto'
    },
    button: {
      marginTop: 20,
      position: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem'
    },
    progress: {
      position: 'absolute'
    }
  },
}