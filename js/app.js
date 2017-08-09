
var ui = new Framework7UI();


function appInit() {
	console.log("Main entry point into the App");
	
	
	
	ui.clearView();
	ui.navbarTitle('New Page');
	ui.navbarRight();
	
	b = ui.createButton( {'inner' : 'Test Button', 'type': '' ,'onclick' : 'clickTester();'} , 'button1');
	ui.appendToView(b);
}
	

function clickTester() {
	
	ui.alert({ 'text'  : "Click Tester",
		   'title' : "", 
		   'callback' : null});

}