import { Button, withStyles } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    color: "#FFFFFF",
    fontFamily: "Noto Sans KR",
    fontWeight: 500,
    fontSize: "0.9rem",
    letterSpacing: "0.6px",
    backgroundColor: "#3C50E0",
    borderRadius: "0.4rem",
    width: "18rem",
    height: "2.7rem",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "#5669F3"
    }
  }
}))(Button);
