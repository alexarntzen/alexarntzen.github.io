let nameArray = [];

document.querySelector(".button").addEventListener("click", () => {
    let name = document.querySelector("#nameInput").value;
    nameArray.push(name);
    document.querySelector("#kolonnetext2").textContent = "Hey, " + name + "!";
    document.querySelector("#kolonnetext3").innerHTML = "";
    let i;
    for (i = 0; i < nameArray.length; i++) {
        let text = document.createTextNode("Hey, " + nameArray[i] + "!");
        let br = document.createElement("br");
        document.querySelector("#kolonnetext3").appendChild(text);
        document.querySelector("#kolonnetext3").appendChild(br);
    }
});


