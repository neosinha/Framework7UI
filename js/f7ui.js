

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
		var nbar = document.createElement('div');
		nbar.setAttribute('class', 'navbar');
		
		var nbarinner = document.createElement('div');
		nbarinner.setAttribute('class', 'navbar-inner'); 
				
		var nCent = this.navbarTitle(center);
		var nLeft = this.navbarLeft(left);
		var nRight= this.navbarRight(right);
		
		nbarinner.appendChild(nLeft);
		nbarinner.appendChild(nCent);
		nbarinner.appendChild(nRight);
		
		nbar.appendChild(nbarinner);
		
		mview = document.getElementById('viewmain');
		mview.appendChild(nbar);
	}; 
	
	
	/** 
	 * Navbar title component 
	 * @method 
	 * @memberof Framework7UI
	 * @param title - Navbar title or center component
	 */
	this.navbarTitle = function ( title ) {
		
		var center = document.getElementById('navbar-center');
		if (center) {
			
		} else {
			center= document.createElement('div');
			center.setAttribute('class', 'center sliding');
			center.setAttribute('id', 'navbar-center');
			document.getElementById('navbar').appendChild(center);
		}
		
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
		var el = document.getElementById('navbar-right');
		if (el) {
			console.log('Navbar Right already exists');
		} else {
			el = document.createElement('div');
			el.setAttribute('class', 'right');
			el.setAttribute('id', 'navbar-right');
		}
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
	
	
	/**
	 * @method
	 * @memberof Framework7UI
	 * @param listBlock - 'blockname'   
	 * @param listFunction   - media: function to be called if media is clicked, title: function to be called if inner is called,  after: function to be called if after is called ''<BR> 'type' : 'media'<BR>'sortable' : true/false 
	 * @param listArr - Array formed of object <def 'media' : ''<BR> 'title' : '' <BR> 'after' : ''> 
	 * 
	 */
	this.listView = function(id, listBlock, listFunction ,listArr) {
		
		var tbl = this.element('div', id);
		//process listblock
		bclass = 'list-block';
		if (listBlock['type']) {
			
		}
		console.log(JSON.stringify(listFunction));
		tbl.setAttribute('class', bclass);
		
		ul = this.element('ul', null);
		tbl.appendChild(ul);
		
		for (x in listArr) {
			li = this.element('li', null);
			
			listEl = listArr[x]; 
			var a = this.element('div', id+'-listel-'+x );
			a.setAttribute('class', 'item-content');
			//fn = listBlock['listFunction'];
			//if (fn) {
				//a.setAttribute('onclick', fn+'(\''+id+'\',\''+x+'\');');
			//}
			//media
			if (listEl['media']) {
				media = this.element('div', id+'-listel-'+x+'-itemmedia');
				media.setAttribute('class', 'item-media');
				
				if (listFunction['media']) {
					media.setAttribute('onclick', listFunction['media']+'(\''+id+'\',\''+x+'\');');
				}
				
				icon = this.element('i', null);
				icon.setAttribute('class', 'f7-icons');
				icon.innerHTML = listEl['media'];
				
				media.appendChild(icon);
				a.appendChild(media);
			}
			
			if (listEl['title']) {
				var divx = this.element('div', id+'-listel-'+x+'-listinner');
				divx.setAttribute('class', 'item-inner');
				
				
				var dtitle = this.element('div', id+'-listel-'+x+'-listinner-'+'title');
				dtitle.setAttribute('class', 'item-title');
				dtitle.innerHTML = listEl['title']; 
				if (listFunction['title']) {
					dtitle.setAttribute('onclick', listFunction['title']+'(\''+id+'\',\''+x+'\');');
				}
				
				
				divx.appendChild(dtitle);
				
				if (listEl['after']) {
					var dafter = this.element('div', id+'-listel-'+x+'-listinner-'+'after');
					dafter.setAttribute('class', 'item-after');
					dafter.innerHTML = listEl['after'];
					if (listFunction['after']) {
						dafter.setAttribute('onclick', listFunction['after']+'(\''+id+'\',\''+x+'\');');
					}
					divx.appendChild(dafter);
				}
				a.appendChild(divx);
			}
			
			li.appendChild(a);
			ul.appendChild(li);
		}
		
		if (listBlock['blockname']) {
			var divx = this.element('div', id+'-listblocklabel');
			divx.setAttribute('class', 'list-block-label');
			divx.innerHTML = listBlock['blockname'];
			tbl.appendChild(divx);
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
	 * @param tabArr - Array of tab defintions, tabEl =  {{ 'icon', 'label', 'content' }} 
	 * @deprecated
	 * @return HTML DOM
	 * 		
	 * */
	this.bottomToolbar = function (tabProp, tabArr) {
		var toolbar = document.getElementById('toolbararea');
		toolbar.innerHTML = ''; 
		
		
		toolbar.setAttribute('class', 'toolbar tabbar tabbar-labels'); 
		var tbar = this.element('div', 'toolbarareainner');
		tbar.setAttribute('class', 'toolbar-inner'); 
		
		
		var tabs = this.element('div', 'apptabs');
		for (x in tabArr) {
			
			tabEl = tabArr[x]; 
			tab = this.element('div', 'apptab'+x);
			var a = this.element('a', 'tabitem'+x);
			if (x == 0){
				a.setAttribute('class', 'tab-link active');
				tab.setAttribute('class', 'tab active');
			} else {
				a.setAttribute('class', 'tab-link');
				tab.setAttribute('class', 'tab');
			}
			
			
			//add F7-Icon
			if (tabEl['f7icon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'f7-icons');
				i.innerHTML = tabEl['f7icon'].trim();
				a.appendChild(i);
			} else if (tabEl['icon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'icon icon-'+tabEl['icon']);
				i.innerHTML = '';
				a.appendChild(i);
			} else if (tabEl['flaticon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'flaticon-'+tabEl['flaticon']);
				i.innerHTML = '';
				a.appendChild(i);
			}  
			
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
	 * TabView controller
	 * @method
	 * @memberof Framework7UI
	 * @param id - ID of the tab 
	 * @param tabArr - Array of tab definitions, tabEl =  {{ 'icon', 'label', 'content' }} 
	 * 
	 * @return JSON object with views
	 */
	this.tabView = function(id, tabArr) {
		console.log("Entering tabview once...");
		var tabObj = {};
		var toolbar = document.getElementById('toolbararea');
		toolbar.innerHTML = ''; 
		toolbar.setAttribute('class', 'toolbar tabbar'); 
		
		var tabbar = this.element('div', 'toolbarareainner');
		tabbar.setAttribute('class', 'toolbar-inner'); 
		toolbar.appendChild(tabbar);
		
		var tabarea = this.element('div', 'tabarea'+id);
		tabarea.setAttribute('class', 'tabs');
		
		for (x in tabArr) {
			var tab = tabArr[x]; 
			var a = this.element('a', 'tabel'+x);
			if (x == 0)
				a.setAttribute('class', 'tab-link active');
			else
				a.setAttribute('class', 'tab-link');
			
			//a.innerHTML = tab['header'].trim();
			a.setAttribute('href', '#tabcontentview'+x);
			
			//add F7-Icon
			if (tab['f7icon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'f7-icons');
				i.innerHTML = tab['f7icon'].trim();
				a.appendChild(i);
				
			} else if (tab['icon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'icon icon-'+tab['icon']);
				i.innerHTML = '';
				a.appendChild(i);
				
			} else if (tab['flaticon']) {
				var i = this.element('i', null);
				i.setAttribute('class', 'flaticon-'+tab['flaticon']);
				i.innerHTML = '';
				a.appendChild(i);
			}  
			
			//add Label
			if (tab['label']) {
				toolbar.setAttribute('class', 'toolbar tabbar tabbar-labels'); 
				
				var l = this.element('span', null);
				l.setAttribute('class', 'tabbar-label');
				l.innerHTML = tab['label'].trim();
				a.appendChild(l);
			}
			
			tabbar.appendChild(a);
			
			var tabview = this.element('div', 'tabcontentview'+x);
			if (x == 0)
				tabview.setAttribute('class', 'tab active');
			else
				tabview.setAttribute('class', 'tab');
			
			
			var tcontent = this.element('div', 'tabviewcontent'+x);
			tcontent.setAttribute('class', 'content-block');
			tabconts = tab['content'];
			for (ix in tabconts) {
				var tx = tabconts[ix];
				tcontent.appendChild(tx);
			}
			//console.log("Tabview"+x+ ":"+ tab['content'].innerHTML);
			tabview.appendChild(tcontent);
			tabarea.appendChild(tabview);
			tabObj['tabview'+x] = document.getElementById['tabcontenview'+x];
		}
		
		pg = document.getElementById('pagecontent');
		pg.appendChild(tabarea);
		
		return tabObj; 
	}
	
	
	/**
	 * Append to a Tabview
	 * @method
	 * @memberof Framework7UI
	 * @param viewid - ID of view to which element, or list of elements should be appended
	 */
	this.appendToView = function(viewid, content) {
		var el = document.getElementById(viewid);
		if (el) {
			if (typeof content == 'string') {
				el.innerHTML = content; 
			} else  {
				for (x in content) {
					cnt = content[x]; 
					el.appendChild(cnt);
				}
			}
		}
		
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
		var px = this.element('p', id);
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
	
	/**
	 * @method
	 * @memberof Framework7UI
	 * @param listBlock - 'blockname'   
	 * @param listFunction   - media: function to be called if media is clicked, title: function to be called if inner is called,  after: function to be called if after is called ''<BR> 'type' : 'media'<BR>'sortable' : true/false 
	 * @param listArr - Array formed of object <def 'media' : ''<BR> 'title' : '' <BR> 'after' : ''> 
	 * 
	 */
	this.formListView = function(id, listBlock,listArr) {
		
		var tbl = this.element('div', id);
		//process listblock
		bclass = 'list-block';
		
		if (listBlock['blockname']) {
			var divx = this.element('div', id+'-listblocklabel');
			divx.setAttribute('class', 'list-block-label');
			divx.innerHTML = listBlock['blockname'];
			tbl.appendChild(divx);
		}
		
		//console.log(JSON.stringify(listFunction));
		tbl.setAttribute('class', bclass);
		
		var ul = this.element('ul', null);
		tbl.appendChild(ul);
		
		for (x in listArr) {
			var li = this.element('li', null);
			
			inpEl = listArr[x]; 
			var divcontent = this.element('div', id+'-listel-'+x );
			divcontent.setAttribute('class', 'item-content');
			
			//media
			if (inpEl['media']) {
				var media = this.element('div', id+'-listel-'+x+'-itemmedia');
				media.setAttribute('class', 'item-media');
				
				if (typeof inpEl['media'] == 'string' ) {
					var icon = this.element('i', null);
					icon.setAttribute('class', 'f7-icons');
					icon.innerHTML = inpEl['media'];
					media.appendChild(icon);
				} else {
					media.appendChild(inpEl['media']);
				}
				
				divcontent.appendChild(media);
			}
			
			var divinner = this.element('div', id+'-listel-'+x+'-listinner');
			divinner.setAttribute('class', 'item-inner');
			
			if (inpEl['title']) {
				var divtitle = this.element('div', id+'-listel-'+x+'-listinner-'+'title');
				divtitle.innerHTML = inpEl['title']; 
				divtitle.setAttribute('class', 'item-title label');
				divinner.appendChild(divtitle);
			}
			
			//<div class="item-input">
			var iteminp = this.element('div', id+'-listel-item-'+x+'input');
			iteminp.setAttribute('class', 'item-input');
			
			
			
			if (inpEl['type']) {
				inptype = inpEl['type'];
				
				
				if (inptype == 'select') {
					 //<select>
		              //<option>Male</option>
		              //<option>Female</option>
		            //</select>
					var inp = this.element('select', id+'-listel-'+x+'input');
					var options = inpEl['options'];
					for (xx in options) {
						opt = options[xx]; 
						var optx = this.element('option', null);
						optx.innerHTML = opt; 
						inp.appendChild(optx);
					}
					
					iteminp.appendChild(inp);
					
				} else if (inptype == 'range') {
					  //<div class="range-slider">
		              //  <input type="range" min="0" max="100" value="50" step="0.1">
					  var divx = this.element('div', null);
					  divx.setAttribute('class', 'range-slider');
					  
					  var inp = this.element('input', id+'-listel-'+x+'input');
					  inp.setAttribute('type', 'range');
					  inp.setAttribute('min', inpEl['min']);
					  inp.setAttribute('max', inpEl['max']);
					  inp.setAttribute('step', inpEl['step']);
					  inp.setAttribute('value', inpEl['placeholder']);
					 
					  divx.appendChild(inp);
					  iteminp.appendChild(divx);
				
				} else if (inptype == 'switch') {
					
					  var divswitch = this.element('div', null);
					  divswitch.setAttribute('class', 'item-after'); 
					  
					  var lbl = this.element('label', null);
					  lbl.setAttribute('class', 'label-switch');
					  var inp = this.element('input', id+'-listel-'+x+'input');
					  inp.setAttribute('type', 'checkbox');
					  var divx = this.element('div', null);
					  divx.setAttribute('class', 'checkbox');
					  
					  divswitch.appendChild(lbl);
					  
					  lbl.appendChild(inp);
					  lbl.appendChild(divx);
					  iteminp.appendChild(divswitch);
					  
				} else {
					var inp = this.element('input', id+'-listel-'+x+'input');
					var inptype = 'text';
					var placeholder = 'Placeholder';
					
					inp.setAttribute('type', inptype);
					if (inpEl['placeholder']) {
						placeholder = inpEl['placeholder'];
					}	
					inp.setAttribute('placeholder', placeholder);
					iteminp.appendChild(inp);
				}
			}	
			
			
			
			divinner.appendChild(iteminp);
			divcontent.appendChild(divinner);
			
			li.appendChild(divcontent);
			ul.appendChild(li);
		}
		
		
		
		return tbl;
	}
	
	
	this.accordion = function() {
	 /*<div class="list-block accordion-list">
	    <ul>
	        <li class="accordion-item">
	            <a href="" class="item-link item-content">
	                <div class="item-inner">
	                    <div class="item-title">Item 1</div>
	                </div>
	            </a> 
	            <div class="accordion-item-content">Item 1 content ...</div>
	        </li>
	        <li class="accordion-item">
	            <a href="" class="item-link item-content">
	                <div class="item-inner">
	                    <div class="item-title">Item 2</div>
	                </div>
	            </a> 
	            <div class="accordion-item-content">Item 2 content ...</div>
	        </li>
	    </ul>
	  </div>*/
	  divacc = this.element('div');
	  divacc.setAttribute('class', 'list-block accordian-list');
	  
	  divul = this.element('ul');
	  for (x in listEl) {
		  
	  }
	  
	  
	}
	
	 /**
	 * ICON Element 
	 * @method
	 * @memberof Framework7UI
	 * @param iconName - Name of icon
	 * @returns DOM Node
	 **/
	this.f7icon = function (iconName) {
		icon = this.element('i', null);
		icon.setAttribute('class', 'f7-icons');
		icon.innerHTML = iconName; 
		
		return icon; 
	}
	
	
	/**
	 * ICON Element 
	 * @method
	 * @memberof Framework7UI
	 * @param iconName - Name of icon
	 * @returns DOM Node
	 **/
	this.icon = function (iconName) {
		var icon = this.element('i', null);
		icon.setAttribute('class', 'icon icon-'+iconName);
		icon.innerHTML = ''; 
		return icon; 
	}
	
	
	this.flaticon = function (iconName) {
		var icon = this.element('i', null);
		icon.setAttribute('class', 'flaticon-'+iconName);
		icon.innerHTML = ''; 
		return icon; 
	}
	
	
	/**
	 * @method
	 * @member of Framework7UI
	 * @param id - ID Name
	 * @param formArray - Array with form elements
	 * @param onsubmit - HTTP/Javascript call which handles the form submission
	 *  
	 */
	this.form = function (id, formArray, onsubmit) {
	    	form = document.createElement('form');
	    	form.setAttribute('id', id);
	    	form.setAttribute('action', 'javascript:null');
	    	
	    	for (x in formArray) {
	    		formdef = formArray[x]; 
	    		formel = document.createElement('input');
	    		formel.setAttribute('type', formdef['type']);
	    		
	    		if (formdef['id']){
	    			formel.setAttribute('id', formdef['id'].trim());
	    		} else {
	    			formel.setAttribute('id', id+'inpx'+x);
	    		}
	    		
	    		formel.setAttribute('required', 'true');
	    		
	    		if (typeof formdef['content'] == 'string') {
	    			cnt = formdef['content'].trim(); 
	    			formel.setAttribute('placeholder', cnt);
	    		}
	    		form.appendChild(formel);
	    	}
	    	
	    	submit = document.createElement('button');
	    	if (typeof onsubmit['type'] == 'string') {
	    		submit.setAttribute('class', 'button-'+onsubmit['type']);
	    	}
	    	
	    	if (typeof onsubmit == 'string') {
	    		submit.innerHTML = onsubmit['content'];
	    	} else {
	    		submit.appendChild(onsubmit);
	    	}
	    	
	    	submit.setAttribute('onclick', onsubmit['func']);
	    	
	    	//form.appendChild(submit);
	    	
	    	return form; 
	    	
	    }
	    
		
		/**
		 * @method
		 * @memberof Framework7UI
		 * @param login - {}
		 * @param register - Boolean
		 * @param successFunc 
		 * @param failureFunc
		 */
	    this.loginScreen = function( login, register) {
	    	
	    	var loginobj = login; 
	    	
	    	var pgcont = document.getElementById('pagecontent');
	    	pgcont.innerHTML = '';
	    	pgcont.setAttribute('class', 'page-content login-screen-content');
	    	
	    	var dlogin = document.createElement('div');
	    	dlogin.setAttribute('class', 'login-screen-title');
	    	dlogin.innerHTML = login['header'];
	    	
	    	
	    	var ilistElements = new Array();
	    	var loginFields = login['fields']; 
	    	var tblview = this.formListView('loginview', 
	    									{'blockname' : null , 'listFunction' : 'testFunc'}, 
	    									loginFields); 
	    	
	    	
	    	pgcont.appendChild(this.p(null, '<BR>'));
	    	pgcont.appendChild(this.p(null, '<BR>'));
	    	pgcont.appendChild(dlogin);
	    	pgcont.appendChild(tblview);
	    	
	    	
	    	var cblock = this.element('div', null);
	    	cblock.setAttribute('class', 'content-block');
	    	
	    	var row = this.element('div', null);
	    	row.setAttribute('class', 'row');
	    	var col50 = this.element('div', null);
	    	col50.setAttribute('class', 'col-50');
	    	
	    	var lgin = this.element('a');
	    	lgin.setAttribute('class', 'button button-big button-fill color-green');
	    	lgin.innerHTML = login['label'];
	    	lgin.setAttribute('onclick', login['callback']);
	    	col50.appendChild(lgin); 
	    	row.appendChild(col50);
	    	
	    	var col51 = this.element('div', null);
	    	col51.setAttribute('class', 'col-50');
	    	
	    	var signup = this.element('a');
	    	signup.setAttribute('class', 'button button-big button-fill color-yellow');
	    	if (register) {
	    		signup.innerHTML = register['label'];
	    		signup.setAttribute('href', 'javascript:null');
	    		signup.setAttribute('onclick', register['callback']);
	    	} else {
	    		signup.innerHTML = 'Cancel';
	    		signup.setAttribute('href', 'javascript:null');
	    	}
	    	col51.appendChild(signup); 
	    	row.appendChild(col51);
	    	
	    	cblock.appendChild(row);
	    	pgcont.appendChild(cblock);
	    	
	    	
	    }
	
	    
	    
	
	    
}



