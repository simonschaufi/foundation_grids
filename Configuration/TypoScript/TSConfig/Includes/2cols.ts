tx_gridelements {
	setup {
		2cols {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:2cols.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:2cols.description
			icon = EXT:foundation_grids/Resources/Public/Icons/gridlayout_col2.gif
			# integer; Colored frame. 0, 1 = red, 2 = green, 3 = blue
			frame = 3
			topLevelLayout = 0
			config {
				colCount = 2
				rowCount = 1
				rows.1 {
					columns {
						1 {
							name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
							colPos = 101
						}
						2 {
							name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
							colPos = 102
						}
					}
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_2col.xml
		}
	}
}