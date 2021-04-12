$(document).ready(function () {
  const FARMAZONE_API =
    "https://hardcore-poitras-19aebd.netlify.app/.netlify/functions/getcategories";
  let business_id = 0;

  function apiCall() {
    console.log("Se ejecuto");
    $.post(
      FARMAZONE_API,
      JSON.stringify({ business_id }),
      function (result) {
        console.log("success");
        let container = $("#categories");
        container.empty();
        for (let i = 0; i < result.categoriesLength; i++) {
          const strCategory = JSON.stringify(result.categories[i].name).replace(
            /\"/g,
            ""
          );
          let category = $("<h5></h5>").text(strCategory);
          container.append(category);
        }
      },
      "json"
    );
  }

  function selectStore() {
    if ($("#business_id").val() == false) {
      business_id = 149;
    } else {
      business_id = parseInt($("#business_id").val());
    }

    console.log(
      "business_id : " + business_id + ", type: " + typeof business_id
    );
  }

  $("#business-id-btn").click(function () {
    selectStore();
    apiCall();
  });

  console.log("Hello there!");
});
