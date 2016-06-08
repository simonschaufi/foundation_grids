tx_gridelements {
	# boolean; Usually if the ID of the TSconfig is the same like the record ID of grid elements,
	# the configuration of the TSconfig overrides the record configuration recursively (!).
	# If this option is set the record configuration overrides the TSconfig.
	#overruleRecords = 1
	# string; With this option you can disable single layouts. Use the record or TSconfig ID.
	#excludeLayoutIds = 3,slider

	setup {
		# mixed; This will be the layout ID. It can be a string or a integer.
		2cols {
			# string; "LLL:" can be used.
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:2cols.title
			# string; "LLL:" can be used.
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:2cols.description
			# string; "EXT:" can be used
			icon = EXT:foundation_grids/Resources/Public/Icons/gridlayout_col2.gif
			# integer; Colored frame. 0, 1 = red, 2 = green, 3 = blue
			frame = 3
			# boolean;
			topLevelLayout = 0
			# Normal grid configuration
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
			# string; "FILE:" can be used
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_2col.xml
			#flexformDS (
			#<?xml...
			#)
		}

		3cols {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:3cols.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:3cols.description
			icon = EXT:foundation_grids/Resources/Public/Icons/gridlayout_col3.gif
			frame = 3
			topLevelLayout = 0
			config {
				colCount = 3
				rowCount = 1
				rows.1 {
					columns {
						1 {
							name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.leftColumn
							colPos = 101
						}
						2 {
							name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.centerColumn
							colPos = 102
						}
						3 {
							name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.rightColumn
							colPos = 103
						}
					}
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_3col.xml
		}

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

		tabs6 {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:tabs6.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:tabs6.description
			icon = EXT:foundation_grids/Resources/Public/Icons/grid_tabs6.png
			frame = 2
			topLevelLayout = 0
			config {
				colCount = 6
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
					5 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tab5
						colPos = 105
					}
					6 {
						name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.tab6
						colPos = 106
					}
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_tabs6.xml
		}

		accordion {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:accordion.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:accordion.description
			icon = EXT:foundation_grids/Resources/Public/Icons/grid_accordion.png
			frame = 2
			topLevelLayout = 0
			config {
				colCount = 1
				rowCount = 1
				rows.1.columns.1 {
					name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.accordionElements
					colPos = 101
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_accordion.xml
		}

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

		slider {
			title = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:slider.title
			description = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:slider.description
			icon = EXT:foundation_grids/Resources/Public/Icons/grid_slider.png
			frame = 1
			topLevelLayout = 0
			config {
				colCount = 1
				rowCount = 1
				rows.1.columns.1 {
					name = LLL:EXT:foundation_grids/Resources/Private/Language/locallang_db.xlf:celayout.sliderElements
					colPos = 101
				}
			}
			flexformDS = FILE:EXT:foundation_grids/Configuration/FlexForm/flexform_slider.xml
		}
	}
}