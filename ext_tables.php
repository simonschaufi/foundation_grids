<?php
defined('TYPO3_MODE') or die();

$boot = function ($_EXTKEY) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Grids for Foundation');
};
$boot($_EXTKEY);
unset($boot);
