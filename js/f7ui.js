

/**
 * Instantiates the Framework7UI.
 * @class Framework7UI
 */
var Framework7UI  = function () {
	
	/**
	 * @method
	 * @memberof Framework7UI
	 * @param message
	 */
	this.alert = function( message ) {
		msg = ''; 
		title = '';
		callback = null;
		if (message['text']) {
			msg = message['text']; 
		}
		
		if (message['title']) {
			title = message['title']; 
		}
		
		if (message['callback']) {
			callback = message['callback']; 
		}
		
		f7engine.alert(msg, title, callback); 
	}; 
	
	
	/**
	 * Creates the left
	 * @method navbar
	 * @memberof Framework7UI
	 * @param left - Left Element of the Navbar 
	 * @param center - Center Element of the Navbar
	 * @param right -Right Element of the NavBar
	 */
	this.navbar = function (left, center, right) {
		 //<div class="navbar" id="navbar">
         //<div class="navbar-inner" id="navbar">
		nbar = document.createElement('div');
		nbar.setAttribute('class', 'navbar');
		
		nbarinner = document.createElement('div');
		nbarinner.setAttribute('class', 'navbar-inner'); 
				
		nCent = this.navbarTitle(center);
		nLeft = this.navbarLeft(left);
		nRight= this.navbarRight(right);
		
		nbarinner.appendChild(nLeft);
		nbarinner.appendChild(nCent);
		nbarinner.appendChild(nRight);
		
		nbar.appendChild(nbarinner);
		
		mview = document.getElementById('mainview');
		mview.appendChild(nbar);
	}; 
	
	
	/** 
	 * Navbar title component 
	 * @method 
	 * @memberof Framework7UI
	 * @param title - Navbar title or center component
	 */
	this.navbarTitle = function ( title ) {
		center= document.createElement('div');
		center.setAttribute('class', 'center sliding');
		center.setAttribute('id', 'navbar-center');
		
		if (title) {
			if (typeof title == 'string') {
				center.innerHTML = title; 
			} else {
				center.appendChild(title); 
			}
		}
	
		return center; 
	}
	
	/**
	 * Left navbar component 
	 * @method
	 * @memberof Framework7UI
	 * @param title - Description of the left navbar element
	 * @returns DOM Node 
	 */
	this.navbarLeft = function ( title ) {
		var el = document.createElement('div');
		el.setAttribute('class', 'left');
		el.setAttribute('id', 'navbar-left');
		
		a = document.createElement('a');
		a.setAttribute('class', 'link icon-only open-panel');
		a.setAttribute('data-panel', 'left');
		
		if (title) {
			if (typeof title == 'string') {
				a.innerHTML = title; 
			} else {
				a.appendChild(title); 
			}
		}
		
		el.appendChild(a);
		
		return el; 
	}
	
	/**
	 * Right navbar component 
	 * @method
	 * @memberof Framework7UI
	 * @param title - Description of the right navbar element
	 * @returns DOM Node 
	 */
	this.navbarRight = function ( title ) {
		var el = document.createElement('div');
		el.setAttribute('class', 'right');
		el.setAttribute('id', 'navbar-right');
		
		a = document.createElement('a');
		a.setAttribute('class', 'link icon-only open-panel');
		a.setAttribute('data-panel', 'right');
		
		if (title) {
			if (typeof title == 'string') {
				a.innerHTML = title; 
			} else {
				a.appendChild(title); 
			}
		}
		
		el.appendChild(a);
		
		return el; 
	}
	
	
	
	
	/**
	 *Creates a DOM object of type eltype
	 *@method
	 *@memberof Framework7UI
	 *@param eltype - Element type to be created
	 *@param id - Element id to be assigned to the DOM Node
	 *@returns DOM Node
	 **/
	this.element = function (eltype, id) {
		el = document.getElementById(id);
		if (el) {
			msg = 'Element with id: '+ id + ' already exists';
			//console.log(msg);
		} else {
			el = document.createElement(eltype);
			//console.log('Creating element: '+ eltype );
			if (id) {
				el.setAttribute('id', id);
				//console.log('Adding id attribute to : '+ eltype + ', id:'+ id);
			} 
		}
		
		return el;
	}
	
	/**
	 *Clears the main pageview
	 *@method
	 *@memberof Framework7UI
	 *@returns None
	 **/
	this.clearView = function() {
		var el = document.getElementById('pagecontent');
		//el.getParentNode.removeChild(el);
		el.innerHTML = '';
	}
	
	
	/**
	 * Create a button with properties and id
	 * @method
	 * @memberof Framework7UI
	 * @param prop "inner" : Defines the inner button content. This could be an Element or String.<BR>"onclick": Defines the function to be called on click
	 * @param id HTML tag id
	 * @returns DOM Node
	 */
	this.createButton = function( prop, id ) {
		var el = this.element('p', null); 
		ax  = this.element('a', id);
		
		//handle button class
		bClass = 'button'; 
		if ( prop['type']) {
			bClass = bClass + ' '+ prop['type'];
		}
		ax.setAttribute('class', bClass);
		
		//handle inner stuff
		if (prop['inner']) {
			if ( typeof prop['inner'] == 'string') {
				//console.log('Adding '+ prop['inner']);
				ax.innerHTML = prop['inner']; 
			} else {
				ax.appendChild(prop['inner']);
			}
		}
		
		//click property
		if (prop['onclick']) {
			ax.setAttribute('onclick', prop['onclick']);
		}
		ax.setAttribute('href', 'javascript:null');
		el.appendChild(ax);
		
		return el;
	}
	
	/**
	 * Creates a content block and adds elements
	 * @method
	 * @memberof Framework7UI
	 * @param id - HTML tag id
	 * @param elements - Array of elements which would be added to the content block 
	 * @returns DOM Node
	 */
	this.contentBlock = function(id, elements) {
		//<div class="content-block">
        //<div class="content-block-inner" id="contentblock1-inner">
		var elx  = this.element('div', id);
		elx.setAttribute('class', 'content-block'); 
		
		var ielx = this.element('div', 'contentblock'+id);
		ielx.setAttribute('class', 'content-block-inner'); 
		for (el in elements) {
			e = elements[el]; 
			ielx.appendChild(e);
		}
		
		elx.appendChild(ielx);
		
		return elx;
	}
	
	//creates a segmeneted button control
	this.segmentControl = function (id, theme, buttons) {
		
		var elx = this.element('p', id);
		bclass = 'button-row'; 
		if (theme) {
			blcass = bclass + ' theme';
		}
		elx.setAttribute('class', bclass);
		for (butn in buttons) {
			button = buttons[butn]; 
			elx.appendChild(button);
		}
		
		return elx; 
	}
	
	
	
	/**
	 * @method
	 * @memberof Framework7UI
	 * @param elm Element which would be added to the main view and would be presented immediately.
	 */
	this.appendToView = function ( elm ) {
		el = document.getElementById('pagecontent');
		if (el) {
			el.appendChild(elm);
		}
		
		return el;
	}
	
	
	/**
	 * @method
	 * @memberof Framework7UI
	 * @param listBlock 'blockname'  : ''<BR> 'listFunction': ''<BR> 'type' : 'media'<BR>'sortable' : true/false 
	 * @param listArr  Array formed of object def 'media' : ''<BR> 'title' : '' <BR> 'after' : '' 
	 * 
	 */
	this.tableView = function(id, listBlock ,listArr) {
		
		var tbl = this.element('div', id);
		//process listblock
		bclass = 'list-block';
		if (listBlock['type']) {
			
		}
		tbl.setAttribute('class', bclass);
		
		
		if (listBlock['blockname']) {
			var divx = this.element('div', 'listblocklabel'+id);
			divx.setAttribute('class', 'list-block-label');
			divx.innerHTML = listBlock['blockname'];
			tbl.appendChild(divx);
		}
		
		ul = this.element('ul', null);
		tbl.appendChild(ul);
		
		for (x in listArr) {
			li = this.element('li', null);
			
			listEl = listArr[x]; 
			a = this.element('a', 'listel'+id+x);
			a.setAttribute('class', 'item-link item-content');
			fn = listBlock['listFunction'];
			if (fn) {
				a.setAttribute('onclick', fn+'(\''+x+'\');');
			}
			//media
			if (listEl['media']) {
				media = this.element('div', 'itemmedia'+id+x);
				media.setAttribute('class', 'item-media');
				
				icon = this.element('i', null);
				icon.setAttribute('class', 'f7-icons');
				icon.innerHTML = listEl['media'];
				
				media.appendChild(icon);
				a.appendChild(media);
			}
			
			if (listEl['title']) {
				var divx = this.element('div', 'listinner-'+id+x);
				divx.setAttribute('class', 'item-inner');
				
				var dtitle = this.element('div', 'listtitle-'+id+x);
				dtitle.setAttribute('class', 'item-title');
				dtitle.innerHTML = listEl['title']; 
				
				divx.appendChild(dtitle);
				
				if (listEl['after']) {
					var dafter = this.element('div', 'listafter-'+id+x);
					dafter.setAttribute('class', 'item-after');
					dafter.innerHTML = listEl['after'];
					divx.appendChild(dafter);
				}
				
				a.appendChild(divx);
			}
			
			li.appendChild(a);
			
			ul.appendChild(li);
		}
		
		
		//content block
		//cbl = this.contentBlock('contenblk'+id, [tbl]);
		
		return tbl;
	}
	
	
	/*
	 * Bottom Toolbar 
	 * @method
	 * @memberof Framework7UI
	 * @param tabProp  - Tab properties, object with { 'tabFunc' : Function called when tab is activated }
	 * @param tabArr - Array of tab defintions, tabEl =  { 'icon', 'label' }
	 * @return HTML DOM
	 * 		
	 * */
	this.bottomToolbar = function (tabProp, tabArr) {
		var toolbar = document.getElementById('toolbararea');
		toolbar.innerHTML = ''; 
		
		
		toolbar.setAttribute('class', 'toolbar tabbar tabbar-labels'); 
		
		
		var tbar = this.element('div', 'toolbarareainner');
		tbar.setAttribute('class', 'toolbar-inner'); 
		
		for (x in tabArr) {
			tabEl = tabArr[x]; 
			
			var a = this.element('a', 'tabitem'+x);
			if (x == 0){
				a.setAttribute('class', 'tab-link active');
			} else {
				a.setAttribute('class', 'tab-link');
			}
			
			
			//add Icon
			if (tabEl['icon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'f7-icons');
				i.innerHTML = tabEl['icon'].trim();
			}
			a.appendChild(i);
			
			//add Label
			if (tabEl['label']) {
					var l = this.element('span', null);
					l.setAttribute('class', 'tabbar-label');
					l.innerHTML = tabEl['label'].trim();
			}
			a.appendChild(l);
			
			
			
			//handle the tab loader
			tfunc = tabProp['tabFunc'].trim(); 
			if (tfunc) {
				a.setAttribute('onclick', tfunc+'(\''+x+'\');');
			}
			
			tbar.appendChild(a);
			
		}
		toolbar.appendChild(tbar);
		return toolbar; 
	}
	
	
	/* 
	 * Generate Tab Element
	 * @method
	 * @memberof Framework7UI
	 * @param tabArr - [tabEl]
	 * @param tabEl - { 'header', 'content }
	 * 
	 * @return DOM Node
	 */
	this.tabs = function(id, tabArr) {
		
		var tabbar = this.element('div', id);
		tabbar.setAttribute('class', 'buttons-row');
		
		var tabarea = this.element('div', 'tabarea'+id);
		tabarea.setAttribute('class', 'tabs');
		
		for (x in tabArr) {
			tab = tabArr[x]; 
			var a = this.element('a', 'tabel'+x);
			if (x == 0)
				a.setAttribute('class', 'tab-link button active');
			else
				a.setAttribute('class', 'tab-link button');
			
			a.innerHTML = tab['header'].trim();
			a.setAttribute('href', '#tabview'+x);
			tabbar.appendChild(a);
			
			
			tabview = this.element('div', 'tabview'+x);
			if (x == 0)
				tabview.setAttribute('class', 'tab active');
			else
				tabview.setAttribute('class', 'tab');
			
			tabview.appendChild(tab['content']);
			tabarea.appendChild(tabview);
		}
		
		cblock = this.element('div', 'contentblock'+id); 
		cblock.setAttribute('class', 'content-block');
		cblock.appendChild(tabbar);
		cblock.appendChild(tabarea);
		
		return cblock; 
	}
	
	/**
	 *
	 * Creates a new 'p' element
	 * @method 
	 * @memberof Framework7UI
	 * @param id - ID of the P element
	 * @param content - DOM Node or text to be populated within the p element
	 * @return DOM Node
	 */
	this.p = function(id, content) {
		px = this.element('p', id);
		if (typeof content == 'string') {
			px.innerHTML = content; 
		} else {
			px.appendChild(content);
		}
		
		return px; 
	}
	
	
	/*
	 * UI Card 
	 * @method
	 * @memberof Framework7UI
	 * @param id - HTML Element id
	 * @param cardEl - { 'header' : 'content': , 'footer':, 'class' :  }
	 * @return DOM Node
	 */
	this.card = function(id, cardEl) {
		
		var crd = this.element('div', id);
		crd.setAttribute('class', 'card');
		
		//check and add header
		if (cardEl['header']) {
			var hdr = this.element('div', 'cardheader'+id);
			hdr.setAttribute('class', 'card-header');
			if (typeof cardEl['header'] == 'string') {
				hdr.innerHTML = cardEl['header']; 
			} else {
				hdr.appendChild(cardEl['header']);
			}
			
			crd.appendChild(hdr);
		}
		
		
		//check and add content
		if (cardEl['content']) {
			var cnt = this.element('div', 'cardcontent'+id);
			cnt.setAttribute('class', 'card-content');
			if (typeof cardEl['content'] == 'string') {
				cnt.innerHTML = cardEl['content']; 
			} else {
				cnt.appendChild(cardEl['content']);
			}
			crd.appendChild(cnt);
		}
		
		
		//check and add footer
		if (cardEl['footer']) {
			var ftr = this.element('div', 'cardcontent'+id);
			ftr.setAttribute('class', 'card-footer');
			if (typeof cardEl['footer'] == 'string') {
				ftr.innerHTML = cardEl['footer']; 
			} else {
				ftr.appendChild(cardEl['footer']);
			}
			crd.appendChild(ftr);
		}
		
		return crd; 
	}
	
	
	this.accordion = function() {
		
	}
	
	 /**
	 * ICON Element 
	 * @method
	 * @memberof Framework7UI
	 * @param iconName - Name of icon
	 * @returns DOM Node
	 **/
	this.icon = function (iconName) {
		icon = this.element('i', null);
		icon.setAttribute('class', 'f7-icons');
		icon.innerHTML = iconName; 
		
		return icon; 
	}
	
}



