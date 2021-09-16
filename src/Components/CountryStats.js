import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import { Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
            backgroundColor: 'cyan'

        },
        maininfoPanel: {
            fontSize: 40,
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        search_button: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 990,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

export default function GlobalStats() {
    const classes = useStyles();
    const [Country, setcountry] = useState("");
    //const [check, check_country] = useState();

    const [country_data, setcountry_data] = useState({});
    async function get_data() {
        const response = await fetch('https://covid-19.dataflowkit.com/v1');
        let data = await response.json();
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i]["New Cases_text"] === "") {
                data[i]["New Cases_text"] = "0";
            }
            if (data[i]["New Deaths_text"] === "") {
                data[i]["New Deaths_text"] = "0";
            }
            if (data[i]["Country_text"] === Country) {
                setcountry_data(data[i]);
            }
        }
        console.log("Event Added", Country);

    }
    useEffect(() => {
        get_data();
    }, [])
    const onSubmits = (event) => {
        event.preventDefault();
        //check_country(Country)
        console.log(Country);
        get_data();
    }
    const InputEvent = (event) => {
        console.log(event.target.value);
        setcountry(event.target.value);
    }
    return (
        <div className={classes.root}>
            <br/>
            <form onClick={onSubmits}>
                <Paper component="form" className={classes.search_button}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Country"
                        inputProps={{ 'aria-label': 'Search Country' }}
                        onChange={InputEvent} 
                        value={Country}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                
            </form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                    </Paper>
                </Grid>
                {Object.keys(country_data).map((val, ind) => {
                    return (
                        <Grid item xs={12} sm={6} key={ind}>
                            <Paper className={classes.paper}>
                                <h3>{val.replace(/_/g, ' ').replace(/ text/g, '').toUpperCase()}</h3>
                                <h4>
                                    {country_data[val]}
                                </h4>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
