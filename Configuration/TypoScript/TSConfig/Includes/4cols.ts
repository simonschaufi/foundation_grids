tx_gridelements {
	setup {
		4cols {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:4cols.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:4cols.description
			icon = EXT:foundation_grids/Resources/Public/Icons/gridlayout_col4.gif
			frame = 3
			topLevelLayout = 0
			config {
				colCount = 4
				rowCount = 1
				rows.1.columns {
					1 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
						colPos = 101
					}
					2 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.column2
						colPos = 102
					}
					3 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.column3
						colPos = 103
					}
					4 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
						colPos = 104
					}
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_4col.xml
		}
	}
}