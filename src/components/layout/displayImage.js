import React from "react";
import axios from "../../axios";
const changeOption = (url) => {
  console.log(url, "url");
  if (url === "lnds") {
    return "lnd";
  } else if (url === "vacants") {
    return "vacant";
  } else if (url === "commercials") {
    return "commercial";
  } else if (url === "highrises") {
    return "highrise";
  } else {
    return url;
  }
};
const download = (e, QRImage) => {
  fetch(QRImage, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const DisplayImage = ({ image,Option }) => {
  var single = [];
  var x = changeOption(Option);

  if (image) {
    // console.log(image, "===");
    single = image.split(",");
  }
  // if (image.length > 0) {
  //   single = image.split(",");
  // } else {
  //   single = [];
  // }
  // console.log(single, image);

  return (
    <td>
      {single &&
        single.length > 0 &&
        single.map((item, i) => (
          <td key={i}>
            <a
              href={axios.defaults.baseURL + "/" + x + "/" + item}
              onClick={(e) =>
                download(e, axios.defaults.baseURL + "/" + x + "/" + item)
              }
              target="_blank"
              download
              style={{
                width: "40px",
                height: "40px",
                textTransform: "capitalize",
                textAlign: "center",
                margin: "0 auto",
              }}
            >
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  textTransform: "capitalize",
                  textAlign: "center",
                  margin: "0 auto",
                  borderRadius: "50%",
                }}
                src={axios.defaults.baseURL + "/" + x + "/" + item}
              />
            </a>

            {/* <Avatar
                sx={{
                  width: "40px",
                  height: "40px",
                  textTransform: "capitalize",
                  textAlign: "center",
                  margin: "0 auto",
                }}
                className={classes.Avatar}
                onClick={() =>
                  onImageClick(axios.defaults.baseURL + "/" + x + "/" + item)
                }
                src={axios.defaults.baseURL + "/" + x + "/" + item}
                alt="user"
              >
                {item[0]}
              </Avatar> */}
          </td>
        ))}
      {/* <p>Sdsdsd</p> */}
      {/* {JSON.stringify(single)} */}
    </td>
  );
};
export default DisplayImage;
