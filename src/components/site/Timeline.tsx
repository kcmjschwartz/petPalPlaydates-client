import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PetsSharpIcon from '@material-ui/icons/PetsSharp';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ScheduleSharpIcon from '@material-ui/icons/ScheduleSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

const TimelineView = () =>{
    const classes = useStyles();
    return(
        <div ><br/><br/>
           <h3 className="standardHeadingFont"style={{color:"#fff"}}>How it Works</h3> 
            <Timeline align="alternate" >
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            {/* <Typography variant="h6" component="h1" > */}
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}>Register as a User</h4>
            {/* </Typography> */}
            <Typography className="standardFont">Create an account by clicking "Get Started!" Remember to mind your manners or our admins will remove your account.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SearchSharpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            {/* <Typography variant="h6" component="h1"> */}
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}> Browse Available PetPals</h4> 
            <Typography className="standardFont">Peruse the available PetPals to find one you would love to play with!</Typography>
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}>or Add Your Own Pets</h4>
            {/* </Typography> */}
            <Typography className="standardFont">Add your pets as PetPals so they can get the extra love they deserve!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            <DraftsSharpIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            {/* <Typography variant="h6" component="h1"> */}
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}>Request a PlayDate</h4>
            {/* </Typography> */}
            <Typography className="standardFont">Once you find a pet you would love to hangout with, send a request to their owner for a PlayDate. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <ScheduleSharpIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            {/* <Typography variant="h6" component="h1"> */}
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}>Schedule</h4>
            {/* </Typography> */}
            <Typography className="standardFont">Find a time that works for you to meet with the pet owner and their pet.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            <PetsSharpIcon />
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            {/* <Typography variant="h6" component="h1"> */}
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}>PlayDate!</h4>
            {/* </Typography> */}
            <Typography className="standardFont">Enjoy your time with your PetPal!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            {/* <Typography variant="h6" component="h1"> */}
            <h4 style={{fontWeight:"bold",color:'#3E239E'}}>Repeat!</h4>
            {/* </Typography> */}
            <Typography className="standardFont">Because you love pets!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

<br/>
<br/>
        </div>

    )
};


export default TimelineView;