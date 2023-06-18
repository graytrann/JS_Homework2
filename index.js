document.getElementById("ex1").onclick = function () {
  let admissionScore = document.getElementById("input-AdmissionScore").value;
  let area = document.getElementById("input-Area").value;
  let priority = +document.getElementById("input-Priority").value;
  let score1 = +document.getElementById("input-subject1").value;
  let score2 = +document.getElementById("input-subject2").value;
  let score3 = +document.getElementById("input-subject3").value;
  let sumOfScore = score1 + score2 + score3;
  let output = document.getElementById("output-result");

  if (area !== "X" && area !== "A" && area !== "B" && area !== "C") {
    document.getElementById("input-Area").value = "";
    alert("xin vui lòng nhập lại khu vực X A B C");
  }

  if (priority > 3) {
    document.getElementById("input-Priority").value = "";
    alert("xin vui lòng nhập lại điểm ưu tiên trong vòng khoảng 0 1 2 3");
  }

  if (score1 > 10) {
    document.getElementById("input-subject1").value = "";
    alert("xin vui lòng nhập lại điểm môn 1 trong vòng khoảng 0 -> 10");
  }

  if (score2 > 10) {
    document.getElementById("input-subject2").value = "";
    alert("xin vui lòng nhập lại điểm môn 2 trong vòng khoảng 0 -> 10");
  }

  if (score2 > 10) {
    document.getElementById("input-subject3").value = "";
    alert("xin vui lòng nhập lại điểm môn 3 trong vòng khoảng 0 -> 10");
  }

  if (priority === 0) {
    sumOfScore += 0;
  } else if (priority === 1) {
    sumOfScore += 2.5;
  } else if (priority === 2) {
    sumOfScore += 1.5;
  } else if (priority === 3) {
    sumOfScore += 1;
  }

  if (area === "X") {
    sumOfScore += 0;
  } else if (area === "A") {
    sumOfScore += 2;
  } else if (area === "B") {
    sumOfScore += 1;
  } else if (area === "C") {
    sumOfScore += 0.5;
  }

  if (score1 === 0 || score2 === 0 || score3 === 0) {
    output.innerHTML = `Bạn đã gãy do có điểm 0`;
  } else if (sumOfScore >= admissionScore) {
    output.innerHTML = `Bạn đã đậu với số điểm ${sumOfScore} so với điểm chuẩn ${admissionScore}`;
  } else {
    output.innerHTML = `Bạn đã gãy với số điểm ${sumOfScore} so với điểm chuẩn ${admissionScore}`;
  }

  console.log(sumOfScore);
};

document.getElementById("ex2").onclick = function () {
  let customerName = document.getElementById("input-CustomerName").value;
  let kw = +document.getElementById("input-KW").value;
  let totalPrice = 0;
  let output = document.getElementById("output-price");

  if (!isNaN(customerName)) {
    alert("VUI LÒNG NHẬP TÊN KHÁCH HÀNG");
    document.getElementById("input-CustomerName").value = "";
    return;
  }

  if (kw <= 50) {
    totalPrice = kw * 500;
  } else if (kw < 100) {
    totalPrice = 50 * 500 + (kw - 50) * 650;
  } else if (kw < 200) {
    totalPrice = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw < 350) {
    totalPrice = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    totalPrice =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }

  output.innerHTML = `Tên khách hàng: ${customerName}
  <br>
  Tiền điện: ${totalPrice.toLocaleString()} vnđ`;
};

document.getElementById("ex3").onclick = function () {
  let employee = document.getElementById("input-employeeName").value;
  let thuNhap = +document.getElementById("input-income").value;
  let depend = +document.getElementById("input-depend").value * 1600000;
  let ketQua = thuNhap - 4000000 - depend;
  let fee = 0;
  let output = document.getElementById("output-fee");
  //   console.log(ketQua);

  if (!isNaN(employee)) {
    alert("VUI LÒNG NHẬP TÊN KHÁCH HÀNG");
    document.getElementById("input-employeeName").value = "";
    return;
  }

  if (thuNhap <= 60000000) {
    fee = (ketQua * 5) / 100;
  } else if (thuNhap <= 120000000) {
    fee = (ketQua * 10) / 100;
  } else if (thuNhap <= 210000000) {
    fee = (ketQua * 15) / 100;
  } else if (thuNhap <= 384000000) {
    fee = (ketQua * 20) / 100;
  } else if (thuNhap <= 624000000) {
    fee = (ketQua * 25) / 100;
  } else if (thuNhap <= 960000000) {
    fee = (ketQua * 30) / 100;
  } else {
    fee = (ketQua * 35) / 100;
  }

  //   console.log(fee.toLocaleString());

  output.innerHTML = `Tên khách hàng: ${employee}
  <br>
  Tiền Thuế: ${fee.toLocaleString()} vnđ`;
};

// EX4
let DoanhNghiep = document.getElementById("DN");
let NhaDan = document.getElementById("ND");

function showConnect() {
  //   let DoanhNghiep = document.getElementById("DN");
  if (DoanhNghiep.checked) {
    document.getElementById("soKetNoi").classList.remove("d-none");
  }
}

function hideConnect() {
  //   let NhaDan = document.getElementById("ND");
  if (NhaDan.checked) {
    document.getElementById("soKetNoi").classList.add("d-none");
  }
}

document.getElementById("ex4").onclick = function () {
  let cusID = document.getElementById("input-cusID").value;
  let processingFee = 4.5;
  let basicService = 20.5;
  let advanceChannel = 7.5;
  let channels = document.getElementById("input-channel").value;
  let connects = document.getElementById("input-connects").value;
  let total = 0;
  let output = document.getElementById("output-ex4");

  if (NhaDan.checked) {
    total = processingFee + basicService + advanceChannel * channels;
  } else {
    processingFee = 15;
    basicService = 75;
    advanceChannel = 50;
    if (connects <= 10) {
      total = processingFee + basicService + advanceChannel * channels;
    } else {
      //   total = processingFee + basicService + (connects + 5) + (advanceChannel * channels);
      total =
        // processingFee + basicService + (advanceChannel * 10) + (connects*advanceChannel + 5)
        // processingFee + basicService + advanceChannel * channels + 5;
        processingFee +
        basicService +
        advanceChannel * channels +
        (connects - 10) * 5;
    }
  }

  output.innerHTML = `
  Mã Khách Hàng: ${cusID}
  <br>
  Tiền Cáp: ${total.toLocaleString()} $`;
};
