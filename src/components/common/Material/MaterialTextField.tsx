import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { Omit } from "@material-ui/types";

interface Props {
  color?: string;
  fontWeight?: number;
  fontSize?: string;
  hoverColor?: string;
  width?: string;
  height?: string;
}

const useStyles = makeStyles({
  root: {
    fontWeight: (props: Props) => props.fontWeight || 500,
    fontSize: (props: Props) => props.fontSize || "0.9rem",
    width: (props: Props) => props.width || "18rem",
    height: (props: Props) => props.height || "",
    fontFamily: "Noto Sans KR",
    "& label.Mui-focused": {
      color: (props: Props) => props.color || "#3C50E0"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: (props: Props) => props.color || "#3C50E0"
    }
  }
});

const MaterialTextField = (props: Props & Omit<TextFieldProps, keyof Props>) => {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <TextField className={classes.root} {...other} />;
};

export default MaterialTextField;
