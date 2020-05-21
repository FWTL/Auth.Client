const state = {
  it: JSON.parse(window.localStorage.getItem("token")) || ""
};

export default state;
