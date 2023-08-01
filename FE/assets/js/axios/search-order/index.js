async function searchOrder() {
    try {
        let id = document.getElementById('tracking_code').value;
        const res = await axios.get(`http://localhost:3000/products/order/${id}`);
        let data = res.data;
        console.log(data);
        let str = `
            <div class="current-weather">
                <div class="details">
                    <h2>${data.id}</h2>
                    <h6>${data.date}</h6>
                    <h6>${data.sellingPrice}</h6>
                    <h6>${data.quantity}</h6>
                    <h6>${data.shippingCost}</h6>
                    <h6>${data.packingCost}</h6>
                    <h6>${data.user.id}</h6>
                    <h6>${data.user.username}</h6>
                </div>
            </div>
        `;

        document.getElementById(`search-order`).innerHTML = str;
    } catch (error) {
        console.error(error);
    }
}

