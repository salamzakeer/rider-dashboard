import React from "react";
import TableTemplate2 from "./table2FeildSetUp";

function Dashboard(props) {
  const {
    key1,
    value1,
    onChange1,
    name1,
    id1,
    datepicker1,
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
    datepickerC,
  } = props;
  // console.log(key1, key2, key3);

  return (
    <tbody key={name1 + id2}>
      <tr key={name1 + name2 + name3}>
        <TableTemplate2
          keys={key1}
          value={value1}
          onChange={onChange1}
          name={name1}
          id={id1}
          options={options1}
          disabled={disabled1}
          datepicker={datepicker1}
          datepickerC={datepickerC}
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
    </tbody>
  );
}
export default Dashboard;
