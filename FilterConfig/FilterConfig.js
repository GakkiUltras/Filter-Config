$(document).ready(function () {
  $("#open-filter").click(function () {
    $.getJSON("./FilterConfig.json", function (data) {
      // $("#product-name-list>p").html(data.ProductName);
      // $("#version-list>p").html(data.ProdcutVersion);
      // $("#keywords>p").html(data.CustomizedKeywords[0]);
      if (data.hasOwnProperty("Category1")) {
        $(".category1-checkbox").prop("checked", true);
        if (data.Category1.hasOwnProperty("Rule1")) {
          $(".category1-rule1-checkbox").prop("checked", true);
        }
        if (data.Category1.hasOwnProperty("Rule2")) {
          $(".category1-rule2-checkbox").prop("checked", true);
        }
      }
      if (data.hasOwnProperty("Category2")) {
        $(".category2-checkbox").prop("checked", true);
        if (data.Category2.hasOwnProperty("Rule1")) {
          $(".category2-rule1-checkbox").prop("checked", true);
        }
        if (data.Category2.hasOwnProperty("Rule2")) {
          $(".category2-rule2-checkbox").prop("checked", true);
        }
      }
    });
  });
  $(".category1-checkbox").click(function () {
    if ($(this).prop("checked")) {
      $(".category1-checkbox").prop("checked", true);
      $(".category1-rule1-checkbox").prop("checked", true);
      $(".category1-rule2-checkbox").prop("checked", true);
    }
    else {
      $(".category1-checkbox").prop("checked", false);
      $(".category1-rule1-checkbox").prop("checked", false);
      $(".category1-rule2-checkbox").prop("checked", false);
    }
  });

  $(".category2-checkbox").click(function () {
    if ($(this).prop("checked")) {
      $(".category2-checkbox").prop("checked", true);
      $(".category2-rule1-checkbox").prop("checked", true);
      $(".category2-rule2-checkbox").prop("checked", true);
    }
    else {
      $(".category2-checkbox").prop("checked", false);
      $(".category2-rule1-checkbox").prop("checked", false);
      $(".category2-rule2-checkbox").prop("checked", false);
    }
  });
  $(".category1-rule1-checkbox").click(function () {
    if ($(this).prop("checked")) {
      $(".category1-checkbox").prop("checked", true);
    }
    else {
      if (!$(".category1-rule2-checkbox").prop("checked")) {
        $(".category1-checkbox").prop("checked", false);
      }
    }
  });

  $(".category1-rule2-checkbox").click(function () {
    if ($(this).prop("checked")) {
      $(".category1-checkbox").prop("checked", true);
    }
    else {
      if (!$(".category1-rule1-checkbox").prop("checked")) {
        $(".category1-checkbox").prop("checked", false);
      }
    }
  });

  $(".category2-rule1-checkbox").click(function () {
    if ($(this).prop("checked")) {
      $(".category2-checkbox").prop("checked", true);
    }
    else {
      if (!$(".category2-rule2-checkbox").prop("checked")) {
        $(".category2-checkbox").prop("checked", false);
      }
    }
  });

  $(".category2-rule2-checkbox").click(function () {
    if ($(this).prop("checked")) {
      $(".category2-checkbox").prop("checked", true);
    }
    else {
      if (!$(".category2-rule1-checkbox").prop("checked")) {
        $(".category2-checkbox").prop("checked", false);
      }
    }
  });
});