// <div class="test1"></div>
// <div class="test2"></div>
// <a class="test3" href="http://www30.zippyshare.com/v/77733359/file.html">Link zippy</a>
// <a class="test4" href="http://www51.zippyshare.com/v/75669396/file.html">Link zippy</a>

$(".test1").zippy({
	www: 25,
	file: 65758465
});

$(".test2").zippy({
	www: 30,
	file: 74071730,
	method: "html"
});

// $("a[href*='zippyshare.com/v/'][href$='/file.html']").each(function () {

$(".test3").each(function () {
	$(this).zippy({
		www: this.href.match(/www(\d+)\.zippyshare.com/i)[1],
		file: this.href.match(/zippyshare\.com\/v\/(\d+)\/file\.html/i)[1],
		method: "after"
	});
});

$(".test4").each(function () {
	$(this).zippy({
		www: this.href.match(/www(\d+)\.zippyshare.com/i)[1],
		file: this.href.match(/zippyshare\.com\/v\/(\d+)\/file\.html/i)[1]
	});
});
