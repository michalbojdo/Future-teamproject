const menuCategories = document.getElementsByClassName("nactive");
for (let i = 0; i < menuCategories.length; i++) {
  menuCategories[i].onclick = function () {
    for (let j = 0; j < menuCategories.length; j++)
menuCategories[j].style.color = "#787878b3";
    this.style.color = "#787878";
  };
}
