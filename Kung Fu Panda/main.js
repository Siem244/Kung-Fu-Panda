
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", themeChange);

function btnClicked() {
    let name = document.getElementById("char-in").value.toLowerCase();
    let charNameEl = document.getElementById("char-name");
    let charQuoteEl = document.getElementById("char-quote");
    let charImgEl = document.getElementById("char-img");

    if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
        charNameEl.innerHTML = "Po";
        charQuoteEl.innerHTML = "Buddy, Im Dragon Warrior";
        charImgEl.src = "img/po.png";
    } else if (name === "tigress" || name === "master tigress" || name === "fierce tiger") {
        charNameEl.innerHTML = "Tigress";
        charQuoteEl.innerHTML = "that was hardcore!";
        charImgEl.src = "img/tigress.png";
    } else if (name === "mantis" || name === "tiny terror" || name === "green fury") {
        charNameEl.innerHTML = "Mantis";
        charQuoteEl.innerHTML = "Fear the Bug!";
        charImgEl.src = "img/mantis.png";
    } else if (name === "monkey" || name === "trickster" || name === "kung fu chimp") {
        charNameEl.innerHTML = "Monkey";
        charQuoteEl.innerHTML = "We do what we do best!";
        charImgEl.src = "img/monkey.png";
    } else if (name === "boss wolf" || name === "alpha wolf" || name === "wolf leader") {
        charNameEl.innerHTML = "Boss Wolf";
        charQuoteEl.innerHTML = "Find the Dragon Warrior!";
        charImgEl.src = "img/boss-Wolf.png";
    } else if (name === "crane" || name === "sky warrior" || name === "feather master") {
        charNameEl.innerHTML = "Crane";
        charQuoteEl.innerHTML = "Wings of Justice!";
        charImgEl.src = "img/crane.png";
    } else if (name === "croc" || name === "big jaw" || name === "croc champ") {
        charNameEl.innerHTML = "Croc";
        charQuoteEl.innerHTML = "Justice never rests!";
        charImgEl.src = "img/croc.png";
    } else if (name === "kai" || name === "spirit warrior" || name === "chi thief") {
        charNameEl.innerHTML = "Kai";
        charQuoteEl.innerHTML = "You may have defeated me, but you will never be rid of me.";
        charImgEl.src = "img/kai.png";
    } else if (name === "mr ping" || name === "noodle man" || name === "father goose") {
        charNameEl.innerHTML = "Mr Ping";
        charQuoteEl.innerHTML = "Noodles, dumplings, happiness!";
        charImgEl.src = "img/mr-ping.png";
    } else if (name === "oogway" || name === "master oogway" || name === "wise tortoise") {
        charNameEl.innerHTML = "Oogway";
        charQuoteEl.innerHTML = "There are no accidents.";
        charImgEl.src = "img/oogway.png";
    } else if (name === "shen" || name === "lord shen" || name === "peacock tyrant") {
        charNameEl.innerHTML = "Shen";
        charQuoteEl.innerHTML = "The only thing that matters is what you choose to be now.";
        charImgEl.src = "img/shen.png";
    } else if (name === "shifu" || name === "master shifu" || name === "kung fu teacher") {
        charNameEl.innerHTML = "Shifu";
        charQuoteEl.innerHTML = "If you only do what you can do, you will never be more than you are now.";
        charImgEl.src = "img/shifu.png";
    } else if (name === "storming ox" || name === "ox warrior" || name === "iron horns") {
        charNameEl.innerHTML = "Storming Ox";
        charQuoteEl.innerHTML = "We can stop him together!";
        charImgEl.src = "img/storming-ox.png";
    } else if (name === "soothsayer" || name === "goat prophet" || name === "seer") {
        charNameEl.innerHTML = "Soothsayer";
        charQuoteEl.innerHTML = "Your story may not have such a happy beginning...";
        charImgEl.src = "img/soothsayer.png";
    } else if (name === "tai lung" || name === "snow leopard" || name === "vengeful warrior") {
        charNameEl.innerHTML = "Tai Lung";
        charQuoteEl.innerHTML = "You were not meant to be the Dragon Warrior!";
        charImgEl.src = "img/tai-lung.png";
    } else if (name === "viper" || name === "lady viper" || name === "snake strike") {
        charNameEl.innerHTML = "Viper";
        charQuoteEl.innerHTML = "Don’t underestimate a viper!";
        charImgEl.src = "img/viper.png";
    } else {
        charNameEl.innerHTML = "??";
        charQuoteEl.innerHTML = "-----";
        charImgEl.src = "img/question-mark.png";
    }
}

function themeChange() {
    let theme = document.getElementById("theme-in").value.toLowerCase();
    let body = document.getElementById("main-body");
    let title = document.getElementById("main-title");
    let h2 = document.getElementById("char-name");
    let p = document.getElementById("input-label");
    let c = document.getElementById("char-quote");

    let bgColor;
    let textColor;

    if (theme === "dark" || theme === "black") {
        bgColor = "rgba(0, 0, 0, 0.7)";
        textColor = "white";
    } else if (theme === "light" || theme === "white") {
        bgColor = "rgba(255, 255, 255, 0.7)";
        textColor = "black";
    } else if (theme === "random") {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        bgColor = `rgba(${r}, ${g}, ${b}, 0.7)`;
        let luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        textColor = luminance > 150 ? "black" : "white";
    } else {
        return; // invalid input
    }

    body.style.backgroundColor = bgColor;
    title.style.color = textColor;
    h2.style.color = textColor;
    p.style.color = textColor;
    c.style.color = textColor;
}
