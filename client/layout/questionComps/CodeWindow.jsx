import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Codemirror Styling
// require('codemirror/lib/codemirror.css');
import 'codemirror/lib/codemirror.css';

// Codemirror Languages
import 'codemirror/mode/javascript/javascript';

// Codemirror Themes
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/blackboard.css';
require('codemirror/addon/edit/closebrackets');

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Codemirror Component
<<<<<<< HEAD
const CodeMirror = require('react-codemirror');
=======
const CodeMirror = require("react-codemirror");

>>>>>>> 155e94c0d3623e9908f3d4a2f06cc75c3fc8453f
const options = {
  lineNumbers: true,
  autoCloseBrackets: true,
  mode: 'javascript',
  theme: 'blackboard',
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CodeWindow = (props) => {
  const classes = useStyles();
  const { setQuestionData, questionData } = props;

  const updateCode = (e) => {
    setQuestionData({
      input: e,
    });
  };

  const handleResetCode = (e) => {
    setQuestionData({
      input: '',
      output: '',
    });
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    let outputData = eval("(" + questionData.input + ")")();
    console.log("this is output ", outputData);

    let consoleData = eval('(' + questionData.input + ')');
    console.log('this is console data ', consoleData);

    setQuestionData({
      input: questionData.input,
      output: outputData,
    });
    // eval(questionData.input);
    console.log('This is questionData in handleCodeSubmit: ', questionData);
  };

  console.log('This is questionData: ', questionData.output);
  return (
    <div className={classes.root}>
      <div className="codemirror">
        <CodeMirror onChange={updateCode} options={options} />
      </div>
      <Button variant="contained" onClick={handleResetCode}>
        Reset
      </Button>
      {/* We need to figure this out */}
      <Button variant="contained" color="secondary">
        Run
      </Button>
      <Button variant="contained" color="primary" onClick={handleCodeSubmit}>
        Submit
      </Button>

      {/* create a box for vertical */}
    </div>
  );
};

export default CodeWindow;
