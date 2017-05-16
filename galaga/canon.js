var Canon=function(x,y,imagesrc,id){
	this.x=x;
	this.y=y;
	this.id=id;
	this.src=imagesrc;
	this.elem=null;
}
Canon.prototype.setup=function(){
		this.elem = $('<img id="canon' + this.id + '" src="' + this.src + '" class="canon">');
    	this.elem.css({ top: this.y + 'px', left: this.x + 'px' });
    	$('body').append(this.elem);
}
