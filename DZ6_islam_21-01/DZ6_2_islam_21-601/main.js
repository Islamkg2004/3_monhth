const wrapper = document.querySelector(".wrapper")
const block1 = document.createElement("div")
const price = document.createElement("h3")
const delivery = document.createElement("p")
const name = document.createElement("p")
const review = document.createElement("p")
const img = document.createElement("img")
const button = document.createElement("button")
block1.style.height = "447px"
block1.style.width = "253px"
img.style.height = "337px"
img.style.width = "253px"
block1.style.margin = "0 22px 0"

block1.append(img, price, delivery, name, review, button)
wrapper.append(block1)

const postData = (url, data) => {
    const res = fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: data
    })
    return res
}

postData("data.json")
    .then(response => response.json())
    .then()
    .then((data) => {
        const item = JSON.parse(data).result
        // img.src = item.img
        name.innerText = item.name
        price.innerText = item.price
        delivery.innerText = item.delivery
        review.innerText = item.review
        button.innerText = "В корзину"
        console.log(item)
        block1.append(price)
        wrapper.append(block1)

    })
    .catch(error => console.error(error))