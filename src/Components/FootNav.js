import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    position:'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4a148c',
    color: 'white'
  },
});

export default function FootNav({ScreenShow}) {
  const classes = useStyles();

  console.log(ScreenShow[0]);
  //const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={ScreenShow[0]}
      onChange={(event, newValue) => {
        ScreenShow[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className = "iconss" label="Global" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Country" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
