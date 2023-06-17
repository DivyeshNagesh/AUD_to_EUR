function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 0.62; // Use the current exchange rate between AUD and EUR
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in EUR: " + result.toFixed(2);
  }  