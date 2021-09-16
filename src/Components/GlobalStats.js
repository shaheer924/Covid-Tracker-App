import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 1000,
            margin: '0 auto',
            marginTop: '1000',

        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontFamily: 'Arial',
            backgroundColor: '#ff1744'
        },
        maininfoPanel: {
            fontSize: 40,
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function GlobalStats() {
    const classes = useStyles();
    const [global_data, setglobal_data] = useState({});
    //const [world_data, set_world_data] = useState({});
    useEffect(() => {
        async function get_data() {
            const response = await fetch('https://covid-19.dataflowkit.com/v1');
            let data = await response.json();
            console.log(data);
            setglobal_data(data[0])
        }
        get_data();
    }, [])

    return (
        <div className={classes.root}>
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <Typography variant="h5" component="h3" className={classes.paper}>
                            Global Data Result
                        </Typography>
                    </Paper>
                </Grid>
                {Object.keys(global_data).map((val, ind) => {
                    return (
                        <Grid item xs={12} sm={6} key={ind}>
                            <Paper className={classes.paper}>
                                <h4>{val.replace(/_/g, ' ').replace(/ text/g, '').toUpperCase()}</h4>
                                <h4>
                                    {global_data[val]}
                                </h4>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>

            <Grid item xs={12}>
                <Paper></Paper>
            </Grid>

        </div>
    );
}
