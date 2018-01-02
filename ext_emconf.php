<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "foundation_grids".
 *
 * Auto generated 28-10-2015 21:21
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
	'title' => 'Grids for foundation',
	'description' => 'Gridelements for ZURB foundation CSS Framework. Column grids, grids for simple accordions, tabs and content slider.',
	'category' => 'misc',
	'version' => '1.1.0',
	'state' => 'stable',
	'uploadfolder' => false,
	'createDirs' => '',
	'clearcacheonload' => true,
	'author' => 'Simon Schaufelberger',
	'author_email' => 'simonschaufi+typo3@gmail.com',
	'author_company' => '',
	'constraints' => [
		'depends' => [
			'typo3' => '6.2.0-8.99.99',
			'gridelements' => '3.0.0-0.0.0',
		],
		'conflicts' => [
		],
		'suggests' => [
		],
	],
];
