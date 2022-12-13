function tours() {
    const tours = ["TIY-Parks", "TIY-Restaurant", "TIY-Culture", "TIY-Sport"];
    const sub_headers = [
        "Travel In Ramat Gan Park's",
        "Travel In Ramat Gan Restaurant's",
        "Enjoy Ramat Gan Culture's",
        "Enjoy from Ramat Gan Sport's",
    ];

    const list = document.getElementById("boxes");
    const Alist = document.getElementsByTagName("a");

    var images = new Array();

    images[0] = new Image();
    images[0].src = "/public/images/map1.jpg";

    images[1] = new Image();
    images[1].src = "/public/images/map2.jpg";

    images[2] = new Image();
    images[2].src = "/public/images/map3.jpg";

    images[3] = new Image();
    images[3].src = "/public/images/map4.jpg";

    for (i = 0; i < 4; i++) {
        const link = document.createElement("a");
        // link.innerText = tours[i];
        link.setAttribute("href", "#");
        list.appendChild(link);
    }

    for (i = 0; i < 4; i++) {
        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        const h4 = document.createElement("h4");

        img.innerHTML = images[i];
        h1.innerHTML = tours[i];
        h4.innerHTML = sub_headers[i];

        Alist[i].appendChild(images[i]);
        Alist[i].appendChild(h1);
        Alist[i].appendChild(h4);
    }
}