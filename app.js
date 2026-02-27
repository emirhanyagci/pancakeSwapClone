const toggleTheme = document.querySelector(".toggleTheme");
const activeTheme = document.querySelector(".activeTheme");
const HMTL = document.querySelector("html");
const lightIcon = document.querySelector(".lightIcon");
const darkIcon = document.querySelector(".darkIcon");
const chartDate = document.querySelector(".chartDate");
const walletStatImg = document.querySelector(".walletStatImg");

const dateNow = new Date().toString();
chartDate.textContent = `${dateNow.substring(3, 11)},${dateNow.substring(
  11,
  15
)},${new Date().getHours()}:${new Date().getSeconds()}`;

var TokensDB = null;
var $firstToken = "HAN";
var $twiceToken = "UBXS";

const appContainer = document.querySelector(".appContainer");
const spinner = document.querySelector(".sk-circle");

fetch("tokens.json")
  .then((data) => {
    return data.json();
  })
  .then((data2) => {
    TokensDB = data2;

    appContainer.classList.remove("hidden");
    spinner.classList.add("hidden");
    document.body.style = "";

    const tokensWrapper = document.querySelector(".tokensWrapper ");
    //set all options
    for (var el in data2) {
      let optionsTokenSyntax = `
    <div class="tokenItem transition-all cursor-pointer px-6 py-3 flex items-center hover:bg-[#faf9fa]">
      <div class="mr-3"><img src="${data2[el][0].url}" width="25px" alt=""></div>
      <div class="flex flex-col">
        <span class="text-pDark font-semibold dark:text-white">${data2[el][0].name}</span>
        <span class="text-[#7a6eaa] text-[.90rem] dark:text-pDark-soft">${data2[el][0].fullName}</span>
      </div>
    </div>
  `;
      tokensWrapper.innerHTML += optionsTokenSyntax;
    }
  });

var datas = [81, 15, 30, 50, 55, 47, 60, 41, 42, 53, 56, 61, 64, 70, 68, 66.2];
var labels = [
  "",
  "09:00 PM",
  "03:00 AM",
  "07:00 AM",
  "10:00 AM",
  "0:00 AM",
  "01:00 PM",
  "03:53 PM",
];

const chartHourseBtn = document.querySelector(".chartHourseBtn");
const chartWeekBtn = document.querySelector(".chartWeekBtn");
const chartMonthBtn = document.querySelector(".chartMonthBtn");
const chartYearBtn = document.querySelector(".chartYearBtn");

const chartTimeTypes = Array.from(
  document.querySelector(".chartTimeSet").children
);

//change time chart as selected type
chartHourseBtn.addEventListener("click", () => {
  datas = [81, 15, 30, 50, 55, 47, 60, 41, 42, 53, 56, 61, 64, 70, 68, 66.2];
  labels = [
    "",
    "09:00 PM",
    "03:00 AM",
    "07:00 AM",
    "10:00 AM",
    "0:00 AM",
    "01:00 PM",
    "03:53 PM",
  ];

  chartTimeTypes.forEach((item) => {
    item.classList.remove("chartHoursActive");
  });
  chartTimeTypes[0].classList.add("chartHoursActive");

  createChart();
});

chartWeekBtn.addEventListener("click", () => {
  const month = new Date().toString().substring(3, 7);
  const day = new Date().getDate();

  datas = [
    67.93, 69.08, 65.08, 64.8, 64.92, 65.34, 65.09, 64.65, 65.67, 67.87, 67.72,
    67.93, 67.75, 67.72, 65.88, 65.56, 69.44, 69.7,
  ];
  labels = [
    "",
    `${month} ${day - 7}`,
    `${month} ${day - 6}`,
    `${month} ${day - 5}`,
    `${month} ${day - 4}`,
    `${month} ${day - 3}`,
    `${month} ${day - 2}`,
    `${month} ${day - 1}`,
    `${month} ${day}`,
  ];
  createChart();

  chartTimeTypes.forEach((item) => {
    item.classList.remove("chartHoursActive");
  });
  chartTimeTypes[1].classList.add("chartHoursActive");
});
chartMonthBtn.addEventListener("click", () => {
  datas = [11, 15, 30, 50, 55, 47, 60, 41, 42, 53, 56, 61, 64, 70, 68, 66];
  labels = [
    "",
    "09:00 PM",
    "03:00 AM",
    "07:00 AM",
    "10:00 AM",
    "0:00 AM",
    "01:00 PM",
    "03:53 PM",
  ];
  chartTimeTypes.forEach((item) => {
    item.classList.remove("chartHoursActive");
  });
  chartTimeTypes[2].classList.add("chartHoursActive");
  createChart();
});
chartYearBtn.addEventListener("click", () => {
  const month = new Date().toString().substring(3, 7);
  const day = new Date().getDate();

  datas = [
    67.93, 69.08, 65.08, 64.8, 64.92, 65.34, 65.09, 64.65, 65.67, 67.87, 67.72,
    67.93, 67.75, 67.72, 65.88, 65.56, 67.8,
  ];
  labels = [
    "",
    `${month} ${day - 7}`,
    `${month} ${day - 6}`,
    `${month} ${day - 5}`,
    `${month} ${day - 4}`,
    `${month} ${day - 3}`,
    `${month} ${day - 2}`,
    `${month} ${day - 1}`,
    `${month} ${day}`,
  ];
  chartTimeTypes.forEach((item) => {
    item.classList.remove("chartHoursActive");
  });
  chartTimeTypes[3].classList.add("chartHoursActive");
  createChart();
});

//SWAP PROCCES
// token datas at right area
const firstTokenInp = document.querySelector(".firstTokenInp");
const twiceTokenInp = document.querySelector(".twiceTokenInp");
const firstTokenImg = document.querySelector(".firstTokenImg");
const twiceTokenImg = document.querySelector(".twiceTokenImg");
const firstTokenName = document.querySelector(".firstTokenName");
const twiceTokenName = document.querySelector(".twiceTokenName");

//TOKEN DATAS CONTAİNERS AT CHART
const tokensImgnName = document.querySelector(".tokensImgnName");
const tokensPricenName = document.querySelector(".tokensPrice");
const hiddenTwiceToken = document.querySelector(".hiddenTwiceToken");
//token change buttons
const changeTokenBtn = document.querySelector(".changeTokens");
const changeTokenFChart = document.querySelector(".chartChange");

changeTokenBtn.addEventListener("click", () => {
  let firstTokenValue = firstTokenInp.value;
  let twiceTokenValue = twiceTokenInp.value;
  // let firstTokenSource = firstTokenImg.src;
  // let twiceTokenSource = twiceTokenImg.src;
  // let firstTokenContent = firstTokenName.textContent;
  // let twiceTokenContent = twiceTokenName.textContent;

  firstTokenInp.value = twiceTokenValue;
  twiceTokenInp.value = firstTokenValue;
  // firstTokenImg.src = twiceTokenSource;
  // twiceTokenImg.src = firstTokenSource;
  // firstTokenName.textContent = twiceTokenContent;
  // twiceTokenName.textContent = firstTokenContent;
  swapTokenDatas();
});
changeTokenFChart.addEventListener("click", () => {
  swapTokenDatas();
});
function swapTokenDatas(index) {
  var tokensName = [firstTokenName.textContent, twiceTokenName.textContent];
  var tokensSrc = [firstTokenImg.src, twiceTokenImg.src];
  var tokensPrice = [
    TokensDB[tokensName[0]][0].price,
    TokensDB[tokensName[1]][0].price,
  ];

  $firstToken = tokensName[1];
  $twiceToken = tokensName[0];

  tokensImgnName.children[0].src = tokensSrc[1];
  tokensImgnName.children[1].src = tokensSrc[0];
  tokensImgnName.children[2].textContent = tokensName[1];
  tokensImgnName.children[4].textContent = tokensName[0];
  tokensPricenName.children[0].textContent = (
    tokensPrice[1] / tokensPrice[0]
  ).toFixed(3);

  tokensPricenName.children[2].textContent = tokensName[1];
  tokensPricenName.children[4].textContent = tokensName[0];
  hiddenTwiceToken.textContent = tokensPrice[0];

  firstTokenImg.src = tokensSrc[1];
  twiceTokenImg.src = tokensSrc[0];
  firstTokenName.textContent = tokensName[1];
  twiceTokenName.textContent = tokensName[0];
  if (index == 0) {
  } else if (index == 1) {
  }
}

function calculateRate(from) {
  if (from == "first") {
          firtsTokenPrice = Number(TokensDB[$firstToken][0].price);
          twiceTokenPrice = Number(TokensDB[$twiceToken][0].price);

          let tokensPriceRatio = firtsTokenPrice / twiceTokenPrice;

          if (firtsTokenPrice > twiceTokenPrice) {
            twiceTokenInp.value = (firstTokenInp.value * tokensPriceRatio).toFixed(6);
          } else if (firtsTokenPrice < twiceTokenPrice) {
            console.log(firstTokenInp.value, tokensPriceRatio);
            twiceTokenInp.value = (firstTokenInp.value * tokensPriceRatio).toFixed(6);
          } else {
            twiceTokenInp.value = firstTokenInp.value;
          }
  } else if ((from == "twice")) {
          firtsTokenPrice = Number(TokensDB[$firstToken][0].price);
          twiceTokenPrice = Number(TokensDB[$twiceToken][0].price);

          let tokensPriceRatio = twiceTokenPrice / firtsTokenPrice;
          if (firtsTokenPrice > twiceTokenPrice) {
            firstTokenInp.value = (twiceTokenInp.value * tokensPriceRatio).toFixed(6);
          } else if (firtsTokenPrice < twiceTokenPrice) {
            console.log(firstTokenInp.value, tokensPriceRatio);
            firstTokenInp.value = (twiceTokenInp.value * tokensPriceRatio).toFixed(6);
          } else {
            firstTokenInp.value = twiceTokenInp.value;
          }
  }
}

var firtsTokenPrice = "";
var twiceTokenPrice = "";
//CALCULATE DİFFRENCE OF TOKENS PRİCE
firstTokenInp.addEventListener("input", () => {
  // firtsTokenPrice = Number(TokensDB[$firstToken][0].price);
  // twiceTokenPrice = Number(TokensDB[$twiceToken][0].price);

  // let tokensPriceRatio = firtsTokenPrice / twiceTokenPrice;

  // if (firtsTokenPrice > twiceTokenPrice) {
  //   twiceTokenInp.value = (firstTokenInp.value * tokensPriceRatio).toFixed(6);
  // } else if (firtsTokenPrice < twiceTokenPrice) {
  //   console.log(firstTokenInp.value, tokensPriceRatio);
  //   twiceTokenInp.value = (firstTokenInp.value * tokensPriceRatio).toFixed(6);
  // }else{
  //   twiceTokenInp.value = firstTokenInp.value;
  // }
  calculateRate("first");
  console.log("first");
});

twiceTokenInp.addEventListener("input", () => {
  calculateRate("twice");
  console.log("twice");
});

const chooseTokenBtns = document.querySelectorAll(".choseTokenWrap");
const tokenPopup = document.querySelector(".selectToken");
const popupBg = document.querySelector(".popupBackground");
const closeTokenPopup = document.querySelector(".closeTokenPopup");
const tokenOptWrapper = document.querySelector(".tokensWrapper");
const searchTokenInp = document.querySelector(".searchTokenInp ");

const swapConfirmBtn = document.querySelector(".swapConfirmBtn");

chooseTokenBtns.forEach((item, index) => {
  var whichChose = "";
  item.addEventListener("click", () => {
    whichChose = index;
    console.log(whichChose);
    let tokenOptions = document.querySelectorAll(".tokensWrapper > div");
    tokenPopup.classList.remove("hidden");
    popupBg.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    closeTokenPopup.addEventListener("click", () => {
      tokenPopup.classList.add("hidden");
      popupBg.classList.add("hidden");
      document.body.style.overflow = "visible";
    });
    popupBg.addEventListener("click", () => {
      tokenPopup.classList.add("hidden");
      popupBg.classList.add("hidden");
      document.body.style.overflow = "visible";
    });

    //chose any token
    tokenOptions.forEach((tokens) => {
      //when user choose token change ui
      tokens.addEventListener("click", (ev) => {
        let selectedTokenName =
          ev.currentTarget.children[1].children[0].textContent;
        let selectedTokenSource = ev.currentTarget.children[0].children[0].src;
        console.log(whichChose);
        if (whichChose === 0) {
          firstTokenImg.src = selectedTokenSource;
          firstTokenName.textContent = selectedTokenName;
          //set token name because we will get price at another function
          $firstToken = selectedTokenName;
          whichChose = "";
          console.log("111");
          calculateRate("first");
        } else if (whichChose === 1) {
          twiceTokenImg.src = selectedTokenSource;
          twiceTokenName.textContent = selectedTokenName;
          //set token name because we will get price at another function
          $twiceToken = selectedTokenName;
          whichChose = "";

          calculateRate("twice");
        }
        //swap two time because we want set datas not change them place
        swapTokenDatas();
        swapTokenDatas();
        document.body.style.overflow = "visible";
        tokenPopup.classList.add("hidden");
        popupBg.classList.add("hidden");
      });
    });
  });
});
searchTokenInp.addEventListener("input", (ev) => {
  const tokenItems = document.querySelectorAll(".tokenItem");

  tokenItems.forEach((tokens) => {
    if (tokens.textContent.includes(searchTokenInp.value)) {
      console.log(tokens);
      tokens.classList.remove("hidden");
    } else {
      tokens.classList.add("hidden");
    }
  });
});
function setTheme(isDark) {
  if (isDark == "true") {
    virtualLabels = labels;
    virtualDatas = datas;

    HMTL.classList.add("dark");
    lightIcon.src = "./img/darkSun.svg";
    darkIcon.src = "./img/darkMoon.svg";
    activeTheme.children[0].src = "./img/moon.svg";
    localStorage.setItem("isDark", "true");
    activeTheme.classList.remove("lightT");
    walletStatImg.src = "./img/whiteArrowB.svg";
    createChart();
  } else {
    virtualLabels = labels;
    virtualDatas = datas;

    HMTL.classList.remove("dark");
    lightIcon.src = "./img/svgexport-33.svg";
    darkIcon.src = "./img/svgexport-34.svg";
    activeTheme.children[0].src = "./img/svgexport-32.svg";
    localStorage.setItem("isDark", "false");
    activeTheme.classList.add("lightT");
    //setChartLinear("rgba(195, 246, 238,0.3)","rgba(129, 201, 184,0.3)","white");
    if (datas[0] < datas[datas.length - 1]) {
      createChart();
    } else {
      console.log("pink");

      createChart();
    }
  }
}

//set gradient for chart and  check local storage n set theme
var chart = document.getElementById("myChart").getContext("2d");
var gradient = chart.createLinearGradient(20, 0, 0, 500);

var chartBorderCOlor = "";
setTheme(localStorage.getItem("isDark"));

toggleTheme.addEventListener("click", (e) => {
  activeTheme.classList.toggle("lightT");
  if (activeTheme.classList.contains("lightT")) {
    setTheme("false");

    createChart();
  } else {
    setTheme("true");
    createChart();
  }
});

//create chart according to the theme
function createChart() {
  let borderColor, color1, color2, color3;

  if (datas[0] < datas[datas.length - 1]) {
    borderColor = "rgb(72, 209, 170,.5)";
    color1 = "rgba(49, 235, 182,0.2)";
    color2 = "rgba(57, 204, 162,0.09)";
    color3 = "rgba(57, 204, 162,0.01)";
  } else {
    borderColor = "rgb(255, 0, 130,.5)";
    color1 = "rgba(255, 0, 130,0.1)";
    color2 = "rgba(209, 92, 152,0.1)";
    color3 = "transparent";
  }
  document.querySelector("#myChart").remove();
  var $myChart = document.createElement("canvas");

  $myChart.id = "myChart";
  document.querySelector(".chartContainer").append($myChart);
  chart = document.getElementById("myChart").getContext("2d");
  gradient = chart.createLinearGradient(20, 0, 0, 500);

  gradient.addColorStop(0.3, color1);
  gradient.addColorStop(0.5, color2);
  gradient.addColorStop(1, color3);

  const newLabels = labels.map((item) => {
    return item + "a" + " " + "a";
  });

  const labelsLast = newLabels.join("").split("a");

  const data = {
    labels: labelsLast,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: gradient,
        borderColor: borderColor,
        data: datas,
        fill: true,
      },
    ],
  };

  const confisg = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
        },
      },
      layout: {
        padding: {
          left: 80,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            drawBorder: false,

            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), confisg);
}

//right area swap btn animation
changeTokenBtn.addEventListener("mouseenter", () => {
  changeTokenBtn.style.backgroundColor = "rgb(31, 199, 212)";
  changeTokenBtn.classList.remove("bg-[#eeeaf4]");
  changeTokenBtn.children[0].src = "./img/switchToken.svg";
});
changeTokenBtn.addEventListener("mouseleave", () => {
  changeTokenBtn.style.backgroundColor = "";
  changeTokenBtn.classList.add("bg-[#eeeaf4]");
  changeTokenBtn.children[0].src = "./img/svgexport-18.svg";
});

//wallet status aniatmion
const walletStatus = document.querySelector(".walletStat");
const walletSetting = document.querySelector(".walletSetting");

walletStatus.addEventListener("mouseenter", () => {
  walletSetting.classList.add("active");
});

walletStatus.addEventListener("mouseleave", (ev) => {
  walletSetting.classList.remove("active");
});

walletSetting.addEventListener("mouseenter", () => {
  walletSetting.classList.add("active");
});
walletSetting.addEventListener("mouseleave", () => {
  walletSetting.classList.remove("active");
});

//WEB3
//connect wallet
const connectBtn = document.querySelectorAll(".connectWallet");

async function connectSettings(account) {
  //delete all connect btn
  connectBtn[0].classList.add("hidden");
  connectBtn[1].classList.add("hidden");

  swapConfirmBtn.classList.remove("hidden");
  walletStatus.classList.remove("hidden");
  const accountShort = `${account.substring(0, 4)}...${account.substring(
    account.length - 4,
    account.length
  )}`;
  walletStatus.children[1].textContent = accountShort;

  localStorage.setItem("wallet", account);
}
async function disconnectSettings() {}
//Check user already connected
try {
  if (localStorage.getItem("wallet").length > 1) {
    connectSettings(localStorage.getItem("wallet"));
  }
} catch (er) {}

connectBtn.forEach((btn) => {
  btn.addEventListener("click", async () => {
    //get user chainid
    const chainId = await ethereum.request({ method: "eth_chainId" });

    if (typeof window.ethereum !== "undefined" && chainId == "0x2a") {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      connectSettings(account);

      showAlert("Connected Succesfully", "resolve", 3000);
    } else if (chainId != "0x2a") {
      showAlert("You should change your chain", "wait", 2000);
      ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x2a" }],
        })
        .then(async (data) => {
          //if chain change succes send connect wallet ask auto
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0];

          connectSettings(account);
          showAlert("Connected Succesfully", "resolve", 3000);
        })
        .catch(() => {
          showAlert("Change failed", "reject", 2000);
        });
    }
  });
});

//disconnect settings

const disconnectBtn = document.querySelector(".w-disconnect");

disconnectBtn.addEventListener("click", () => {
  localStorage.setItem("wallet", "");
  location.reload();
  localStorage.setItem("wallet", "");
});

//WEB3

//My functions
const closeAlert = document.querySelector(".closeAlert");

function showAlert(message, status, duration) {
  const alertBox = document.querySelector(".alert");

  alertBox.classList.remove("-top-52");
  alertBox.classList.add("top-10");
  alertBox.children[0].textContent = message;
  if (status == "wait") {
    alertBox.style.color = "rgb(40, 13, 95)";
    alertBox.style.background =
      "linear-gradient(rgb(255, 178, 55) 0%, rgb(255, 205, 81) 51.17%, rgb(255, 231, 106) 100%)";
  } else if (status == "resolve") {
    alertBox.style.color = "white";
    alertBox.style.background =
      "linear-gradient(rgb(49, 208, 170) 0%, rgb(49, 208, 170) 51.17%, rgb(49, 208, 170) 100%)";
  } else if (status == "reject") {
    alertBox.style.color = "white";
    alertBox.style.background =
      "linear-gradient(rgb(237, 75, 158,.9) 0%, rgb(219, 98, 161) 51.17%, rgb(233, 120, 178) 100%)";
  }
  setTimeout(() => {
    alertBox.classList.add("-top-52");
    alertBox.classList.remove("top-10");
  }, duration);
}

closeAlert.addEventListener("click", () => {
  const alertBox = document.querySelector(".alert");

  alertBox.classList.add("-top-52");
  alertBox.classList.remove("top-10");
});

//TODO KULLANCII DEĞER GİRDİĞİND EBUTONU VE BUTTONLA BİRLİTKE ÇIKAN ŞEYLERİ EKLE
//TODO kullanici  dc olunca localstorage sil
//TODO altta seçme ekle
