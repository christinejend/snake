/* hepl-mmi/zwazo
 *
 * /game.js - Canvas initialisation, game launcher
 *
 * coded by leny@flatLand!
 * started at 18/04/2016
 */

( function( Snake ) {
    "use strict";

    var oApp = {
            "canvas": null,
            "context": null,
            "width": null,
            "height": null
        },
        _isCanvasSupported;

    _isCanvasSupported = function( $canvasElt ) {
        return !!$canvasElt.getContext;
    };

    oApp.setup = function() {
        this.canvas = document.querySelector( "#game" );

        if ( !_isCanvasSupported( this.canvas ) ) {
            return console.error( "Canvas isn't supported!" );
        }

        this.context = this.canvas.getContext( "2d" );
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        window.game = new Snake( this );
    };

    oApp.setup();
} )( window.Snake );
