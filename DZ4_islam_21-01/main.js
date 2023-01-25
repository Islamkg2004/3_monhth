const  wrapper = document.querySelector(".wrapper")


const req = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.addEventListener("load", () => {
        const data = JSON.parse(request.response).result

        data.map((item) => {
            const block = document.createElement("div")
            const price = document.createElement("h3")
            const delivery = document.createElement("p")
            const name = document.createElement("p")
            const review = document.createElement("p")
            const img = document.createElement("img")
            const button = document.createElement("button")
            block.style.height = "447px"
            block.style.width = "253px"
            img.style.height = "337px"
            img.style.width = "253px"
            block.style.margin = "0 22px 0"

            img.src = item.img
            name.innerText = item.name
            price.innerText = item.price
            delivery.innerText = item.delivery
            review.innerText = item.review
            button.innerText = "В корзину"

            block.append(img)
            block.append(price)
            block.append(delivery)
            block.append(name)
            block.append(review)
            block.append(button)
            wrapper.append(block)
        })
    })
}

req()