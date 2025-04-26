<?php
/**
 * Plugin Name:       Blockylicious
 * Description:       A plugin of funky blocks. It's my first plugin 
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Spring
 * Author URI:        https://github.com/springtofigh
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       Blockylicious
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

	function create_custome_block_category($categories) {
		// wp_send_json($categories);  // آرایه ای از تمام کتگوری ها

		//میخوایم المان ما در ابتدای ویجت ها نمایش داده بشه
		array_unshift($categories, [
			"slug" => "blockylicious",
			"title" => "Blockylicious"
		]);
		return $categories;
	}
function create_block_blockylicious_block_init() {
	add_filter( 'block_categories_all', 'create_custome_block_category' );
			register_block_type( __DIR__ . "/build/blocks/curvy" );
}
add_action( 'init', 'create_block_blockylicious_block_init' );
