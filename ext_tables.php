<?php
if (!defined ('TYPO3_MODE')) die ('Access denied.');

// Add static typoscript configurations
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'Grids for Foundation');