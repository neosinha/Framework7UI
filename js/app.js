
var ui = new Framework7UI();


function appInit() {
	console.log("Main entry point into the App");
	
	
	ui.clearView();
	ui.navbarTitle('New Page');
	ui.navbarRight();
	
	tabarr = new Array(); 
	tabarr.push({'f7icon': 'settings', 'label': 'Tab1', 'content' : [ui.p(null, 'Cool Stuff')] });
	tabarr.push({'f7icon': 'bolt', 'label': 'Tab2', 'content' : [ui.p(null, 'Really Cool Stuff Also')] });
	tabs = ui.tabView('bottomTab', tabarr);
	//ui.appendToView(tab1);
	tabview1 = ui.element('tabcontentview0');;
	
	
	buttons = Array();
	buttons.push(ui.createButton( {'inner' : 'Test Button', 'type': 'button active' ,'onclick' : 'clickTester();'} , 'button1'));
	buttons.push(ui.createButton( {'inner' : 'Test Button', 'type': 'button-big button-fill color-red' ,'onclick' : 'clickTester();'} , 'button2'));
	
	//cb = ui.contentBlock('contentblock1', buttons);
	//ui.appendToView(cb);

	ui.appendToView('tabcontentview0',buttons);
	
	//TableView 
	listElements = new Array();
	listElements.push({'title' : 'Test1', 'after': '1'});
	listElements.push({'title' : 'Test2', 'after': '2'});
	listElements.push({'title' : 'Test Instance', 'after': '3'});
	tblview = ui.tableView('tableview1', {'blockname' : 'Nice List', 'listFunction' : 'testFunc'}, 
							listElements); 
	//ui.appendToView(tblview);
	ui.appendToView('tabcontentview1', [tblview]);
	
	
	//TableView 
	var ilistElements = new Array();
	ilistElements.push({'title' : 'Test1', 'type': 'text', 'media' : 'persons', 'placeholder' : 'Input1'});
	ilistElements.push({'title' : 'Test2', 'type': 'Email', 'media' : 'email', 'placeholder' : 'JohnDoe@Email.com'});
	ilistElements.push({'title' : 'Test3', 'type': 'datetime-local', 'media' : 'calendar', 'placeholder' : 'Input3'});
	
	//id, listBlock, listFunction ,listArr
	var tblview = ui.formListView('formview2', {'blockname' : 'Nice List2', 'listFunction' : 'testFunc'}, 
							ilistElements); 
	
	ui.appendToView('tabcontentview1', [tblview]);
	//TableView 
	var lElements = new Array();
	lElements.push({'title' : 'Test3', 'after': '1'});
	lElements.push({'title' : 'Test4', 'after': '2'});
	lElements.push({'title' : 'WowTest Instance', 'after': '3'});
	var tblview = ui.listView('tableview2', {'blockname' : 'Nice List View', 'listFunction' : 'testFunc'}, 
							lElements); 
	//ui.appendToView(tblview);
	
	
	//Tabs
	tabarr = new Array(); 
	tabarr.push({'header': 'Tab1', 'content' : ui.p(null, 'Cool Stuff') });
	tabarr.push({'header': 'Tab2', 'content' : ui.p(null, 'Really Cool Stuff Also') });
	//tab1 = ui.tabs('uitabs1', tabarr);
	//ui.appendToView(tab1);
	
	
	
	
	//card
	b1 = ui.createButton({'inner' : 'Card Button', 'type': 'button-fill color-green', 'onclick': 'clickTester();'} );
	card1 = ui.card('card1', {'header': 'Card Header', 'content': b1, 'footer': 'Footer Text'}); 
	//ui.appendToView(card1);
	
	//card2
	tblview = ui.tableView('tableview2', {'blockname' : 'Nice List', 'listFunction' : 'testFunc'}, 
							listElements); 
	b1 = ui.createButton({'inner' : 'Card Button', 'type': 'button-fill color-pink', 'onclick': 'clickTester();'} );
	card1 = ui.card('card2', {'header': 'Card Header', 'content': tblview, 'footer': 'Nice Text'}); 
	//ui.appendToView(card1);
	
	
	
}
	
function testFunc(listId) {
	console.log('ListEl: '+listId + ' was clicked..');
}

function clickTester() {
	
	ui.alert({ 'text'  : "Click Tester",
		   'title' : "", 
		   'callback' : null});

}
