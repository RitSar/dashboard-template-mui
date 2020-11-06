import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Paper, Typography, Divider } from "@material-ui/core";
import InstaIcon from "./icons/InstaIcon";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ChatCard() {
  const classes = useStyles();
  return (
    <Box>
      <Paper>
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
          <ErrorIcon style={{ marginLeft: "auto", color: "red" }} />
        </Box>
        <Box className="cardBody">
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            velit, architecto commodi nesciunt tempore, earum consectetur
            voluptates saepe dicta vero molestiae aperiam impedit mollitia
            delectus ipsa sint placeat ex sit?
          </Typography>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />
          <Box style={{ display: "flex" }}>
            <span
              className="paperBadge"
              style={{ backgroundColor: "aliceblue", borderRadius: 10 }}
            >
              <InstaIcon />
              <Typography variant="caption">Rachna Ranade</Typography>
            </span>
            <Box ml="auto" style={{ position: "relative", top: 15 }}>
              <VerifiedUserIcon style={{ color: "darkcyan" }} />
              <VisibilityOffIcon style={{ color: "orange" }} />
              <DoneIcon style={{ color: "green" }} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
