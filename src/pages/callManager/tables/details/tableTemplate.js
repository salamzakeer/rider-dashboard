import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core";
import React from "react";
import TableTemplate2 from "./table2FeildSetUp";

const useStyles = makeStyles(
  (theme) =>
    createStyles({
      Main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "10rem 0 0 0 ",
        fontSize: "2rem",
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
          // backgroundColor: "red",
          fontSize: "1.5rem",
        },
      },
    }),
  { withTheme: true }
);

function Dashboard(props) {
  const classes = useStyles();
  const {
    key1,
    value1,
    onChange1,
    name1,
    id1,
    key2,
    value2,
    onChange2,
    name2,
    id2,
    key3,
    value3,
    onChange3,
    name3,
    id3,
    options1,
    options2,
    options3,
    disabled1,
    disabled2,
    disabled3,
  } = props;
  // console.log(key1, key2, key3);

  return (
    <>
      <tr>
        <TableTemplate2
          keys={key1}
          value={value1}
          onChange={onChange1}
          name={name1}
          id={id1}
          options={options1}
          disabled={disabled1}
        />
        <TableTemplate2
          keys={key2}
          value={value2}
          onChange={onChange2}
          name={name2}
          id={id2}
          options={options2}
          disabled={disabled2}
        />
        <TableTemplate2
          keys={key3}
          value={value3}
          onChange={onChange3}
          name={name3}
          id={id3}
          options={options3}
          disabled={disabled3}
        />
      </tr>
    </>
  );
}
export default Dashboard;
