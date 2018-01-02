lib.foundation_grids {
	flexslider2 < lib.gridelements.defaultGridSetup
	flexslider2 {
		columns {
			101 < .default
			101.renderObj.wrap = <li>|</li>
			101.wrap (
				<div class="flexslider" id="flexslider{field:uid}">
					<ul class="slides">|</ul>
				</div>
			)
			101.insertData = 1
		}

		append = COA
		append {
			wrap (
			<script>
			( function($) {
				$(document).ready(function() {
				|
				});
			}) (jQuery);
			</script>
			)

			10 = TEXT
			10.value = $('#flexslider{field:uid}').flexslider(
			10.insertData = 1

			20 = TEXT
			20.value = {

			30 = TEXT
			30.wrap = |
			30.insertData = 1
			30.value (
				direction: "{field:flexform_direction}",
				slideshowSpeed: {field:flexform_slidespeed},
				animation: "{field:flexform_animation}",
				animationSpeed: {field:flexform_animationspeed},
				animationLoop: {field:flexform_animationloop},
				useCSS: false,
				controlNav: {field:flexform_showcontrolnav},
				directionNav: {field:flexform_showdirnav},
				pausePlay: {field:flexform_showpause},
				pauseOnHover: {field:flexform_pauseonhover},
				initDelay: {field:flexform_initdelay},
				randomize: {field:flexform_randomize},
				reverse: {field:flexform_reverse}
			)
			40 = TEXT
			40.value = });
		}
	}
}


/**
 * Assign foundation grid elements to gridelements extension
 */
tt_content.gridelements_pi1.20.10.setup {
	flexslider2 < lib.foundation_grids.flexslider2
}

/**
 * CSS and JS for flexslider (content slider grid)
 */
page {
	includeCSS {
		flexslider2 = EXT:foundation_grids/Resources/Public/Flexslider2/flexslider.css
	}
	includeJSFooterlibs {
		flexslider2 = EXT:foundation_grids/Resources/Public/Flexslider2/jquery.flexslider-min.js
	}
}