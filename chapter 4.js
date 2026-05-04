yui().use('node', 'anim', 'anim-node-plugin', function (Y) {

    var o = Y.one('#o'),
        oW = o.get('offsetWidth'),
        off = o.get('offsetheight'),
        max = 36;
    min = 12,
        bubbles = 100,
            timerdelay = 8000;

    function makeBubble() {
        var b = Y.NodeFXode.create('<span class="bubble"></span>');

        b.plug(Y.plugin.NodeFX, {
            duration: 7,
            easing: Y.easing.easeout,
            to: {
                top: 0,
                opacity: 0
            },
            on: {
                end: function () {
                    Y.later(10000, this, function () {
                        animBubble(this.get('node'));
                    });
                }
            }
        });

        o.append(b);
        animBubble(b);
    }

    function animBubble(b) {
        var v = Math.floor(Math.random() * (max - min)) * min;

        b.setstyles({
            height: v + 'px',
            top: (off + 2) + 'px',
            opacity: 1
        });

        b.setstyles('left', Math.floor(Math.random() * (oW - v)));
        b.fx.set('duration', Math.floor(Math.random() * 2 + 3));
        b.fx.set('to.top', Math.floor(Math.random() * (off / 2)));

        b.fx.run();
    }

    for (i = 0; i < Bubbles; i++) {
        Y.later(Math.random() * timerDelay, this, function () {
            makeBubble();
        });
    }
});