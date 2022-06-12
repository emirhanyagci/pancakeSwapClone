const toggleTheme = document.querySelector(".toggleTheme");
const activeTheme = document.querySelector(".activeTheme");
const HMTL = document.querySelector("html");
const lightIcon = document.querySelector(".lightIcon");
const darkIcon = document.querySelector(".darkIcon");

const chartDate = document.querySelector(".chartDate");
const dateNow = new Date().toString();
chartDate.textContent = `${dateNow.substring(3, 11)},${dateNow.substring(
  11,
  15
)},${new Date().getHours()}:${new Date().getSeconds()}`;
function setTheme(isDark) {
  if (isDark == "true") {
    HMTL.classList.add("dark");

    lightIcon.src = "../img/darkSun.svg";
    darkIcon.src = "../img/darkMoon.svg";
    activeTheme.children[0].src = "../img/moon.svg";
    localStorage.setItem("isDark", "true");
    activeTheme.classList.remove("lightT");
  } else if (isDark == "false") {
    HMTL.classList.remove("dark");
    lightIcon.src = "../img/svgexport-33.svg";
    darkIcon.src = "../img/svgexport-34.svg";
    activeTheme.children[0].src = "../img/svgexport-32.svg";
    localStorage.setItem("isDark", "false");
    activeTheme.classList.add("lightT");
  }
}
//check local storage n set theme
setTheme(localStorage.getItem("isDark"));
toggleTheme.addEventListener("click", (e) => {
  activeTheme.classList.toggle("lightT");
  if (activeTheme.classList.contains("lightT")) {
    setTheme("false");
  } else {
    setTheme("true");
  }
});

//CHART SETTİNGS
var chart = document.getElementById("myChart").getContext("2d");
var gradient = chart.createLinearGradient(0, 0, 0,400);

gradient.addColorStop(0, "rgba(195, 246, 238,0.9)");

gradient.addColorStop(0.2, "rgba(129, 201, 184,0.3)");
gradient.addColorStop(1, "white");
const datas = [11,15,30,50,55,47,60,41,42,53,56,61,64,70,68,66];

const labels = [
  "",
  "09:00 PM",
  "03:00 AM",
  "07:00 AM",
  "010:00 AM",
  "0:00 AM",
  "01:00 PM",
  "03:53 PM",
];
const newLabels = labels.map((item)=>{
    return item + "a"+" " + "a";

})

const labelsLast = newLabels.join("").split("a");



const data = {
  labels: labelsLast,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: gradient,
      borderColor: "rgba(63, 183, 154,0.5)",
      data: datas,
      fill: true,
    },
  ],
};

const confisg = {
  type: "line",
  data: data,
  options: {
    elements: {
        point:{
            radius: 0
        }
    },
    layout: {
      padding: {
        left: 80
      }
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

document.querySelector("#myChart").addEventListener("click",()=>{
 
    const points = myChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

    if (points.length) {
        const firstPoint = points[0];
        var label = myChart.data.labels[firstPoint.index];
        var value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        alert(label +" : "+ value);
  
  }
})

/* ARKA GRİDLERİ GİZLEME
  const confisg = {
      type: 'line',
      data: data,
      options: {
      scales: {
          x: {
              grid:{
                  display:false
              }
          },
          y: {
              grid:{
                  display:false
              }
          }
      }
      }
  };
  */
/*ÜSTTEKİ BOXI KALDIRIR
   options: {
      scales: {
          x: {
              grid:{
                  display:false
              }
          },
          y: {
              grid:{
                  display:false
              }
          },
          
     },
     plugins: {
          legend: {
              display: false,
          } 
      } 
    
  }*/
//CHART SETTİNGS


//RİGHT SİDE CODES
const changeToken = document.querySelector(".changeTokens");
changeToken.addEventListener("mouseenter",()=>{
  changeToken.style.backgroundColor = "rgb(31, 199, 212)";
  changeToken.classList.remove("bg-[#eeeaf4]");
  changeToken.children[0].src = "../img/switchToken.svg"
})
changeToken.addEventListener("mouseleave",()=>{
  changeToken.style.backgroundColor = "";
  changeToken.classList.add("bg-[#eeeaf4]");
  changeToken.children[0].src = "../img/svgexport-18.svg"
})
//RİGHT SİDE CODES


//WEB3
//connect wallet
const connectBtn = document.querySelectorAll(".connectWallet");
const walletStatus = document.querySelector(".walletStat");
const swapConfirmBtn = document.querySelector(".swapConfirmBtn");


async function connectSettings(account){
  
  //delete all connect btn
  connectBtn[0].classList.add("hidden");
  connectBtn[1].classList.add("hidden");
  
  swapConfirmBtn.classList.remove("hidden");
  walletStatus.classList.remove("hidden");
  
  const accountShort = `${account.substring(0,4)}...${account.substring(account.length-4,account.length)}`;
  walletStatus.children[1].textContent = accountShort;
  localStorage.setItem("wallet",account);
}

//Check user already connected 
try{
  if(localStorage.getItem("wallet").length > 1){

    connectSettings(localStorage.getItem("wallet"));
  }
}catch(er){}


connectBtn.forEach((btn)=>{
  btn.addEventListener("click",async ()=>{
    //get user chainid
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    if(typeof window.ethereum !== 'undefined' && chainId == "0x2a") {
      const accounts =await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      connectSettings(account);

      showAlert("Connected Succesfully","resolve",3000);
    }else if(chainId != "0x2a"){
      showAlert("You should change your chain","wait",2000);
      ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x2a' }],
        
      })
      .then(async (data)=>{
        //if chain change succes send connect wallet ask auto
        const accounts =await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        connectSettings(account);
        showAlert("Connected Succesfully","resolve",3000)
      })
      .catch(()=>{
        showAlert("Change failed","reject",2000);
      })
    }
  })
})



//WEB3


//My functions 
const closeAlert = document.querySelector(".closeAlert");
function showAlert(message,status,duration){
  const alertBox = document.querySelector(".alert");
 
  alertBox.classList.remove("-top-52");
  alertBox.classList.add("top-10");
  alertBox.children[0].textContent = message;
  if(status == "wait"){
    alertBox.style.color = "rgb(40, 13, 95)";
    alertBox.style.background = "linear-gradient(rgb(255, 178, 55) 0%, rgb(255, 205, 81) 51.17%, rgb(255, 231, 106) 100%)";
   
  }else if(status == "resolve"){
    alertBox.style.color = "white";
    alertBox.style.background = "linear-gradient(rgb(49, 208, 170) 0%, rgb(49, 208, 170) 51.17%, rgb(49, 208, 170) 100%)";
  }else if(status == "reject"){
    alertBox.style.color = "white";
    alertBox.style.background = "linear-gradient(rgb(237, 75, 158,.9) 0%, rgb(219, 98, 161) 51.17%, rgb(233, 120, 178) 100%)";
  }
  setTimeout(()=>{
    alertBox.classList.add("-top-52");
    alertBox.classList.remove("top-10");
  },duration)
}

closeAlert.addEventListener("click",()=>{
  const alertBox = document.querySelector(".alert");


  alertBox.classList.add("-top-52");
  alertBox.classList.remove("top-10");
})

//TOOD : KULLANICI ÇIKIŞI YAP