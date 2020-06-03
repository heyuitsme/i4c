function pcSubmit(){
    var src = "https://www.insurancehotline.com/Quote/Auto?postalCode=" + document.getElementsByName("postalCode")[0].value;
    var form = document.getElementById("postal-code");
    form.action = src;
}
