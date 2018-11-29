export const saveToLocalStorage = (key, value) => {
    if(localStorage) {
      localStorage.setItem(key, JSON.stringify(value))
  }
}

export const loadFromLocalStorage = (key) => {
  if(localStorage) {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
  }
  return null;
}
