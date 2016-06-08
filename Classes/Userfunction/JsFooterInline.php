<?php

namespace Simonschaufi\FoundationGrids\Userfunction;

use TYPO3\CMS\Core\Page\PageRenderer;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Frontend\ContentObject\ContentObjectRenderer;

class JsFooterInline {

	/**
	 * Reference to the parent (calling) cObject set from TypoScript
	 * @var ContentObjectRenderer
	 */
	public $cObj;

	/**
	 * @param string $content Content input.
	 * @param array $configuration TypoScript configuration
	 * @return string
	 */
	public function jsFooterInline($content, array $configuration) {
		$element = $this->cObj->stdWrap($configuration['uid'], $configuration['uid.']);

		if (isset($configuration['jsFooterInline'])) {
			$jsFooterInline = $this->cObj->cObjGetSingle($configuration['jsFooterInline'], $configuration['jsFooterInline.']);

			/** @var PageRenderer $pageRenderer */
			$pageRenderer = GeneralUtility::makeInstance(PageRenderer::class);
			$pageRenderer->addJsFooterInlineCode('gridelements'.$element, $jsFooterInline);
		}
		return $content;
	}
}
