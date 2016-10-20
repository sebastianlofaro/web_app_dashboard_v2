// Charts
var lGraph = document.getElementById("line-graph");
var bGraph = document.getElementById("bar-graph");
var pChart = document.getElementById("pie-chart");


var weeklyTrafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2000, 1750],
        backgroundColor: 'rgba(227,227,246, 0.7)',
        lineTension: 0,
        pointBorderColor: '#7477BF',
        pointRadius: 5,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff'
    }]
};

var dailyTrafficData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    data: ['50', '100', '250', '75', '150', '50', '100'],
    backgroundColor: '#7278B8',
  }]
};

var mobileUserData = {
  labels: ['Phones', 'Tablet', 'Desktop'],
  datasets: [{
    data: ['250', '100', '50'],
    backgroundColor: ['#727ABD', '#78B1BE', '#86C791']
  }]
};

var lData = {
    labels: weeklyTrafficData.labels,
    datasets: weeklyTrafficData.datasets
};

var bData = {
  labels: dailyTrafficData.labels,
  datasets: dailyTrafficData.datasets
};

var pData = {
  labels: mobileUserData.labels,
  datasets: mobileUserData.datasets
}

var myLineChart = new Chart(lGraph, {
  type: 'line',
  data: lData,
  options: {
    legend: {
      display: false
    }
  }
});


// Bar Chart

var myBarChart = new Chart(bGraph, {
  type: 'bar',
  data: bData,
  options: {
    legend: {
      display: false
    }
  }
});


// Doughnut Chart

var myBarChart = new Chart(pChart, {
  type: 'doughnut',
  data: pData,
  options: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontSize: 15
      }
    }
  }
});



/**************************************
------------Messaging User-------------
**************************************/


$(".message-user .send").on('click', function () {
  if ($("#user-to-message").val() === "" && $("#message-for-user").val() === "") {
    // Both fields empty
    $("#submit-message").text("Please fill user and message fields.");
  } else if ($("#user-to-message").val() === "") {
    // User field empty
    $("#submit-message").text("Please fill user field.");
  } else if ($("#message-for-user").val() === "") {
    // Message field empty
    $("#submit-message").text("Please fill message field.");
  }
  else {
    // Message sent
    $("#submit-message").text("Your message was sent!");
    $("#user-to-message").val('');
    $("#message-for-user").val('');
  }

  $(".message-user-wrapper").addClass("blur");
  $(".send-response").show();
});
$(".send-response .dismiss").on("click", function () {
  $(".message-user-wrapper").removeClass("blur");
  $(".send-response").hide();
});


/**************************************
-----------------Alert-----------------
**************************************/

$("#close-alert").on("click", function () {
  $(".alert").fadeOut("slow");
  $("#new-notification").removeClass("new-notification")
});
