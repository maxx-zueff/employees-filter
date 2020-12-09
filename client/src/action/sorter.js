export function toggleName(name) {
  return {
    type: "TOGGLE_NAME",
    name,
  };
}

export function toggleBirthday(birthday) {
  return {
    type: "TOGGLE_BIRTHDAY",
    birthday,
  };
}
