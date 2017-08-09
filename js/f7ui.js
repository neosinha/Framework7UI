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
			//ax.setAttribute('onclick', prop['onclick']);
		}
		//ax.setAttribute('href', 'javascript:null');
		el.appendChild(ax);
		
		return el;
	}
	
	//Appends the element to the view
	this.appendToView = function ( elm ) {
		el = document.getElementById('pagecontent');
		if (el) {
			el.appendChild(elm);
		}
		
		return el;
	}
	
}



