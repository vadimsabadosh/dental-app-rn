export const getAvatarColor = (letter) => {
  const code = letter.charCodeAt();
  if (code >= 1040 && code <= 1047) {
    return {
      background: "#DAD5D8",
      color: "#816CFF",
    };
  }
  if (code >= 1048 && code <= 1054) {
    return {
      background: "#f5d6d9",
      color: "#f38181",
    };
  }
  if (code >= 1055 && code <= 1061) {
    return {
      background: "#f8ecd5",
      color: "#f1a32f",
    };
  }
  if (code >= 1062 && code <= 1071) {
    return {
      background: "#e9f5ff",
      color: "#2a86ff",
    };
  }
  return {
    background: "#e9f5ff",
    color: "#2a86ff",
  };
};
