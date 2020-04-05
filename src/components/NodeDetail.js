import React from 'react';
import NodeComponent from './NodeComponent';
import Grid from '@material-ui/core/Grid';

export default function NodeDetail(passedProps) {

    let props = passedProps.initProps;

    const getNodeData = (data) => {

        if (data !== null) {
            return data.nodeData;
        } else return null;
    }

    const getNodes = () => {

        let nodes = [];

        for (let i = 0; i < 9; i++) {

            nodes.push(<Grid key={"item" + i} item> <NodeComponent nodeId={i} key={"node" + i} nodeData={getNodeData(props.packet)} /> </Grid>);
        }

        return nodes;
    }


    return (
        <div>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={5}
            >
             {getNodes().map((component) => {
                return component;
            })}

            </Grid>
           

        </div>
    );
}