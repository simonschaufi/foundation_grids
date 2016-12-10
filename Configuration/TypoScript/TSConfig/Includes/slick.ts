tx_gridelements {
	setup {
		slick {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:slick.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:slick.description
			icon = EXT:foundation_grids/Resources/Public/Icons/grid_slick.png
			frame = 1
			topLevelLayout = 0
			config {
				colCount = 1
				rowCount = 1
				rows.1.columns.1 {
					name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.slickElements
					colPos = 101
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_slick.xml
		}
	}
}