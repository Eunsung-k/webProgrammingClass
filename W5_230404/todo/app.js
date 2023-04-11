import { todoList } from "./todo.js";

// UI 모듈 정의하기
const app = {
  todoList: document.getElementById("todoList"), // To-Do 항목 리스트 엘리먼트
  form: document.querySelector("form"), // To-Do 항목 입력 폼 엘리먼트
  titleInput: document.getElementById("title"), // 할 일 제목 입력 필드 엘리먼트
  dueDateInput: document.getElementById("dueDate"), // 마감 기한 입력 필드 엘리먼트
  // dateInputs: document.querySelectorAll('input[type="date"]'),
  // sortButton: document.getElementById('sortBtn'),
  // dateList: document.getElementById('dateList'),

  // To-Do 항목을 렌더링하는 메소드
  renderItem(item) {
    const li = document.createElement("li"); // To-Do 항목을 표시하는 li 엘리먼트 생성
    if (item.completed) {
      // 항목이 완료되었는지 여부에 따라 CSS 클래스 추가
      li.classList.add("completed");
    }

    const titleText = document.createElement("div"); // 할 일 제목을 표시하는 div 엘리먼트 생성
    titleText.textContent = `${item.title} - ${item.dueDate}`; // 할 일 제목과 마감 기한을 텍스트로 설정
    titleText.classList.add("title"); // CSS 클래스 추가

    const toggleBtn = document.createElement("button"); // 완료 여부를 토글하는 버튼 엘리먼트 생성
    toggleBtn.textContent = "✔️"; // 텍스트 설정
    toggleBtn.addEventListener("click", () => {
      todoList.toggleComplete(item);
    });

    const removeBtn = document.createElement("button"); // 항목을 삭제하는 버튼 엘리먼트 생성
    removeBtn.textContent = "🗑️"; // 텍스트 설정
    removeBtn.addEventListener("click", () => {
      // 클릭 이벤트 핸들러 등록
      todoList.remove(item); // 항목 삭제
      this.renderList(); // To-Do 항목 리스트 렌더링
    });

//     const sortBtn = document.createElement("button");
//     sortBtn.textContent = "";
//     sortBtn.addEventListener("click", () => {
//       const dates = Array.from(dateInputs).map(input => input.value);
//       const sortedDates = dates.sort((a, b) => {
//         const dateA = new Date(a);
//         const dateB = new Date(b);
//         return dateA - dateB;
//       });
//   dateList.innerHTML = sortedDates.map(date => `<li>${date}</li>`).join('');
// });

    li.appendChild(toggleBtn); // li 엘리먼트에 toggleBtn 엘리먼트 추가
    li.appendChild(removeBtn); // li 엘리먼트에 removeBtn 엘리먼트 추가
    li.appendChild(titleText); // li 엘리먼트에 titleText 엘리먼트 추가
    this.todoList.appendChild(li); // To-Do 항목 리스트 엘리먼트에 li 엘리먼트 추가
  },

  // To-Do 항목 리스트를 렌더링하는 메소드
  renderList() {
    this.todoList.innerHTML = ""; // 기존 To-Do 항목 리스트 엘리먼트 내용 삭제
    todoList.items.forEach((item) => {
      this.renderItem(item); // To-Do 항목 리스트를 순회하면서 항목을 렌더링
    });
  },

  // 초기화 메소드
  init() {
    todoList.load(); // 로컬 스토리지에서 To-Do 항목 리스트 불러오기
    this.renderList(); // To-Do 항목 리스트 렌더링

    this.form.addEventListener("submit", (event) => {
      // 폼 제출 이벤트 핸들러 등록
      event.preventDefault(); 
      const title = this.titleInput.value; 
      const dueDate = this.dueDateInput.value;

      if (title && dueDate) {
        const item = todoList.add(title, dueDate);
        this.titleInput.value = ""; 
        this.dueDateInput.value = "";
      }
    });
  },
};

app.init();