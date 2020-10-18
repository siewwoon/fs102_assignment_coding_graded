let txt = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let myProducts = JSON.parse(this.responseText);
        for (let count=0; count < myProducts.secondHandBook.length; count++){
            txt += "<div class='productitem'>";
            txt += "<img src='" + myProducts.secondHandBook[count].image + " ' " + "class='image'" + "'>";
            txt += "<div class='overlay'>";
            txt += "<div class='productDescription'>";
            txt += "Title: " + myProducts.secondHandBook[count].name + "<br>";
            txt += "Currency: " + myProducts.secondHandBook[count].currency + "<br>";
            txt += "Price: " + myProducts.secondHandBook[count].price + "<br>";
            txt += "</div>" + "</div>" + "</div>";
        }
      }
      document.getElementById("product").innerHTML = txt;
    };

    
xhttp.open("GET", "product.json",true);
xhttp.send ();


