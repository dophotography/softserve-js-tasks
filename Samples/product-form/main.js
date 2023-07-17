const form = document.forms.creationForm

class Product {
    static count = 0

    constructor(name, price, inStock) {
        this.name = name
        this.price = price
        this.inStock = inStock
        this.number = ++Product.count
    }

    get stockBadge() {
        return this.inStock ?
                    '<span class="badge text-bg-success">In Stock</span>':
                    '<span class="badge text-bg-secondary">Out Of Stock</span>'
    }

    resetCounter() {
        Product.count = 0
    }

    createTableString(table) {
        table.innerHTML += `<tr>
                                <th scope="row">${this.number}</th>
                                <td>${this.name}</td>
                                <td>${this.price}</td>
                                <td>${this.stockBadge}</td>
                            </tr>`
    }
}

form.onsubmit = (event) => {
    event.preventDefault()

    const inputName = form.elements.name
    const inputPrice = form.elements.price
    const inStockCheckbox = form.elements.inStock

    const product = new Product(inputName.value, inputPrice.value, inStockCheckbox.checked)
    product.createTableString(productTableBody)

    clearAllBtn.onclick = () => {
        productTableBody.innerHTML = ''
        product.resetCounter()
    }
}

