var req = new XMLHttpRequest();
var method = 'GET';
var url = 'http://www.omdbapi.com/?apikey=8ab977c&s=';
var titre = document.getElementById("title");

req.open(method, url + titre.value);


req.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            var obj = JSON.parse(this.response);
            var btn = document.getElementById("search");

            //btn event recherche un film et recharge la page
            btn.addEventListener("click", function (e) {
                location.reload();
                e.preventDefault();
            });
            console.log(this.responseText);

            var div0 = document.createElement("div");
            var body = document.querySelector("body");

            div0.className = "d-flex row justify-content-around";

            //affiche les films de la recherche
           obj.Search.forEach(element => {
            
                var div = document.createElement("div");
                var img = document.createElement("img");
                var div2 = document.createElement("div");
                var h5 = document.createElement("h5");

                img.setAttribute('src', `${element.Poster}`);
                img.className = "card-img-top";
                img.style = "width: 250px; height: 250px;";
                div.appendChild(img);
                
                div2.className = "card-body";
                div2.className = ""

                h5.innerHTML = element.Title;
                h5.className = "card-title";
                div2.appendChild(h5);

                div.style = "width: 250px; height: 350px;";
                div.className = "card mb-4 ";
                div.appendChild(div2);
                
                div0.appendChild(div);
            });
            body.appendChild(div0);

        } else {
            console.log('Probleme');
        }
    }
}


req.send();