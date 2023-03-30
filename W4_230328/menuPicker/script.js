// 메뉴들
const koreanMenu = ["김치찌개", "된장찌개", "비빔밥", "불고기", "갈비찜", "순두부찌개", "쭈꾸미볶음", "닭볶음탕", "제육덮밥", "치킨", "떡볶이", "라면", "족발"];
const chineseMenu = ["짜장면", "짬뽕", "탕수육", "양장피", "볶음밥", "마파두부", "깐풍기", "마라탕", "마라샹궈"];
const japaneseMenu = ["초밥", "우동", "돈까스", "라멘", "규동", "오므라이스", "가츠동", "야끼소바", "사케동"];
const westernMenu = ["스테이크", "파스타", "피자", "버거", "그라탕", "로스트 치킨", "스튜"];
const othersMenu = ["타코&브리또", "쌀국수", "커리", "팟타이", "포케", "샐러드"];
const allMenu = koreanMenu.concat(chineseMenu, japaneseMenu, westernMenu, othersMenu);

// 매운 메뉴 정리
const spicyMenu = ["김치찌개", "순두부찌개", "쭈꾸미볶음", "떡볶이", "라면", "짬뽕", "마라탕", "마라샹궈"]
// 랜덤으로 메뉴 하나 선택하는 함수
function selectRandomMenu(menuArray) {
const randomIndex = Math.floor(Math.random() * menuArray.length);
return menuArray[randomIndex];
}

// 필터링 함수
function applyFilter(menuArray) {
if (document.getElementById("spicy").checked) {
return menuArray.filter(menu => !spicyMenu.includes(menu))
} else {
return menuArray;
}
}

// 버튼 클릭 이벤트 리스너 등록
document.getElementById("korean").addEventListener("click", () => {
const filteredMenu = applyFilter(koreanMenu);
const selectedMenu = selectRandomMenu(filteredMenu);
document.getElementById("result").textContent = selectedMenu;
});

document.getElementById("chinese").addEventListener("click", () => {
const filteredMenu = applyFilter(chineseMenu);
const selectedMenu = selectRandomMenu(filteredMenu);
document.getElementById("result").textContent = selectedMenu;
});

document.getElementById("japanese").addEventListener("click", () => {
const filteredMenu = applyFilter(japaneseMenu);
const selectedMenu = selectRandomMenu(filteredMenu);
document.getElementById("result").textContent = selectedMenu;
});

document.getElementById("western").addEventListener("click", () => {
const filteredMenu = applyFilter(westernMenu);
const selectedMenu = selectRandomMenu(filteredMenu);
document.getElementById("result").textContent = selectedMenu;
});

document.getElementById("others").addEventListener("click", () => {
const filteredMenu = applyFilter(othersMenu);
const selectedMenu = selectRandomMenu(filteredMenu);
document.getElementById("result").textContent = selectedMenu;
});

document.getElementById("random").addEventListener("click", () => {
const filteredMenu = applyFilter(allMenu);
const selectedMenu = selectRandomMenu(filteredMenu);
document.getElementById("result").textContent = selectedMenu;
});
  