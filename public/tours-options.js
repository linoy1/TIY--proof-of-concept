function load_h1() {
    const tours = ["TIY-Parks", "TIY-Restaurant", "TIY-Culture", "TIY-Sport"];
    const list = document.getElementById("boxes");
    const images = [
        "public/images/map1.jpg",
        "public/images/map2.jpg",
        "public/images/map3.jpg",
        "public/images/map4.jpg",
    ];

    for (i = 0; i < 4; i++) {
        const link = document.createElement("a");
        link.innerText = tours[i];
        list.appendChild(link);
    }

    const Alist = document.getElementsByTagName("a");
    for (i = 0; i < 4; i++) {
        const img = document.createElement("img");
        img.innerHTML = images[i];
        Alist[i].appendChild(images);
    }
}