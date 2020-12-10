export function getName(name) {
  return {
    type: "GET_NAME",
    name
  };
}

export function getId(id) {
  return {
    type: "GET_ID",
    id
  };
}

export function getRole(role) {
  return {
    type: "GET_ROLE",
    role
  };
}

export function getRoleRu(role_ru) {
  return {
    type: "GET_ROLE_RU",
    role_ru
  };
}

export function getPhone(phone) {
  return {
    type: "GET_PHONE",
    phone
  };
}

export function getBirthday(birthday) {
  return {
    type: "GET_BIRTHDAY",
    birthday
  };
}

export function getArchive(isArchive) {
  return {
    type: "GET_ARCHIVE",
    isArchive
  };
}

export function setEnable(isEnable) {
  return {
    type: "SET_ENABLE",
    isEnable
  };
}


