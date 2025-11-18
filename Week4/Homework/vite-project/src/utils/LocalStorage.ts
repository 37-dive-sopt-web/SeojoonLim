export function setLocalStorage(value: number): void {
  localStorage.setItem("userId", JSON.stringify(value));
}


export function clearLocalStorage(): void {
  localStorage.clear();
}

export function getLocalStorage(): string {
  return JSON.parse(localStorage.getItem("userId") || "");
}