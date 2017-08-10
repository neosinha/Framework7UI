var Framework7UI  = function () {
	
	
	//alert for UI
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
	
	
	//navbar title component 
	this.navbarTitle = function ( title ) {
		//
		center= document.getElementById('navbar-center');
		if (title) {
			if (typeof title == 'string') {
				center.innerHTML = title; 
			} else {
				center.appendChild(title); 
			}
		}
	
		return center; 
	}
	
	//navbar title component 
	this.navbarLeft = function ( title ) {
		//
		el = document.getElementById('navbar-left');
		if (title) {
			if (typeof title == 'string') {
				el.innerHTML = title; 
			} else {
				el.appendChild(title); 
			}
		}
		
		return el; 
	}
	
	//navbar title component 
	this.navbarRight = function ( title ) {
		//
		el = document.getElementById('navbar-right');
		if (title) {
			if (typeof title == 'string') {
				el.innerHTML = title; 
			} else {
				el.appendChild(title); 
			}
		}
		
		return el; 
	}
	
	
	//Creates a DOM object of type eltype
	this.element = function (eltype, id) {
		el = document.getElementById(id);
		if (el) {
			msg = 'Element with id: '+ id + ' already exists';
			console.log(msg);
		} else {
			el = document.createElement(eltype);
			console.log('Creating element: '+ eltype );
			if (id) {
				el.setAttribute('id', id);
				console.log('Adding id attribute to : '+ eltype + ', id:'+ id);
			} 
		}
		
		return el;
	}
	
	
	//clears the main pageview
	this.clearView = function() {
		var el = document.getElementById('pagecontent');
		//el.getParentNode.removeChild(el);
		el.innerHTML = '';
	}
	
	//creates a button with properties and id
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
				console.log('Adding '+ prop['inner']);
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
	
	
	//creates a content block and adds elements
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
	
	
	
	
	//Appends the element to the view
	this.appendToView = function ( elm ) {
		el = document.getElementById('pagecontent');
		if (el) {
			el.appendChild(elm);
		}
		
		return el;
	}
	
	
	/* tableView with
	 * listProp = {'blockname'  : '', 
	 *			   'listFunction': '',   
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
	 * tabProp = { 'tabFunc' }
	 * tabEl =  { 'icon', 
	 * 			  'label'
	 * 			}
	 * */
	this.tabBar = function (id, tabProp, tabEl) {
		
		
		
	}
	
	
}



