import React from 'react';
import Link from 'react-router-dom/Link';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { withRouter } from "react-router-dom";

import { SET_UNAUTHENTICATED } from '../redux/types';
import  axios from 'axios';

//Icons
import IconDashboard from '@material-ui/icons/Dashboard';
import IconClientes from '@material-ui/icons/PermContactCalendar';
import IconEspecialistas from '@material-ui/icons/PermIdentity';
import IconSupervisores from '@material-ui/icons/SupervisorAccount';
import IconProspectos from '@material-ui/icons/RecordVoiceOver';
import IconServicios from '@material-ui/icons/Build';
import IconCerrarSesion from '@material-ui/icons/PowerSettingsNew';

import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const logoutUser = () => (dispatch) => {
  console.log("cerrando");
  localStorage.removeItem('FBAuth');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED});
}

const eraseToken = () => {
  logoutUser();
}

export function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const path = props.location.pathname;

  console.log(props.location.pathname);
  
  let hiddenNavbar = true;
  
  if (path === "/login") {
    hiddenNavbar = true;
  } else {
    hiddenNavbar = false;
  }
  
  return (
    <div hidden={hiddenNavbar}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Machine Care
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button component={Link} to="/">
                  <ListItemIcon> <IconDashboard/> </ListItemIcon>
                  <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button component={Link} to="/servicios">
                  <ListItemIcon> <IconServicios/> </ListItemIcon>
                  <ListItemText primary="Servicios" />
              </ListItem>
              <Divider/>
              <ListItem button component={Link} to="/especialistas">
                  <ListItemIcon> <IconEspecialistas/> </ListItemIcon>
                  <ListItemText primary="Especialistas" />
              </ListItem>
              <ListItem button component={Link} to="/supervisores">
                  <ListItemIcon> <IconSupervisores/> </ListItemIcon>
                  <ListItemText primary="Supervisores" />
              </ListItem>
              <ListItem button component={Link} to="/gerentes">
                  <ListItemIcon> <IconSupervisores/> </ListItemIcon>
                  <ListItemText primary="Gerentes" />
              </ListItem>
              <Divider/>
              <ListItem button component={Link} to="/invitados">
                  <ListItemIcon> <IconProspectos/> </ListItemIcon>
                  <ListItemText primary="Invitados" />
              </ListItem>
              <ListItem button component={Link} to="/clientes">
                  <ListItemIcon> <IconClientes/> </ListItemIcon>
                  <ListItemText primary="Clientes" />
              </ListItem>
              <ListItem button component={Link} to="/supervisoresClientes">
                  <ListItemIcon> <IconSupervisores/> </ListItemIcon>
                  <ListItemText primary="Supervisores Clientes" />
              </ListItem>
              <Divider/>
              <form onSubmit={eraseToken()}>
                <ListItem button type="submit" component={Link} to="/login">
                    <ListItemIcon> <IconCerrarSesion/> </ListItemIcon>
                    <ListItemText primary="Cerrar Sesion" />
                </ListItem>
              </form>
          </List>
        </Drawer>
      </div>
    </div>
  );
}

export default withRouter(MiniDrawer);
