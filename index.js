
function criandoDiv() {
    let dateValue = document.getElementById('dateSearch').value
    let apiKey = '3gCSQQToRyDlQfC0tEYjkLUNLgKzJwfKpwf64EfD'

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateValue}`)
        .then((res)=> res.json())
        .then(json => {
            console.log(json);
            var dadoInput = document.getElementById("dateSearch").value
            console.log(dadoInput)
            var div = document.querySelector("#infos")
            div.style.maxWidth = "30rem"
            div.style.display = "flex"
            div.style.alignItems = "center"
            div.style.flexDirection = "column"
            div.style.flexWrap = "nowrap"
            div.style.textAlign = "left"
            div.style.marginTop = "2rem"
            div.style.marginLeft = "22rem"
            div.style.padding = "2rem"
            div.style.backgroundColor = "rgb(153 135 242 / 84%)"
            div.style.color = "black"
            div.style.borderRadius = "2rem"
            
            var image = document.createElement("img")
            image.setAttribute("id", "img")
            image.src = json.url
            image.setAttribute("width", "100%")
            div.append(image)

            var title = document.createElement("h4")
            title.innerHTML = json.title + "<br>" + json.date
            div.append(title)

            var info = document.createElement("p")
            info.innerHTML = json.explanation
            div.append(info)

            var direitos = document.createElement("a")
            direitos_name = json.copyright
            direitos.innerText = direitos_name
            direitos.style.color = "lightblue"
            direitos.style.textDecoration = "none"
            div.append(direitos)

            document.querySelector("#infos").append(image, title, info, direitos)
        })
};