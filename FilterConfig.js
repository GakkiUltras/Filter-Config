var filter;
$(document).ready(function () {
  $("#open-filter").click(function () {
    $.getJSON("./FilterConfig.json", function (data) {
      for (var i = 0; i < data.Category.length; i++) {
        for (var j = 0; j < data.Category[i].Rule.length; j++) {
          var tr = $("<tr></tr>");
          var td0 = $('<td class="text-center"></td>').append('<input class="category-checkbox" type="checkbox" data-category-num='+i+'>');
          var td1 = $("<td></td>").text(data.Category[i].Name);
          var td2 = $('<td class="text-center"></td>').append('<input class="rule-checkbox" type="checkbox"  data-category-num='+i+'>');
          var td3 = $("<td></td>").text(data.Category[i].Rule[j].Name);
          var td4 = $("<td></td>").text(data.Category[i].Rule[j].Description);
          tr.append(td0, td1, td2, td3, td4);
          $("tbody").append(tr);
        }
      }
      $(".category-checkbox").click(function () {
        var category_num=$(this).attr("data-category-num");
        if ($(this).prop("checked")){
          $('.category-checkbox[data-category-num='+category_num+']').prop("checked", true);
          $('.rule-checkbox[data-category-num='+category_num+']').prop("checked", true);
        }
        else{
          $('.category-checkbox[data-category-num='+category_num+']').prop("checked", false);
          $('.rule-checkbox[data-category-num='+category_num+']').prop("checked", false);
        }
      });
    
      $('.rule-checkbox').click(function(){
        var category_num=$(this).attr("data-category-num");
        if($(this).prop("checked")){
          $('.category-checkbox[data-category-num='+category_num+']').prop("checked", true);
        }
        else{
          if($('input.rule-checkbox:checked[data-category-num='+category_num+']').length==0){
            $('.category-checkbox[data-category-num='+category_num+']').prop("checked", false);
          }
        }
      });
      filter = data;
    });
  });
});