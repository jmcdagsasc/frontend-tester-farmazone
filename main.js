$(document).ready(function () {
  const FARMAZONE_API =
    "https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getcategories";

  function apiCall() {
    console.log("Se ejecuto");
    $.getJSON(FARMAZONE_API, function (result) {
      console.log("success");
      let container = $("#categories");
      for (let i = 0; i < result.categoriesLength; i++) {
        const strCategory = JSON.stringify(result.categories[i].name).replace(
          /\"/g,
          ""
        );
        let category = $("<h5></h5>").text(strCategory);
        container.append(category);
      }
    })
      .fail(function () {
        console.log("error");
      })
      .always(function () {
        console.log("complete");
      });
  }
  apiCall();
  console.log("Hello there!");
});
