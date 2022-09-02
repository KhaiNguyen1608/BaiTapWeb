





function xoaSinhVien(maSV) {
    console.log(maSV);
    var promise = axios({
        url:'https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien='+maSV,
        method:'DELETE'
    });
    //thành công 
    promise.then(function(result){
        console.log(result.data);
        //Load lại table
        getDataSinhVienApi();
    });

    promise.catch(function(err){
        console.log(err);
    })
}