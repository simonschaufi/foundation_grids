lib.foundation_grids {
	2cols < lib.gridelements.defaultGridSetup
	2cols {
		wrap = <div class="row">|</div>
		columns {
			101 < .default
			101.dataWrap = <div class="{field:flexform_xsCol1} {field:flexform_smCol1} {field:flexform_mdCol1} {field:flexform_lgCol1} {field:flexform_col21class} column">|</div>
			101.wrap >
			102 < .101
			102.dataWrap = <div class="{field:flexform_xsCol2} {field:flexform_smCol2} {field:flexform_mdCol2} {field:flexform_lgCol2} {field:flexform_col22class} column">|</div>
		}
	}
	
	3cols < .2cols
	3cols {
		columns {
			101.dataWrap = <div class="{field:flexform_xsCol1} {field:flexform_smCol1} {field:flexform_mdCol1} {field:flexform_lgCol1} {field:flexform_col31class} column">|</div>
			102.dataWrap = <div class="{field:flexform_xsCol2} {field:flexform_smCol2} {field:flexform_mdCol2} {field:flexform_lgCol2} {field:flexform_col32class} column">|</div>
			103 < .101
			103.dataWrap = <div class="{field:flexform_xsCol3} {field:flexform_smCol3} {field:flexform_mdCol3} {field:flexform_lgCol3} {field:flexform_col33class} column">|</div>
		}
	}
	
	4cols < .3cols
	4cols {
		columns {
			101.dataWrap = <div class="{field:flexform_xsCol1} {field:flexform_smCol1} {field:flexform_mdCol1} {field:flexform_lgCol1} {field:flexform_col41class} column">|</div>
			102.dataWrap = <div class="{field:flexform_xsCol2} {field:flexform_smCol2} {field:flexform_mdCol2} {field:flexform_lgCol2} {field:flexform_col42class} column">|</div>
			103.dataWrap = <div class="{field:flexform_xsCol3} {field:flexform_smCol3} {field:flexform_mdCol3} {field:flexform_lgCol3} {field:flexform_col43class} column">|</div>
			104 < .101
			104.dataWrap = <div class="{field:flexform_xsCol4} {field:flexform_smCol4} {field:flexform_mdCol4} {field:flexform_lgCol4} {field:flexform_col44class} column">|</div>
		}
	}
}


/**
 * Assign foundation grid elements to gridelements extension
 */
tt_content.gridelements_pi1.20.10.setup {
	2cols < lib.foundation_grids.2cols
	3cols < lib.foundation_grids.3cols
	4cols < lib.foundation_grids.4cols
}