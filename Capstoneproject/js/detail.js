


let fnLoadDetail = () => {
    
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id=' + '1',
        method:'GET',
        ResponseType: 'JSON'
        
    });

     //thành công 
    promise.then(function(result) {
        let renderHtml = ''
        let rendrSize = ''
        let data = result.data.content;
        let dataSize = data.size;
        for(let val of dataSize) {
            rendrSize += `<button>${val}</button>`
        }
        renderHtml = `
        <div class="container-produc">
            <div class="img">
                <img src="${data.image}" alt="">
            </div>
            <div class="productdetail-text">
                <h2>${data.alias}</h2>
                <p>${data.description}</p>
                <h3>Available size</h3>
                <div class="button">
                    ${rendrSize}
                </div>
                <h1>${data.price}$</h1>
                <div class="cart">
                    <button>ADD to cart</button>
                </div>
            </div>
        </div>
        `
        console.log(data)
        
        document.querySelector('.productdetail').innerHTML = renderHtml;
        
    });

    promise.catch(function(err){
        window.alert("Trang bị lỗi rồi :( ")
    })
}

window.onload = fnLoadDetail();
