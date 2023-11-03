import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
  socialIcon: {
    margin: "0 1rem",
    fontSize: "2rem",
    color: "tomato",
    cursor: "pointer",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
          
          <div className={classes.socialIcons}>
            <LinkedInIcon
              className={classes.socialIcon}
              onClick={() => window.open("https://ar.linkedin.com/in/thiago-baranczuk-4907a1284", "_blank")}
            />
            <GithubIcon
              className={classes.socialIcon}
              onClick={() => window.open("https://github.com/thiagobaran", "_blank")}
            />
            <InstagramIcon
              className={classes.socialIcon}
              onClick={() => window.open("https://www.instagram.com/baranas.co/", "_blank")}
            />
          </div>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
