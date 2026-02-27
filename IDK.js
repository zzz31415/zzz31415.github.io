// i don't know

// 기준 년도
const baseYear = 2006;

// 현재 년도
const currentYear = new Date().getFullYear();

// 차이값
const age = currentYear - baseYear;

// // 다른 파일에서 쓸 수 있도록 전역 변수로 둠
// window.yearDiff = diff;

// class 로 요소 선택
const ageElement = document.querySelector(".myInfo-value");

// 값 넣기
ageElement.textContent = age;