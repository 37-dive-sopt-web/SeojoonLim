const main = document.querySelector("main");
const filterForm = document.querySelector(".filter-container");
const webPart = JSON.parse(localStorage.getItem("membersData")) || [];
let modifiedWebPart = JSON.parse(JSON.stringify(webPart));
let filteredWebPart = [];

// 테이블 필터링
function filterTable() {
  // 입력된 값을 객체로 저장
  const filterList = getFormData("filter-item");
  // 필터된 값과 파트원 값과 비교
  filteredWebPart = modifiedWebPart.filter((webPartItem) => {
    for (let key in filterList) {
      if (filterList[key] !== webPartItem[key]) {
        return false;
      }
    }
    return true;
  });
}

// 필터된 테이블 초기화
function initTable() {
  const resultTbody = document.querySelector("#result-tbody");
  resultTbody.replaceChildren();
}

// 테이블 렌더링
function renderTable(tableArray) {
  const resultTbody = document.querySelector("#result-tbody");
  const tableCell = Array(8);
  for (let i = 0; i < tableArray.length; i++) {
    const tableRow = resultTbody.insertRow();
    // 셀의 자식요소에 속성 추가
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `result-checkbox-${tableArray[i].id}`);
    checkbox.setAttribute("data-id", `${tableArray[i].id}`);
    checkbox.setAttribute("name", "result-checkbox-one");
    checkbox.setAttribute("class", "checkbox-one");
    const githubLink = document.createElement("a");
    githubLink.setAttribute(
      "href",
      `https://github.com/${tableArray[i].github}`
    );
    githubLink.setAttribute("rel", "noopenner noreferrer");
    githubLink.textContent = tableArray[i].github;
    // 셀을 생성하고 열에 부착
    const cellNode = [
      checkbox,
      document.createTextNode(tableArray[i].name),
      document.createTextNode(tableArray[i].englishName),
      githubLink,
      document.createTextNode(tableArray[i].gender),
      document.createTextNode(tableArray[i].role),
      document.createTextNode(tableArray[i].codeReviewGroup),
      document.createTextNode(tableArray[i].age),
    ];
    for (let j = 0; j < tableCell.length; j++) {
      tableCell[j] = tableRow.insertCell();
      tableCell[j].appendChild(cellNode[j]);
    }
  }
}

// 비어있는 id 탐색
function usableId() {
  let value = 1;
  const ids = modifiedWebPart.map((member) => {
    return Number(member.id);
  });

  ids.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== value) return value;
    ++value;
  }
  return value;
}

// 웹파트 멤버 추가
function addWebMember() {
  // 입력된 값을 객체로 저장
  const inputList = getFormData("modal-item");
  inputList.id = usableId();
  modifiedWebPart.push(inputList);
}

// 폼에 작성된 값을 객체로 저장
function getFormData(cssClass) {
  const list = {};
  const inputs = document.querySelectorAll(`.${cssClass} [data-key]`);
  inputs.forEach((input) => {
    const inputKey = input.getAttribute("data-key");
    const inputValue = input.value;
    if (!inputValue) return;
    if (inputKey === "codeReviewGroup" || inputKey === "age") {
      list[inputKey] = Number(inputValue.trim());
    } else {
      list[inputKey] = String(inputValue.trim());
    }
  });
  return list;
}

// 웹파트 멤버 삭제
function deleteWebMember() {
  const checkboxes = document.querySelectorAll(".checkbox-one");
  const checkedIds = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedIds.push(Number(checkbox.getAttribute("data-id")));
    }
  });

  modifiedWebPart = modifiedWebPart.filter((webPartItem) => {
    return !checkedIds.includes(webPartItem["id"]);
  });
}

// 헤드 체크박스 토글
function toggleHeadCheckbox(headCheckbox) {
  const isChecked = headCheckbox.checked;
  const bodyCheckboxes = document.querySelectorAll(".checkbox-one");
  bodyCheckboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
}

// 바디 체크박스에 의한 헤드 체크박스 토글
function toggleBodyCheckbox() {
  const bodyCheckboxes = document.querySelectorAll(".checkbox-one");
  const bodyCheckboxesChecked = document.querySelectorAll(
    ".checkbox-one:checked"
  );
  const headCheckbox = document.querySelector("#checkbox-all");
  headCheckbox.checked = bodyCheckboxes.length === bodyCheckboxesChecked.length;
}

// 모달의 입력값이 모두 입력됐는지 확인
function alertNotFilled() {
  const inputs = Array.from(
    document.querySelectorAll(".modal-item [data-key]")
  );
  const hasEmpty = inputs.some((input) => input.value === "");
  if (hasEmpty) {
    alert("모두 입력해주세요");
    return false;
  } else return true;
}

// 로컬 스토리지 저장
function setLocalStorage() {
  localStorage.setItem("membersData", JSON.stringify(modifiedWebPart));
}

// 모달 열기
function openModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("none");
  modal.classList.add("flex");
}

// 모달 닫기
function closeModal() {
  const modal = document.querySelector("#modal");
  modal.classList.remove("flex");
  modal.classList.add("none");
}

initTable();
renderTable(webPart);
// form태그 submit 이벤트리스너
filterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterTable();
  initTable();
  renderTable(filteredWebPart);
});
// form태그 reset 이벤트리스너
filterForm.addEventListener("reset", () => {
  initTable();
  renderTable(modifiedWebPart);
});
// click 이벤트리스너
main.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "delete-btn") {
    deleteWebMember();
    setLocalStorage();
    initTable();
    renderTable(modifiedWebPart);
  } else if (target.id === "checkbox-all") {
    toggleHeadCheckbox(target);
  } else if (target.classList.contains("checkbox-one")) {
    toggleBodyCheckbox();
  } else if (target.id === "add-btn") {
    openModal();
  } else if (target.closest("#modal-close-btn") || target.id === "modal") {
    closeModal();
  } else if (target.id === "modal-add-btn") {
    if (!alertNotFilled()) return;
    addWebMember();
    setLocalStorage();
    closeModal();
    initTable();
    renderTable(modifiedWebPart);
  }
});
