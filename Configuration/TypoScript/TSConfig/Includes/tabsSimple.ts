tx_gridelements {
	setup {
		tabsSimple {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:tabsSimple.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:tabsSimple.description
			icon = EXT:foundation_grids/Resources/Public/Icons/grid_simpletabs.png
			frame = 2
			topLevelLayout = 0
			config {
				colCount = 1
				rowCount = 1
				rows.1.columns.1 {
					name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tabElements
					colPos = 101
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_tabs_simple.xml
		}
	}
}