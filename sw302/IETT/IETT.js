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

IETT.prototype.fireEvent = function(){

};

var Yolcu = function(){

};

var Otobus = function(){

};

var Durak = function(){

};


