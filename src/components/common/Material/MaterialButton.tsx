import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import { Omit } from "@material-ui/types";

interface Props {
  color?: string;
  fontWeight?: number;
  fontSize?: string;
  backgroundColor?: string;
  hoverColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const useStyles = makeStyles({
  root: {
    color: (props: Props) => props.color || "#ffffff",
    backgroundColor: (props: Props) => props.backgroundColor || "#3C50E0",
    fontWeight: (props: Props) => props.fontWeight || 500,
    fontSize: (props: Props) => props.fontSize || "0.8rem",
    borderRadius: (props: Props) => props.borderRadius || "0.4rem",
    width: (props: Props) => props.width || "18rem",
    height: (props: Props) => props.height || "2.4rem",
    fontFamily: "Noto Sans KR",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: (props: Props) => props.hoverColor || "#5669F3"
    }
  }
});

const MaterialButton = (props: Props & Omit<MuiButtonProps, keyof Props>) => {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
};

export default MaterialButton;
