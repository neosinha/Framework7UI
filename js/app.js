
var ui = new Framework7UI();


function appInit() {
	console.log("Main entry point into the App");
	
	
	
	ui.clearView();
	ui.navbarTitle('New Page');
	ui.navbarRight();
	
	buttons = Array();
	buttons.push(ui.createButton( {'inner' : 'Test Button', 'type': 'button active' ,'onclick' : 'clickTester();'} , 'button1'));
	buttons.push(ui.createButton( {'inner' : 'Test Button', 'type': 'button-big button-fill color-red' ,'onclick' : 'clickTester();'} , 'button2'));
	
	cb = ui.contentBlock('contentblock1', buttons);
	ui.appendToView(cb);
	
	/*listProp = {'blockname'  : '', 
			 *			   'list function': '',   
			 *			   'type' : 'media', 
			 *			   'sortable' : true/false 
			 * 			}
			 * 
			 * listArr = [ { 'media' : '', 
			 * 				 'title' : '' ,
			 * 				 'after' : '' } 
			 * 
			 * 			  ]
	*/
	listElements = Array();
	/*
	listElements.push({'media' : 'home', 'title' : 'Test1', 'after': '1'});
	listElements.push({'media' : 'home_fill', 'title' : 'Test2', 'after': '2'});
	listElements.push({'media' : 'heart', 'title' : 'Test3', 'after': '3'});
	*/
	listElements.push({'title' : 'Test1', 'after': '1'});
	listElements.push({'title' : 'Test2', 'after': '2'});
	listElements.push({'title' : 'Test3', 'after': '3'});
	tblview = ui.tableView('tableview1', {'blockname' : 'Nice List', 'listFunction' : 'testFunc'}, 
							listElements); 
	ui.appendToView(tblview);
	
	btabs = Array(); 
	btabs.push({'icon': 'favorites', 'label' : 'Favor'});
	btabs.push({'icon': 'drawers', 'label' : 'Files'});
	btabs.push({'icon': 'home', 'label' : 'Home'});
	ui.bottomToolbar({'tabFunc': 'clickTester'}, btabs);
}
	
function testFunc(listId) {
	console.log('ListEl: '+listId + ' was clicked..');
}

function clickTester() {
	
	ui.alert({ 'text'  : "Click Tester",
		   'title' : "", 
		   'callback' : null});

}