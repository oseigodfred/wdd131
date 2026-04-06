const products = [
    { id: "p1", name: "Air Conditioner" },
    { id: "p2", name: "Refrigerator" },
    { id: "p3", name: "Washing Machine" },
    { id: "p4", name: "Microwave Oven" },
    { id: "p5", name: "Dishwasher" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});