import { Button, withStyles } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    color: "#FFFFFF",
    fontFamily: "Noto Sans KR",
    fontWeight: 300,
    fontSize: "1rem",
    letterSpacing: "0.6px",
    backgroundColor: "#3C50E0",
    width: "15.6rem",
    height: "2.9rem",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#5669F3"
    }
  }
}))(Button);
