/**
 * Created by JetBrains PhpStorm.
 * User: kamer
 * Date: 23/07/11
 * Time: 6:56 AM
 * To change this template use File | Settings | File Templates.
 */

var IETT = function(){
    this.subscribers =[];
};

IETT.prototype.addEventListener = function(subscriber){
    this.subscribers.push(subscriber);
    console.log(subscriber.name + " is now in the IETT system!");
};

IETT.prototype.fireEvent = function(event){


};

/*All events will inherit myEvent class*/
var MyEvent = function(title){
    var that = {};

    that.title = title;
    that.source;
    that.id;

    that.setSource = function(src){
        that.source = src;
    };

    return that;
};


var Traveller = function(title){
    var that = MyEvent(title);
    that.grumble = function(){
        console.log("Nerde bu otobus kardesim!");
    };
    return that;
};

var Bus = function(){

};

var BusStop = function(){

};

var iett = new IETT();
var traveller = new Traveller("traveller");
traveller.grumble();
