import React from 'react';
import BasicDeviceComponent from '../components/BasicDeviceComponent.js';
import Grid from '@material-ui/core/Grid';
const { ipcRenderer } = window.require('electron');


export class MainView extends React.Component {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      devComponents: []

    }
  }

  componentDidMount() {

    this._isMounted = true;
    ipcRenderer.send("clear-to-send");


    for (let i = 0; i < 30; i++) {

      this._isMounted && this.setState((state, props) => ({
        devComponents: [...state.devComponents, <Grid item xs={1} key={"item" + i}><BasicDeviceComponent devId={i} key={i} /> </Grid>]
      }))
    }
  }

  componentWillUnmount() {

  }

  // What the actual component renders
  render() {

    return (

      <div>
        <Grid container spacing={3}>
          {this.state.devComponents.map((component) => {
            return component;
          })}
        </Grid>

      </div>


    );


  }

}

