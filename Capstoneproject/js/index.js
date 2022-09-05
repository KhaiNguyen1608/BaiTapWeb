


let fnLoadData = () => {
    
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method:'GET',
        ResponseType: 'JSON'
    });

     //thành công 
    promise.then(function(result) {
        let renderHtml = ''
        let arrData = result.data.content;
        arrData = arrData.slice(0,6);
        for(let data of arrData) {
            console.log(data)
            renderHtml += `
            <div class="product-item">
                <img src="${data.image}" alt="#">
                <p>${data.alias}</p>
                <p>${data.description}</p>
                <div class="bt-buynow">
                    <button>Buy Now</button>
                    <span>${data.price}$</span>
                </div>
            </div>
            `
        }
        document.querySelector('.productfeature-item').innerHTML = renderHtml;
        
    });

    promise.catch(function(err){
        window.alert("Trang bị lỗi rồi :( ")
    })
}

window.onload = fnLoadData();
