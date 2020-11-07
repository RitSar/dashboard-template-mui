import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CollectionsIcon from "@material-ui/icons/Collections";
import SettingsIcon from "@material-ui/icons/Settings";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DoneIcon from "@material-ui/icons/ControlPoint";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import BlockIcon from "@material-ui/icons/Block";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import {
  AppBar,
  Avatar,
  Dialog,
  InputLabel,
  MenuItem,
  Button,
  FormControl,
  Select,
  IconButton,
  Typography,
  Toolbar,
  Hidden,
  Paper,
  Checkbox,
  Box,
  Slider,
  TextField,
  Chip,
} from "@material-ui/core";
import InstaIcon from "./icons/InstaIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import FacebookIcon from "./icons/FacebookIcon";
import ChatCard from "./ChatCard";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
const style = {
  slide: {
    padding: 15,
    minHeight: "100",
    color: "#fff",
  },
  slide1: {
    background: "#fff",
    maxHeight: "100vh",
  },
  slide2: {
    background: "#B3DC4A",
    minHeight: "100%",
  },
  slide3: {
    background: "#6AC0FF",
    minHeight: "100%",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 20,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const styles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Touchview() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [days, setDays] = React.useState("7");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDays = (event) => {
    setDays(event.target.value);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="white">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <strong>
              Rep<span style={{ color: "#4967e9" }}>suite</span>.
            </strong>
          </Typography>
          <IconButton aria-label="add">
            <ControlPointIcon />
          </IconButton>
          <IconButton aria-label="collections">
            <CollectionsIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>

          <Button onClick={handleClickOpen}>
            <Avatar alt="User" src="/user.svg" style={{ marginRight: 10 }} />
            <Hidden smDown>Rachna Ranade</Hidden>
          </Button>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              <Button>
                <Avatar
                  alt="User"
                  src="/user.svg"
                  style={{ marginRight: 10 }}
                />
                Rachna Ranade
              </Button>
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>

      <BindKeyboardSwipeableViews>
        <div style={Object.assign({}, style.slide, style.slide1)}>
          <Box className="paperBadge" style={{ justifyContent: "center" }}>
            <Paper className="paperBadge">
              <ErrorIcon
                fontSize="small"
                style={{
                  marginRight: 5,
                  color: "red",
                }}
              />
              <Typography variant="body1">
                <strong>34</strong>
              </Typography>
            </Paper>
            <Paper className="paperBadge">
              <VerifiedUserIcon
                fontSize="small"
                style={{
                  color: "darkcyan",
                  marginRight: 5,
                }}
              />
              <Typography variant="body1">
                <strong>34</strong>
              </Typography>
            </Paper>
            <Paper className="paperBadge">
              <VisibilityOffIcon
                fontSize="small"
                style={{
                  marginRight: 5,
                  color: "orange",
                }}
              />
              <Typography variant="body1">
                <strong>34</strong>
              </Typography>
            </Paper>
          </Box>
          <Box className="paperBadge" style={{ justifyContent: "center" }}>
            <Box mr={1}>
              <Typography variant="body1" style={{ color: "black" }}>
                Date Range :
              </Typography>
            </Box>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Time
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={days}
                onChange={handleDays}
                label="Days"
              >
                <MenuItem value={7}>Last 7 days</MenuItem>
                <MenuItem value={14}>Last 14 days</MenuItem>
                <MenuItem value={18}>Last 28 days</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Typography variant="caption">Showing 36 comments</Typography>
          <Box className="chats">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </Box>
          <Box className="paperBadge" style={{ justifyContent: "center" }}>
            {/* <Typography
              variant="caption"
              style={{ color: "black", position: "relative", top: 50 }}
            >
              Copyright{" "}
              <strong>
                Rep<span style={{ color: "#4967e9" }}>suite</span>.
              </strong>
            </Typography> */}
          </Box>
        </div>
        <div style={Object.assign({}, style.slide, style.slide2)}>
          <Paper className={classes.paper}>
            <Box className="paperBadge">
              <Avatar
                alt="User"
                src="/user.svg"
                className={classes.large}
                style={{ marginRight: 20 }}
              />

              <Box style={{ flexDirection: "column", lineHeight: 0 }}>
                <Typography variant="h6">Prayag Mukhi</Typography>
                <Typography variant="caption">2:03 PM, Today</Typography>
              </Box>
            </Box>
            <Box style={{ display: "block" }}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis, sed corporis vel impedit accusamus iure quisquam totam
                quis, modi aliquam nam, ratione aperiam doloribus. Vitae eum
                labore vel veniam accusamus!
              </Typography>
              <img
                src="https://source.unsplash.com/random/1600x900"
                width="100%"
                height={300}
                style={{ marginTop: 10 }}
                alt="random"
              />
            </Box>

            <Box className="paperBadge">
              <Avatar
                alt="User"
                src="/user.svg"
                className={classes.large}
                style={{ marginRight: 20 }}
              />

              <Box style={{ flexDirection: "column", lineHeight: 0 }}>
                <Typography variant="h6">Prayag Mukhi</Typography>
                <Typography variant="caption">2:03 PM, Today</Typography>
              </Box>
              <DoneIcon style={{ marginLeft: "auto" }} />
            </Box>
            <Box style={{ display: "block" }}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis, sed corporis vel impedit accusamus iure quisquam totam
                quis, modi aliquam nam, ratione aperiam doloribus. Vitae eum
                labore vel veniam accusamus!
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="reply"
              label="Write a reply"
              id="reply"
              size="small"
            />
            <Box style={{ display: "flex" }}>
              <Chip
                size="small"
                variant="outlined"
                label="Like"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<ThumbUpAltIcon />}
              />
              <Chip
                size="small"
                variant="outlined"
                label="Ban"
                clickable
                color="secondary"
                onDelete={handleDelete}
                deleteIcon={<BlockIcon />}
                style={{ marginLeft: 10 }}
              />
              <Box ml="auto">
                <Button variant="contained" color="primary">
                  Reply
                </Button>
              </Box>
            </Box>
          </Paper>
        </div>
        <div style={Object.assign({}, style.slide, style.slide3)}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Pages and Channels</Typography>
            <Paper className="paperBadge">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">Rachna Ranade</Typography>
              <Box ml="auto" mt={0.5}>
                <YoutubeIcon />
              </Box>
            </Paper>
            <Paper className="paperBadge">
              <Checkbox
                defaultChecked={false}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">rac.ranade3</Typography>
              <Box ml="auto" mt={0.5}>
                <InstaIcon />
              </Box>
            </Paper>
            <Paper className="paperBadge">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">Rachna Ranade</Typography>
              <Box ml="auto" mt={0.5}>
                <FacebookIcon />
              </Box>
            </Paper>

            <Box mt={5}>
              <Typography variant="h6">Status</Typography>
            </Box>
            <Box className="paperBadge">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">Requires manual attention</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">Marked Safe by:</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 50,
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                size="small"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="caption">Manual action</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 50,
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                size="small"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="caption">AI</Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="body1">Marked Safe by:</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 50,
              }}
            >
              <Checkbox
                defaultChecked={false}
                color="primary"
                size="small"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="caption">Manual action</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 50,
              }}
            >
              <Checkbox
                defaultChecked
                color="primary"
                size="small"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <Typography variant="caption">Keyword</Typography>
            </Box>
          </Paper>

          <Paper className={classes.paper}>
            <Box mb={1}>
              <Typography variant="h6">Plans and Usage</Typography>
            </Box>

            <Typography variant="body1">Accounts Connected</Typography>
            <Slider
              defaultValue={2}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={3}
            />
            <Typography variant="body1">Comments processed</Typography>
            <Slider
              defaultValue={5000}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1000}
              marks
              min={0}
              max={10000}
            />
          </Paper>
        </div>
      </BindKeyboardSwipeableViews>
    </div>
  );
}
