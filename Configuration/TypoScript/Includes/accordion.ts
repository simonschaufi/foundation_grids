lib.foundation_grids {
	accordion  < lib.gridelements.defaultGridSetup
	accordion {
		# wrap around all (outerWrap does not support splitChar)
		wrap3 {
			splitChar = !
			stdWrap.cObject = COA
			stdWrap.cObject {
				wrap = <ul class="accordion" data-accordion id="accordion-{field:uid}" |>!</ul>
				1 = TEXT
				1 {
					noTrimWrap = | ||
					value = data-multi-expand="true"
					fieldRequired = flexform_multiExpand
				}
				2 = TEXT
				2 {
					noTrimWrap = | ||
					value = data-allow-all-closed="true"
					fieldRequired = flexform_allClosed
				}
			}
			insertData = 1
		}

		columns {
			101 < .default
			101 {
				renderObj {
					stdWrap.outerWrap.cObject = CASE
					stdWrap.outerWrap.cObject {
						key < plugin.tx_foundationgrids.settings.foundationVersion

						5 = TEXT
						5.value = <li class="accordion-navigation">|</li>

						default = TEXT
						default {
							value = <li class="accordion-item" data-accordion-item>|</li>
							override = <li class="accordion-item is-active" data-accordion-item>|</li>
							override {
								if {
									# value from parent flexform field
									isTrue.data = field:parentgrid_pi_flexform|data|sDEF|lDEF|expandFirst|vDEF
									# AND
									value = 1
									equals.data = register:accordionCount
								}
							}
						}
					}

					# thanks to Josef Körner (brandical.de) for simplification
					5 = LOAD_REGISTER
					5 {
						accordionCount {
							cObject = TEXT
							cObject.data = register:accordionCount
							cObject.wrap = |+1
							prioriCalc = intval
						}
					}
					10 = CASE
					10 {
						key < plugin.tx_foundationgrids.settings.foundationVersion

						5 = TEXT
						5 {
							field = header
							insertData = 1
							wrap = <a class="accordion-toggle register-{register:accordionCount}" href="#panel-{field:uid}">|</a><div id="panel-{field:uid}" class="content">
							wrap {
								# expand first panel
								override = <a class="accordion-toggle register-{register:accordionCount}" href="#panel-{field:uid}">|</a><div id="panel-{field:uid}" class="content active">
								override {
									if {
										# value from parent flexform field
										isTrue.data = field:parentgrid_pi_flexform|data|sDEF|lDEF|expandFirst|vDEF
										# AND
										value = 1
										equals.data = register:accordionCount
									}
								}
							}
						}

						default = TEXT
						default {
							field = header
							insertData = 1
							wrap = <a class="accordion-title" href="#">|</a><div class="accordion-content" data-tab-content>
							wrap {
								# expand first panel
								override = <a class="accordion-title" href="#">|</a><div class="accordion-content active" data-tab-content>
								override {
									if {
										# value from parent flexform field
										isTrue.data = field:parentgrid_pi_flexform|data|sDEF|lDEF|expandFirst|vDEF
										# AND
										value = 1
										equals.data = register:accordionCount
									}
								}
							}
						}
					}
					# don't show headers in accordion
					#20 =< tt_content
					20 < tt_content
					20 {
						text.10 >
						image.10 >
						textpic.10 >
						uploads.10 >
						table.10 >
						multimedia.10 >
						media.10 >
						mailform.10 >
						menu.10 >
						videoce_videocontent.10 >
					}
					30 = TEXT
					30.wrap = |</div>
				}
			}
		}
	}
}


/**
 * Assign foundation grid elements to gridelements extension
 */
tt_content.gridelements_pi1.20.10.setup {
	accordion < lib.foundation_grids.accordion
}