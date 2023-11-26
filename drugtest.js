function test() {
    window.location.href = '#test';
    var apiKey = "6wQGedfigIKwuiQTnYUr9y4RnX3FXH58RLZseQdy";
    var term = document.getElementById('search')
    $(".display").html("")
    var display = []
    var display = document.querySelector('.display')
    display.innerHTML = `<div class="loader"></div>`

    $.ajax({
        url: "https://api.fda.gov/drug/event.json?api_key=" + apiKey + "&search=" + term.value,
        dataType: "json",
        type: 'GET',

        success: function (data, err) {
            display.innerHTML=`<h1>Some Medinal Products are:</h1>`
            console.log(this.url, data)
            for (var i = 0; i < 100; i++) {
                if (data.results[0].patient.drug[i].medicinalproduct) {
                    var activesubstance = (data.results[0].patient.drug[i].medicinalproduct)
                    console.log(activesubstance, i)
                }
                if (data.results[0].patient.drug[i].openfda) {
                    var brand_name = (data.results[0].patient.drug[i].openfda.brand_name[0])
                    console.log(brand_name, i)
                }
                if (data.results[0].patient.drug[i].openfda) {
                    var generic_name = (data.results[0].patient.drug[i].openfda.generic_name[0])
                    console.log(generic_name, i)
                }
                if (data.results[0].patient.drug[i].openfda) {
                    var manufacturer_name = (data.results[0].patient.drug[i].openfda.manufacturer_name[0])
                    console.log(manufacturer_name, i)
                }
                if (data.results[0].patient.drug[i].openfda) {
                    var product_type = (data.results[0].patient.drug[i].openfda.product_type[0])
                    console.log(product_type,i)
                    display.innerHTML+=`<span><h6>Medicinal Product:${activesubstance}</h6><h5>Brand Name:${brand_name}</h5><h5>Generic Name:${generic_name}</h5><h5>Manufacturer Name:${manufacturer_name}</h5><h5>Prescription Type:${product_type}</h5></span>`
                }
                else{
                    display.innerHTML+=`</article>`
                }
                data.results[0].patient.drug[0]
            }
        }
    })
}