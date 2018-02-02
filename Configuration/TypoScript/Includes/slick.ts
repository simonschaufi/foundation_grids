lib.foundation_grids {
	slick < lib.gridelements.defaultGridSetup
	slick {
		columns {
			101 < .default
			101 {
				dataWrap = <div class="slickslider" id="slickslider{field:uid}">|</div>
			}
		}

		/*
		jsFooterInline.cObject = COA
		jsFooterInline.cObject {
			wrap (
			( function($) {
			$(document).ready(function() {|});
			}) (jQuery);
			)

			10 = TEXT
			10 {
				field = uid
				wrap = $('#slickslider|').slick({
			}

			30 = COA
			30 {
				# https://forge.typo3.org/issues/70483
				stdWrap.substring = 0,-1

				1 = TEXT
				1 {
					wrap = accessibility:|,
					field = flexform_accessibility
					fieldRequired = flexform_accessibility
				}
				2 = TEXT
				2 {
					wrap = adaptiveHeight:|,
					field = flexform_adaptiveHeight
					fieldRequired = flexform_adaptiveHeight
				}
				3 = TEXT
				3 {
					wrap = autoplay:|,
					field = flexform_autoplay
					fieldRequired = flexform_autoplay
				}
				4 = TEXT
				4 {
					wrap = autoplaySpeed:|,
					field = flexform_autoplaySpeed
					fieldRequired = flexform_autoplaySpeed
				}
				5 = TEXT
				5 {
					wrap = arrows:|,
					field = flexform_arrows
					fieldRequired = flexform_arrows
				}
				6 = TEXT
				6 {
					wrap = asNavFor:'|',
					field = flexform_asNavFor
					fieldRequired = flexform_asNavFor
				}
				7 = TEXT
				7 {
					wrap = appendArrows:'|',
					field = flexform_appendArrows
					fieldRequired = flexform_appendArrows
				}
				8 = TEXT
				8 {
					// TODO: html or object?
					wrap = prevArrow:|,
					field = flexform_prevArrow
					fieldRequired = flexform_prevArrow
				}
				9 = TEXT
				9 {
					// TODO: html or object?
					wrap = nextArrow:|,
					field = flexform_nextArrow
					fieldRequired = flexform_nextArrow
				}
				10 = TEXT
				10 {
					wrap = centerMode:|,
					field = flexform_centerMode
					fieldRequired = flexform_centerMode
				}
				11 = TEXT
				11 {
					wrap = centerPadding:'|',
					field = flexform_centerPadding
					fieldRequired = flexform_centerPadding
				}
				12 = TEXT
				12 {
					wrap = cssEase:'|',
					field = flexform_cssEase
					fieldRequired = flexform_cssEase
				}
				13 = TEXT
				13 {
					wrap = customPaging:|,
					field = flexform_customPaging
					fieldRequired = flexform_customPaging
				}
				14 = TEXT
				14 {
					wrap = dots:|,
					field = flexform_dots
					fieldRequired = flexform_dots
				}
				15 = TEXT
				15 {
					wrap = draggable:|,
					field = flexform_draggable
					fieldRequired = flexform_draggable
				}
				16 = TEXT
				16 {
					wrap = fade:|,
					field = flexform_fade
					fieldRequired = flexform_fade
				}
				17 = TEXT
				17 {
					wrap = focusOnSelect:|,
					field = flexform_focusOnSelect
					fieldRequired = flexform_focusOnSelect
				}
				18 = TEXT
				18 {
					wrap = easing:'|',
					field = flexform_easing
					fieldRequired = flexform_easing
				}
				19 = TEXT
				19 {
					wrap = edgeFriction:|,
					field = flexform_edgeFriction
					fieldRequired = flexform_edgeFriction
				}
				20 = TEXT
				20 {
					wrap = infinite:|,
					field = flexform_infinite
					fieldRequired = flexform_infinite
				}
				21 = TEXT
				21 {
					wrap = initialSlide:|,
					field = flexform_initialSlide
					fieldRequired = flexform_initialSlide
				}
				22 = TEXT
				22 {
					wrap = lazyLoad:'|',
					field = flexform_lazyLoad
					fieldRequired = flexform_lazyLoad
				}
				23 = TEXT
				23 {
					wrap = pauseOnHover:|,
					field = flexform_pauseOnHover
					fieldRequired = flexform_pauseOnHover
				}
				24 = TEXT
				24 {
					wrap = pauseOnDotsHover:|,
					field = flexform_pauseOnDotsHover
					fieldRequired = flexform_pauseOnDotsHover
				}
				25 = TEXT
				25 {
					wrap = respondTo:'|',
					field = flexform_respondTo
					fieldRequired = flexform_respondTo
				}
				26 = TEXT
				26 {
					wrap = responsive:|,
					field = flexform_responsive
					fieldRequired = flexform_responsive
				}
				27 = TEXT
				27 {
					wrap = rows:|,
					field = flexform_rows
					fieldRequired = flexform_rows
				}
				28 = TEXT
				28 {
					wrap = slide:|,
					field = flexform_slide
					fieldRequired = flexform_slide
				}
				29 = TEXT
				29 {
					wrap = slidesPerRow:|,
					field = flexform_slidesPerRow
					fieldRequired = flexform_slidesPerRow
				}
				30 = TEXT
				30 {
					wrap = slidesToShow:|,
					field = flexform_slidesToShow
					fieldRequired = flexform_slidesToShow
				}
				31 = TEXT
				31 {
					wrap = slidesToScroll:|,
					field = flexform_slidesToScroll
					fieldRequired = flexform_slidesToScroll
				}
				32 = TEXT
				32 {
					wrap = speed:|,
					field = flexform_speed
					fieldRequired = flexform_speed
				}
				33 = TEXT
				33 {
					wrap = swipe:|,
					field = flexform_swipe
					fieldRequired = flexform_swipe
				}
				34 = TEXT
				34 {
					wrap = swipeToSlide:|,
					field = flexform_swipeToSlide
					fieldRequired = flexform_swipeToSlide
				}
				35 = TEXT
				35 {
					wrap = touchMove:|,
					field = flexform_touchMove
					fieldRequired = flexform_touchMove
				}
				36 = TEXT
				36 {
					wrap = touchThreshold:|,
					field = flexform_touchThreshold
					fieldRequired = flexform_touchThreshold
				}
				37 = TEXT
				37 {
					wrap = useCSS:|,
					field = flexform_useCSS
					fieldRequired = flexform_useCSS
				}
				38 = TEXT
				38 {
					wrap = variableWidth:|,
					field = flexform_variableWidth
					fieldRequired = flexform_variableWidth
				}
				39 = TEXT
				39 {
					wrap = vertical:|,
					field = flexform_vertical
					fieldRequired = flexform_vertical
				}
				40 = TEXT
				40 {
					wrap = verticalSwiping:|,
					field = flexform_verticalSwiping
					fieldRequired = flexform_verticalSwiping
				}
				41 = TEXT
				41 {
					wrap = rtl:|,
					field = flexform_rtl
					fieldRequired = flexform_rtl
				}
			}

			40 = TEXT
			40.value = });
		}
		*/

		# wait until https://forge.typo3.org/issues/70924 is merged
		postUserFunc = Simonschaufi\FoundationGrids\Userfunction\JsFooterInline->jsFooterInline
		postUserFunc {
			uid.field = uid

			jsFooterInline = COA
			jsFooterInline {
				wrap = (function($){$(document).ready(function(){|});})(jQuery);

				10 = TEXT
				10 {
					field = uid
					wrap = $('#slickslider|').slick({
				}

				30 = COA
				30 {
					# https://forge.typo3.org/issues/70483
					stdWrap.substring = 0,-1

					1 = TEXT
					1 {
						value = accessibility:false,
						if.isFalse.field = flexform_accessibility
					}
					2 = TEXT
					2 {
						wrap = adaptiveHeight:|,
						field = flexform_adaptiveHeight
						fieldRequired = flexform_adaptiveHeight
					}
					3 = TEXT
					3 {
						wrap = autoplay:|,
						field = flexform_autoplay
						fieldRequired = flexform_autoplay
					}
					4 = TEXT
					4 {
						wrap = autoplaySpeed:|,
						field = flexform_autoplaySpeed
						fieldRequired = flexform_autoplaySpeed
						if {
							value = 3000
							equals.field = flexform_autoplaySpeed
							negate = 1
						}
					}
					5 = TEXT
					5 {
						value = arrows:false,
						fieldRequired = flexform_arrows
						if.isFalse.field = flexform_arrows
					}
					6 = TEXT
					6 {
						wrap = asNavFor:'|',
						field = flexform_asNavFor
						fieldRequired = flexform_asNavFor
					}
					7 = TEXT
					7 {
						wrap = appendArrows:'|',
						field = flexform_appendArrows
						fieldRequired = flexform_appendArrows
					}
					8 = TEXT
					8 {
						// TODO: html or object?
						wrap = prevArrow:|,
						field = flexform_prevArrow
						fieldRequired = flexform_prevArrow
					}
					9 = TEXT
					9 {
						// TODO: html or object?
						wrap = nextArrow:|,
						field = flexform_nextArrow
						fieldRequired = flexform_nextArrow
					}
					10 = TEXT
					10 {
						wrap = centerMode:|,
						field = flexform_centerMode
						fieldRequired = flexform_centerMode
					}
					11 = TEXT
					11 {
						wrap = centerPadding:'|',
						field = flexform_centerPadding
						fieldRequired = flexform_centerPadding
					}
					12 = TEXT
					12 {
						wrap = cssEase:'|',
						field = flexform_cssEase
						fieldRequired = flexform_cssEase
					}
					13 = TEXT
					13 {
						wrap = customPaging:|,
						field = flexform_customPaging
						fieldRequired = flexform_customPaging
					}
					14 = TEXT
					14 {
						value = dots:true,
						fieldRequired = flexform_dots
					}
					15 = TEXT
					15 {
						wrap = draggable:false,
						fieldRequired = flexform_draggable
						if.isFalse.field = flexform_draggable
					}
					16 = TEXT
					16 {
						wrap = fade:|,
						field = flexform_fade
						fieldRequired = flexform_fade
					}
					17 = TEXT
					17 {
						wrap = focusOnSelect:|,
						field = flexform_focusOnSelect
						fieldRequired = flexform_focusOnSelect
					}
					18 = TEXT
					18 {
						wrap = easing:'|',
						field = flexform_easing
						fieldRequired = flexform_easing
					}
					19 = TEXT
					19 {
						wrap = edgeFriction:|,
						field = flexform_edgeFriction
						fieldRequired = flexform_edgeFriction
						if {
							value = 0.15
							equals.field = flexform_edgeFriction
							negate = 1
						}
					}
					20 = TEXT
					20 {
						value = infinite:false,
						fieldRequired = flexform_infinite
						if.isFalse.field = flexform_infinite
					}
					21 = TEXT
					21 {
						wrap = initialSlide:|,
						field = flexform_initialSlide
						fieldRequired = flexform_initialSlide
					}
					22 = TEXT
					22 {
						wrap = lazyLoad:'|',
						field = flexform_lazyLoad
						fieldRequired = flexform_lazyLoad
						if {
							value = ondemand
							equals.field = flexform_lazyLoad
							negate = 1
						}
					}
					23 = TEXT
					23 {
						value = pauseOnHover:false,
						fieldRequired = flexform_pauseOnHover
						if.isFalse.field = flexform_pauseOnHover
					}
					24 = TEXT
					24 {
						wrap = pauseOnDotsHover:|,
						field = flexform_pauseOnDotsHover
						fieldRequired = flexform_pauseOnDotsHover
					}
					25 = TEXT
					25 {
						wrap = respondTo:'|',
						field = flexform_respondTo
						fieldRequired = flexform_respondTo
						if {
							value = window
							equals.field = flexform_respondTo
							negate = 1
						}
					}
					26 = TEXT
					26 {
						wrap = responsive:|,
						field = flexform_responsive
						fieldRequired = flexform_responsive
					}
					27 = TEXT
					27 {
						wrap = rows:|,
						field = flexform_rows
						fieldRequired = flexform_rows
						if {
							value = 1
							equals.field = flexform_rows
							negate = 1
						}
					}
					28 = TEXT
					28 {
						wrap = slide:|,
						field = flexform_slide
						fieldRequired = flexform_slide
					}
					29 = TEXT
					29 {
						wrap = slidesPerRow:|,
						field = flexform_slidesPerRow
						fieldRequired = flexform_slidesPerRow
					}
					30 = TEXT
					30 {
						wrap = slidesToShow:|,
						field = flexform_slidesToShow
						fieldRequired = flexform_slidesToShow
						if {
							value = 1
							equals.field = flexform_slidesToShow
							negate = 1
						}
					}
					31 = TEXT
					31 {
						wrap = slidesToScroll:|,
						field = flexform_slidesToScroll
						fieldRequired = flexform_slidesToScroll
						if {
							value = 1
							equals.field = flexform_slidesToScroll
							negate = 1
						}
					}
					32 = TEXT
					32 {
						wrap = speed:|,
						field = flexform_speed
						fieldRequired = flexform_speed
						if {
							value = 300
							equals.field = flexform_speed
							negate = 1
						}
					}
					33 = TEXT
					33 {
						value = swipe:false,
						fieldRequired = flexform_swipe
						if.isFalse.field = flexform_swipe
					}
					34 = TEXT
					34 {
						wrap = swipeToSlide:|,
						field = flexform_swipeToSlide
						fieldRequired = flexform_swipeToSlide
					}
					35 = TEXT
					35 {
						value = touchMove:false,
						fieldRequired = flexform_touchMove
						if.isFalse.field = flexform_touchMove
					}
					36 = TEXT
					36 {
						wrap = touchThreshold:|,
						field = flexform_touchThreshold
						fieldRequired = flexform_touchThreshold
						if {
							value = 5
							equals.field = flexform_touchThreshold
							negate = 1
						}
					}
					37 = TEXT
					37 {
						value = useCSS:false,
						fieldRequired = flexform_useCSS
						if.isFalse.field = flexform_swipe
					}
					38 = TEXT
					38 {
						wrap = variableWidth:|,
						field = flexform_variableWidth
						fieldRequired = flexform_variableWidth
					}
					39 = TEXT
					39 {
						wrap = vertical:|,
						field = flexform_vertical
						fieldRequired = flexform_vertical
					}
					40 = TEXT
					40 {
						wrap = verticalSwiping:|,
						field = flexform_verticalSwiping
						fieldRequired = flexform_verticalSwiping
					}
					41 = TEXT
					41 {
						wrap = rtl:|,
						field = flexform_rtl
						fieldRequired = flexform_rtl
					}
				}

				40 = TEXT
				40.value = });
			}
		}
	}
}


/**
 * Assign foundation grid elements to gridelements extension
 */
tt_content.gridelements_pi1.20.10.setup {
	slick < lib.foundation_grids.slick
}