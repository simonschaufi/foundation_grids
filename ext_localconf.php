<?php
defined('TYPO3_MODE') or die();

$boot = function ($_EXTKEY) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TypoScript/TSConfig/pageTSConfig.ts">'
    );
};
$boot($_EXTKEY);
unset($boot);
