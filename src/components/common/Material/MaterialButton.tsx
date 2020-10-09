import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import { Omit } from "@material-ui/types";

interface Props {
  color: string;
  fontWeight: number;
  fontSize: string;
  backgroundColor: string;
  hoverColor: string;
  width: string;
  height: string;
  borderRadius: string;
}

const useStyles = makeStyles({
  root: {
    color: (props: Props) => props.color,
    backgroundColor: (props: Props) => props.backgroundColor,
    fontWeight: (props: Props) => props.fontWeight,
    fontSize: (props: Props) => props.fontSize,
    borderRadius: (props: Props) => props.borderRadius,
    width: (props: Props) => props.width,
    height: (props: Props) => props.height,
    fontFamily: "Noto Sans KR",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: (props: Props) => props.hoverColor
    }
  }
});

const MaterialButton = (props: Props & Omit<MuiButtonProps, keyof Props>) => {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <Button className={classes.root} {...other} />;
};

export default MaterialButton;
