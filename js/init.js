var f7engine = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = f7engine.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
