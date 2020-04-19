import React from 'react';
import AccelerationMeter from "./AccelerationMeter";
import Grid from '@material-ui/core/Grid';
import { VerticalGridLines, XAxis, YAxis, HorizontalGridLines, LineSeries, FlexibleWidthXYPlot, DiscreteColorLegend } from 'react-vis';
import colors from "../colors";


export default function AccelerationDetail(passedProps) {
    const props = passedProps.initProps;
    return (
        <div>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
            >


                <Grid xs={4} item>
                    <AccelerationMeter axis="X" leftLabel="back" rightLabel="front" data={props.packet === null ? "-" : props.packet.basicData.accY} />
                    <AccelerationMeter axis="Y" leftLabel="left" rightLabel="right" data={props.packet === null ? "-" : props.packet.basicData.accY} />
                    <AccelerationMeter axis="Z" leftLabel="foot" rightLabel="head" data={props.packet === null ? "-" : props.packet.basicData.accZ} />
                </Grid>

                <Grid item xs={1}>
                    <DiscreteColorLegend
                        colors={[
                            colors.yellow,
                            colors.red,
                            colors.green
                        ]}
                        items={[
                            'X',
                            'Y',
                            'Z',
                        ]}
                        orientation="vertical"
                    />
                </Grid>

                <Grid xs={7} item>

                    <FlexibleWidthXYPlot

                        height={200}
                        xType="time"
                        yDomain={[0, 220]}
                        style={{ borderStyle: 'solid' }}
                    >
                        <HorizontalGridLines />
                        <VerticalGridLines />
                        <LineSeries
                            data={null} />
                        <XAxis />
                        <YAxis title="BPM" />
                    </FlexibleWidthXYPlot>

                </Grid>

            </Grid>


        </div>
    );
}