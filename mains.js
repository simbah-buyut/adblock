(function () {
	$(window).load(function () {
		if ($(".ad").first().height() < 10) {
			$(".ad").each(function () {
				$(".modal-fader").show();
				$(".modal-window").show();
			});
		}
		
		$(".modal-hide").click(function () {
			$(".modal-fader").hide();
			$(".modal-window").hide();
		});
	});
})();
(function () {
	$(window).load(function () {
		if($(".ad").first().height() < 10) {
			$(".adblock-show").show();
			$(".adblock-hide").addClass("active");
		}
	});
})();