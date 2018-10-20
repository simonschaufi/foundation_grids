<?php
defined('TYPO3_MODE') or die();

call_user_func(function () {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('foundation_grids', 'Configuration/TypoScript', 'Grids for Foundation');
});
