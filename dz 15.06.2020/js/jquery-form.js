$("form").on("submit", function(e) {
    e.preventDefault();
    var name = $("[name=name]").val();
    var date = $("[name=date]").val();
    var car = $("[name=carMake]").val();
    var exam = $("[name=passExam]").val();
$.post("http://109.235.69.203:8080/data/1001/", {
name, date, car, exam
});
$("form").trigger('reset');
$(`button[name=result]`).on("click", function(e) {
    $("table").append(`<tr> <td>${name}</td> <td>${date}</td> <td>${car}</td> <td>${exam}</td> </tr>`)
});
});


