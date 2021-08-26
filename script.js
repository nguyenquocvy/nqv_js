var testScore = {
    name: "",
    math: 0,
    physical: 0,
    chemisstry: 0,

}

var i = 0;
//hàm nhập
function input() {
    i++;

    let name = document.getElementById("ten").value;
    let math = document.getElementById("diemtoan").value;
    let physical = document.getElementById("diemly").value;
    let chemisstry = document.getElementById("diemhoa").value;

    if ((name == "") || (math == "") || (physical == "") || (chemisstry == "")) {
        alert("vui lòng điền đủ thông tin")
        i--;
        return false;
    } else if ((math < 0) || (math > 10)) {
        alert("điểm toán phải từ 0 đến 10");
        i--;
        return false;
    } else if ((physical < 0) || (physical > 10)) {
        alert("điểm lý phải từ 0 đến 10");
        i--;
        return false;
    } else if ((chemisstry < 0) || (chemisstry > 10)) {
        alert("điểm hóa phải từ 0 đến 10");
        i--;
        return false;
    }

    testScore.name = name;
    testScore.math = math;
    testScore.physical = physical;
    testScore.chemisstry = chemisstry;

    let table = document.getElementById("table");
    let row = table.insertRow();
    let stt = row.insertCell(0);
    let ten = row.insertCell(1);
    let toan = row.insertCell(2);
    let ly = row.insertCell(3);
    let hoa = row.insertCell(4);
    let trungBinh = row.insertCell(5);

    stt.innerHTML = i;
    ten.innerHTML = testScore.name;
    toan.innerHTML = testScore.math;
    ly.innerHTML = testScore.physical;
    hoa.innerHTML = testScore.chemisstry;
    trungBinh.innerHTML = "?";

    //xóa trắng các ô input
    document.getElementById("ten").value = "";
    document.getElementById("diemtoan").value = "";
    document.getElementById("diemly").value = "";
    document.getElementById("diemhoa").value = "";
}

//ham tính điểm trung bình
function tinhDiemTrungBinh() {

    let row = document.getElementById("table").rows;
    for (let a = 1; a < row.length; a++) {
        let tb = (parseFloat(row[a].cells[2].innerHTML) + parseFloat(row[a].cells[3].innerHTML) + parseFloat(row[a].cells[4].innerHTML)) / 3;
        row[a].cells[5].innerHTML = tb.toFixed(1);
    }
}

//hàm tính học sinh >= 8.0
function xacDinhHocSinhGioi() {
    let row = document.getElementById("table").rows;
    for (let a = 1; a < row.length; a++) {
        let diem = row[a].cells[5].innerHTML;
        if (diem >= 8) {
            row[a].style.color = "red";
        }

    }
}

// tham khao W3Scholl sap xep giam dan (https://www.w3schools.com/howto/howto_js_sort_table.asp)
function sortTable() {
    var row, switching, shouldSwitch, a;
    row = document.getElementById("table").rows;
    switching = true;

    while (switching) {
        switching = false;
        for (a = 1; a < (row.length - 1); a++) {
            shouldSwitch = false;
            if (row[a].cells[5].innerHTML < row[a + 1].cells[5].innerHTML) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            row[a].parentNode.insertBefore(row[a + 1], row[a]);
            switching = true;
        }
    }
}

//ham sắp xếp tanq dan tự viết 
function sortByMe() {
    let row, a, index;
    row = document.getElementById("table").rows;
    a = true;
    while (a) {
        a = false;
        for (index = 1; index < row.length - 1; index++) {
            if (row[index].cells[5].innerHTML > row[index + 1].cells[5].innerHTML) {
                row[index].parentNode.insertBefore(row[index + 1], row[index]);
                a = true;
            }
        }
    }
}