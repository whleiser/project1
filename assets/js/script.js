var selectedCoin;
var resultCal;
// currency converter API
function convertCur(to, amt) {
    fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=${to}&amount=${amt}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                "x-rapidapi-key": "72012d0cf5mshbb531b8073fcc64p101575jsna4be690cc62b"
            }
        }).then(response => {
            return response.json();
        })
        .then(response => {
            console.log("Currency Call", response);
            console.log(parseInt(response.rates[to].rate_for_amount).toFixed(2))
            resultCal = parseInt(response.rates[to].rate_for_amount).toFixed(2);
            document.getElementById("result").innerHTML = "Result: " + resultCal;
        })
        .catch(err => {
            console.log(err);
        });
}

// current coin info API
function getCoins(coinNum) {
    fetch(`https://coinranking1.p.rapidapi.com/coin/${coinNum}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "72012d0cf5mshbb531b8073fcc64p101575jsna4be690cc62b"
            }
        })
        .then(response => {
            return response.json();
        }).then(response => {
            console.log("Coin Call", response)
            selectedCoin = parseInt(response.data.coin.price);
            selectedCoin = selectedCoin.toFixed(2)
        })
        .catch(err => {
            console.log(err);
        });
}
$("#calculate").click(function() {
    var userCur = $("#currIn").val();
    convertCur(userCur, selectedCoin)
})
$("#coinIn").change(function(event) {
    getCoins(event.target.value)
})
var calculateBtn = document.querySelector("#calculate")
calculateBtn.addEventListener("click", function() {
    document.querySelector("#coinIn").value;
})
document.querySelector("#calculate", function() {
    document.querySelector("#currIn").value;
})
var calculateBtn = document.querySelector("#calculate")
calculateBtn.addEventListener("click", function() {
    document.querySelector("#currIn").value;
})