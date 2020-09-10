var filter;
$(document).ready(function () {
  $("#open-filter").click(function () {
    $.getJSON("./FilterConfig.json", function (data) {
      // $("#product-name-list>p").html(data.ProductName);
      // $("#version-list>p").html(data.ProdcutVersion);
      // $("#keywords>p").html(data.CustomizedKeywords[0]);
      for (var i = 0; i < data.Category.length; i++) {
        for (var j = 0; j < data.Category[i].Rule.length; j++) {
          var tr = $("<tr></tr>");
          var td0 = $('<td class="text-center"></td>').append('<input class="category'+i+'-checkbox" type="checkbox">');
          var td1 = $("<td></td>").text(data.Category[i].Name);
          var td2 = $('<td class="text-center"></td>').append('<input class="category'+i+'-rule-checkbox" type="checkbox">');
          var td3 = $("<td></td>").text(data.Category[i].Rule[j].Name);
          var td4 = $("<td></td>").text(data.Category[i].Rule[j].Description);
          tr.append(td0, td1, td2, td3, td4);
          $("tbody").append(tr);
        }
      }
      filter = data;
      // if (data.hasOwnProperty("Category1")) {
      //   $(".category1-checkbox").prop("checked", true);
      //   if (data.Category1.hasOwnProperty("Rule1")) {
      //     $(".category1-rule1-checkbox").prop("checked", true);
      //   }
      //   if (data.Category1.hasOwnProperty("Rule2")) {
      //     $(".category1-rule2-checkbox").prop("checked", true);
      //   }
      // }
      // if (data.hasOwnProperty("Category2")) {
      //   $(".category2-checkbox").prop("checked", true);
      //   if (data.Category2.hasOwnProperty("Rule1")) {
      //     $(".category2-rule1-checkbox").prop("checked", true);
      //   }
      //   if (data.Category2.hasOwnProperty("Rule2")) {
      //     $(".category2-rule2-checkbox").prop("checked", true);
      //   }
      // }
    });
  });
  $(".category-checkbox").click(function () {
    if ($(this).prop("checked")){
      var class_name=$(this).attr("class");
      $('[class='+class_name+']').prop("checked", true);
      $('[class='+class_name+']')
    }
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