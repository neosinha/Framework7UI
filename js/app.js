
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
	
	/*
	//TableView 
	listElements = new Array();
	listElements.push({'title' : 'Test1', 'after': '1'});
	listElements.push({'title' : 'Test2', 'after': '2'});
	listElements.push({'title' : 'Test Instance', 'after': '3'});
	tblview = ui.tableView('tableview1', {'blockname' : 'Nice List', 'listFunction' : 'testFunc'}, 
							listElements); 
	ui.appendToView(tblview);
	*/
	
	//TableView 
	var lElements = new Array();
	lElements.push({'title' : 'Test3', 'after': '1'});
	lElements.push({'title' : 'Test4', 'after': '2'});
	lElements.push({'title' : 'WowTest Instance', 'after': '3'});
	var tblview = ui.listView('tableview2', {'blockname' : 'Nice List View', 'listFunction' : 'testFunc'}, 
							lElements); 
	ui.appendToView(tblview);
	
	
	//Tabs
	tabarr = new Array(); 
	tabarr.push({'header': 'Tab1', 'content' : ui.p(null, 'Cool Stuff') });
	tabarr.push({'header': 'Tab2', 'content' : ui.p(null, 'Really Cool Stuff Also') });
	tab1 = ui.tabs('uitabs1', tabarr);
	ui.appendToView(tab1);
	
	
	
	
	//card
	b1 = ui.createButton({'inner' : 'Card Button', 'type': 'button-fill color-green', 'onclick': 'clickTester();'} );
	card1 = ui.card('card1', {'header': 'Card Header', 'content': b1, 'footer': 'Footer Text'}); 
	ui.appendToView(card1);
	
	//card2
	tblview = ui.tableView('tableview2', {'blockname' : 'Nice List', 'listFunction' : 'testFunc'}, 
			listElements); 
	b1 = ui.createButton({'inner' : 'Card Button', 'type': 'button-fill color-pink', 'onclick': 'clickTester();'} );
	card1 = ui.card('card2', {'header': 'Card Header', 'content': tblview, 'footer': 'Nice Text'}); 
	ui.appendToView(card1);
	
	
	//Bottom ToolBar
	btabs = Array(); 
	btabs.push({'icon': 'favorites', 'label' : 'Favor', 'content' : 'Favorite Tab' });
	btabs.push({'icon': 'drawers', 'label' : 'Files', 'content' : 'Tab2'});
	btabs.push({'icon': 'home', 'label' : 'Home' });
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