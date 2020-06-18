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
});
$(`button[name=result]`).on("click", function(e) {
    $.get( "http://109.235.69.203:8080/data/1001/", function(e) {
        for (var i = 0; i< e.length; i++) {
            $("table").append(`<tr> <td>${e[i].name}</td> <td>${e[i].date}</td> <td>${e[i].car}</td> <td>${e[i].exam}</td> </tr>`)
        }
        });
});

    