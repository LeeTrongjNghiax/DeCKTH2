$(document).ready(() => {
  let i = 1;

  $("#dangKy").click(() => {
    $("#modalDangKy").modal();
  })

  kiemTraHoTen = () => {
    let regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/
    let text = $("#inpHoTen").val();

    if ( text == "" ) {
      $("#resultHoTen").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultHoTen").html("Họ tên không hợp lệ");
      return false;
    }
    $("#resultHoTen").html("Đúng");
    return true;
  }
  $("#inpHoTen").blur(kiemTraHoTen);



  kiemTraSCMNDCu = () => {
    let regex = /^\d{3}(-\d{3}){2}$/
    let text = $("#inpSCMNDCu").val();

    if ( text == "" ) {
      $("#resultSCMNDCu").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultSCMNDCu").html("SCMND cũ không hợp lệ");
      return false;
    }
    $("#resultSCMNDCu").html("Đúng");
    return true;
  }
  $("#inpSCMNDCu").blur(kiemTraSCMNDCu);



  kiemTraQueQuan = () => {
    let regex = /^[A-Z][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)+$/
    let text = $("#inpQueQuan").val();

    if ( text == "" ) {
      $("#resultQueQuan").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultQueQuan").html("Quê quán không hợp lệ");
      return false;
    }
    $("#resultQueQuan").html("Đúng");
    return true;
  }
  $("#inpQueQuan").blur(kiemTraQueQuan);



  kiemTraEmail = () => {
    let regex = /^[A-Za-z0-9_-]{6}@bc\.com\.vn$/
    let text = $("#inpEmail").val();

    if ( text == "" ) {
      $("#resultEmail").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultEmail").html("Email không hợp lệ");
      return false;
    }
    $("#resultEmail").html("Đúng");
    return true;
  }
  $("#inpEmail").blur(kiemTraEmail);



  kiemTraSoDienThoai = () => {
    let regex = /^09\d{2}(-\d{3}){2}$/
    let text = $("#inpSoDienThoai").val();

    if ( text == "" ) {
      $("#resultSoDienThoai").html("Không được để rỗng");
      return false;
    }
    if ( !regex.test(text) ) {
      $("#resultSoDienThoai").html("Số điện thoại không hợp lệ");
      return false;
    }
    $("#resultSoDienThoai").html("Đúng");
    return true;
  }
  $("#inpSoDienThoai").blur(kiemTraSoDienThoai);



  kiemTraAnhDaiDien = () => {
    let text = $("#inpAnhDaiDien").val();

    if ( text == "" ) {
      $("#resultAnhDaiDien").html("Không được để rỗng");
      return false;
    }
    $("#resultAnhDaiDien").html("Đúng");
    return true;
  }
  $("#inpAnhDaiDien").blur(kiemTraAnhDaiDien);



  $("#luu").click(() => {
    if (
      kiemTraHoTen() &&
      kiemTraSCMNDCu() &&
      kiemTraQueQuan() &&
      kiemTraEmail() &&
      kiemTraSoDienThoai() &&
      kiemTraAnhDaiDien()
    ) {
      $("table > tbody").append(`
        <tr>
          <td>${i++}</td>
          <td>${$("#inpHoTen").val()}</td>
          <td>${$("#inpSCMNDCu").val()}</td>
          <td>${$("#inpQueQuan").val()}</td>
          <td>${$("#inpEmail").val()}</td>
          <td>${$("#inpSoDienThoai").val()}</td>
          <td>${$("#inpAnhDaiDien").val().replace(/C:\\fakepath\\/, "")}</td>
        </tr>
      `);
    }
  });
})