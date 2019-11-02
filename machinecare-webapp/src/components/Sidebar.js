import React, { Component } from 'react'

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export class Sidebar extends Component {
    render() {
        return (
            <Drawer>
                <Toolbar>
                    <Button color="inherit">Dashboard</Button>
                    <Button color="inherit">Especialistas</Button>
                </Toolbar>
            </Drawer>
        )
    }
}

export default Sidebar
