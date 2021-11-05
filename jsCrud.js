var ad = document.getElementById('ad')
var lname = document.getElementById('lname')
var tel = document.getElementById('tel')
var tblTb = document.getElementById('tbTbl')
var tbl = document.getElementById('tblMain')
var inf = document.getElementById('info')
var rowCount = 1
function Save() {
    tblTb.insertRow().outerHTML = '<tr>' +
        '<td>' + ad.value + '</td>' +
        '<td>' + lname.value + '</td>' +
        '<td>' + tel.value + '</td>' +
        '<td>' + '<button class="updtBtn" id="dznBtn' + rowCount + '" onclick="Update(' + rowCount + ')">Düzenle</button>  <button id="slBtn" class="btn btn-2j" onclick="Delete(' + rowCount + ')">Sil</button>' +
        '</td>' +
        '</tr>'

    for (var i = 0; i < tblTb.rows.length; i++) {
        tblTb.rows[i].contentEditable = false
    }
    ad.value = ''
    lname.value = ''
    tel.value = ''
    rowCount++
}
function Update(r) {
    for (var j = 0; j < tbl.rows[r].cells.length - 1; j++) {
        tbl.rows[r].cells[j].contentEditable = true
    }
    var dznBtn = document.getElementById('dznBtn' + r + '')
    dznBtn.innerHTML = 'Kaydet'
    dznBtn.setAttribute('class', 'subBtn')
    dznBtn.setAttribute('onclick', 'SaveRow(' + r + ')')

}
function Delete(r) {
    inf.innerHTML = 'Tablo Alanı Silindi.'
    setTimeout(function () {
        inf.innerHTML = 'Personel Takip Uygulaması'
    }, 1000);
    tbl.deleteRow(r)
    r -= 1
    rowCount -= 1
}
function SaveRow(r) {

    inf.innerHTML = 'Tablo Alanı Güncellendi.'
    setTimeout(function () {
        inf.innerHTML = 'Personel Takip Uygulaması'
    }, 1000);

    for (var j = 0; j < tbl.rows[r].cells.length - 1; j++) {
        tbl.rows[r].cells[j].contentEditable = false
    }
    var dznBtn = document.getElementById('dznBtn' + r + '')
    dznBtn.innerHTML = 'Düzenle'
    dznBtn.setAttribute('class', 'updtBtn')
    dznBtn.setAttribute('onclick', 'Update(' + r + ')')
}