function demo() {

    $(".test1").zippy({
        www: 26,
        file: "XVcARUzL",
        auto: true
    });

    $(".test2").each(function () {
        $(this).zippy({
            www: this.href.match(/www(\d+)\.zippyshare.com/i)[1],
            file: this.href.match(/zippyshare\.com\/v\/(.+)\/file\.html/i)[1]
        });
    });
}

$(function () {
    demo();
});
