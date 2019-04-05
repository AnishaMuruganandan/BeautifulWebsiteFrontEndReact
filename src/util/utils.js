class UtilJS {
  constructor() {}

  ajax(url, methodName, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: methodName || "GET",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          resolve(data);
          console.log("Created:", data);
        })
        .catch(function(error) {
          console.log(
            "There has been a problem with your fetch operation: ",
            error.message
          );
        });
    });
  }

  voteCountFormatter(voteCount) {
    if (voteCount >= 10000) {
      var quotient = voteCount / 10000;
      var count = Math.trunc(quotient) + "K";
    } else count = voteCount;
    return count;
  }

  formatDate(date) {
    var d = new Date();
    var formatedDate =
      d.getFullYear() +
      "-" +
      ("00" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + d.getDate()).slice(-2) +
      " " +
      ("00" + d.getHours()).slice(-2) +
      ":" +
      ("00" + d.getMinutes()).slice(-2) +
      ":" +
      ("00" + d.getSeconds()).slice(-2);

    var difference = new Date(formatedDate) - new Date(date);
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

    // return daysDifference;

    if (daysDifference > 30) {
      let month = parseInt(daysDifference / 30);
      if (month > 12) {
        let year = parseInt(month / 12);
        if (year == 1) {
          daysDifference = year + " year ago";
        } else {
          daysDifference = year + " years ago";
        }
      } else if (month == 12) {
        daysDifference = "1 year ago";
      } else if (month == 1) {
        daysDifference = "1 month ago";
      } else {
        daysDifference = month + " months ago";
      }
    } else {
      daysDifference = daysDifference + " days";
    }

    return daysDifference;
  }
}
export default UtilJS;
