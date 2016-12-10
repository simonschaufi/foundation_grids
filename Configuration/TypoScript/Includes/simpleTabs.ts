lib.foundation_grids {
	# Tabs
	simpleTabs < lib.gridelements.defaultGridSetup
	simpleTabs {
		outerWrap = <div class="{field:flexform_style}">|</div>
		outerWrap.insertData = 1

		prepend = CONTENT
		prepend {
			table = tt_content
			select {
				selectFields = header, uid, tx_gridelements_container, sorting
				where = 1=1
				andWhere = tx_gridelements_container={field:uid}
				andWhere.insertData = 1
				orderBy = sorting
			}
			wrap = <ul class="nav nav-tabs">|</ul>
			renderObj = COA
			renderObj {
				5 = LOAD_REGISTER
				5 {
					TabCount.cObject = TEXT
					TabCount.cObject.data = register:TabCount
					TabCount.cObject.wrap = |+1
					TabCount.prioriCalc = intval
				}
				10 = TEXT
				10 {
					field = header
					insertData = 1
					wrap = <a href="#tab-{field:uid}" role="tab" data-toggle="tab">|</a>
					outerWrap.cObject = CASE
					outerWrap.cObject {
						key.data = register:TabCount
						default = TEXT
						default.value = <li id="tab-element-{field:uid}">|</li>
						1 = TEXT
						1.value = <li class="active" id="tab-element-{field:uid}">|</li>
					}
				}
			}
		}

		columns {
			101 < .default
			101 {
				wrap = <div class="tab-content">|</div>
				renderObj {
					5 = LOAD_REGISTER
					5 {
						TabCount2.cObject = TEXT
						TabCount2.cObject.data = register:TabCount2
						TabCount2.cObject.wrap = |+1
						TabCount2.prioriCalc = intval
					}
					stdWrap.insertData = 1
					stdWrap.outerWrap.cObject = CASE
					stdWrap.outerWrap.cObject {
						key.data = register:TabCount2
						default = TEXT
						default.value = <div class="tab-pane fade" id="tab-{field:uid}">|</div>
						1 = TEXT
						1.value = <div class="tab-pane fade active in" id="tab-{field:uid}">|</div>
					}
					# don't show headers in tabs
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
				}
			}
		}
	}
}


/**
 * Assign foundation grid elements to gridelements extension
 */
tt_content.gridelements_pi1.20.10.setup {
	simpleTabs < lib.foundation_grids.simpleTabs
}