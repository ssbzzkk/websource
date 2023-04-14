//오늘날짜 확인 -1 : 어제날짜를 화면에 보여주기

//년,월,일 요소 찾아오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

function init() {
  const now = new Date();
  // 년
  let year = now.getFullYear();
  // 월 (0부터 시작)
  let month = now.getMonth() + 1;
  // 일
  let day = now.getDate() - 5;
  // 셋팅

  txtYear.value = year;

  //   if (month < 10) {
  //     month = "0" + month;
  //   }
  //   if (day < 10) {
  //     day = "0" + day;
  //   }
  selMon.value = month;
  selDay.value = day;
}
init();
