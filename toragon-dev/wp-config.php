<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'isokoma' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']{WEXF2Qoz2YqdJ2K6}e9V3*`]*)=$:AMao|Blb+lA$]<Z8:/zmtS/&0@*K7fW^h' );
define( 'SECURE_AUTH_KEY',  '[zl$L+AUfYy6;)4!h0#Au@Dm5l=Tn9d~V~;uW^= H;n>&K1om=:4@~s(>PL(%)C`' );
define( 'LOGGED_IN_KEY',    '<iou3n*r,B1[s=N.VFPC%kBgdahpUEca:lk<0fb:L.GcB}^FO;z([GM Gl>M&I!>' );
define( 'NONCE_KEY',        'v%KK[X(.}H#vc7wG9m*Cx4,YqIjm[V0:V1kG^X#|<irQGGKBZ6II2umNw4&I,,^$' );
define( 'AUTH_SALT',        'Bn/%.K3pZQ&lI**L7Eu!UCyF#Mx6uA[!RL=d]d;-)^[l*~:AGR.BX}s,<c5D`STZ' );
define( 'SECURE_AUTH_SALT', 's?tE#<.}5QQ lUT:l&(Hdu*:P/,+?t&gk-q0f4Tm[NbirOT$x,O,Ywx;>=Z#<-rd' );
define( 'LOGGED_IN_SALT',   '{?|+_:pX:l#M-]1;rO0eFO=?ZK5E6OeOM5G[p.vaj:Ktm)p!>,6E>SxNl[hh67J?' );
define( 'NONCE_SALT',       'gEYiZqJ-lMxX^B%<5M=]rieP@H^yUc5EGNZ1&h^Rk$Dq~Rj6c-?t6.cQACi>=h=m' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
define('ALLOW_UNFILTERED_UPLOADS', true);
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('WP_CACHE', false);
