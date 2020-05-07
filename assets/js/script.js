// currency converter API
fetch("https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=EUR&amount=4", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "72012d0cf5mshbb531b8073fcc64p101575jsna4be690cc62b"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

// list of all coins API
fetch("https://coinranking1.p.rapidapi.com/coins", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "72012d0cf5mshbb531b8073fcc64p101575jsna4be690cc62b"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

// current coin info API
fetch("https://coinranking1.p.rapidapi.com/coin/1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "72012d0cf5mshbb531b8073fcc64p101575jsna4be690cc62b"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });