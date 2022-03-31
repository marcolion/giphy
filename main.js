function callHome() {
  
}

let APIKEY = "6M9mwaYtMy8OZHJrzoMJiA82sk8CJxhO";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=6&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    fetch(url)
      .then(response => response.json())
      .then(content => {
        // First Image
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        let rt = document.createElement("rating");
        img.src = content.data[0].images.fixed_height.url;
        fc.alt = content.data[0].title;
        rt.alt = content.data[0].rating;
        fc.textContent = content.data[0].title;
        rt.textContent = content.data[0].rating;
        fig.appendChild(img);
        fig.appendChild(fc);
        fig.appendChild(rt);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", fig);
        let tt = document.querySelector(".tt");
        tt.insertAdjacentElement("afterbegin", fc);
        let rtn = document.querySelector(".rtn");
        rtn.insertAdjacentElement("afterbegin", rt);

        // Second Image
        let figa = document.createElement("figure");
        let imga = document.createElement("img");
        let fca = document.createElement("figcaption");
        let rta = document.createElement("rating");
        imga.src = content.data[1].images.fixed_height.url;
        fca.alt = content.data[1].title;
        rta.alt = content.data[1].rating;
        fca.textContent = content.data[1].title;
        rta.textContent = content.data[1].rating;
        figa.appendChild(imga);
        figa.appendChild(fca);
        figa.appendChild(rta);
        let outa = document.querySelector(".outa");
        outa.insertAdjacentElement("afterbegin", figa);
        let tta = document.querySelector(".tta");
        tta.insertAdjacentElement("afterbegin", fca);
        let rtna = document.querySelector(".rtna");
        rtna.insertAdjacentElement("afterbegin", rta);

        // Third Image
        let figb = document.createElement("figure");
        let imgb = document.createElement("img");
        let fcb = document.createElement("figcaption");
        let rtb = document.createElement("rating");
        imgb.src = content.data[2].images.fixed_height.url;
        fcb.alt = content.data[2].title;
        rtb.alt = content.data[2].rating;
        fcb.textContent = content.data[2].title;
        rtb.textContent = content.data[2].rating;
        figb.appendChild(imgb);
        figb.appendChild(fcb);
        figb.appendChild(rtb);
        let outb = document.querySelector(".outb");
        outb.insertAdjacentElement("afterbegin", figb);
        let ttb = document.querySelector(".ttb");
        ttb.insertAdjacentElement("afterbegin", fcb);
        let rtnb = document.querySelector(".rtnb");
        rtnb.insertAdjacentElement("afterbegin", rtb);

        document.querySelector("#search").value = "";
      })
      .catch(err => {
        console.error(err);
      });
  });
}