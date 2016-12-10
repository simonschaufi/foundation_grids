tx_gridelements {
	setup {
		tabs4 {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:tabs4.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:tabs4.description
			icon = EXT:foundation_grids/Resources/Public/Icons/grid_tabs4.png
			frame = 2
			topLevelLayout = 0
			config {
				colCount = 4
				rowCount = 1
				rows.1.columns {
					1 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tab1
						colPos = 101
					}
					2 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tab2
						colPos = 102
					}
					3 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tab3
						colPos = 103
					}
					4 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tab4
						colPos = 104
					}
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_tabs4.xml
		}
	}
}