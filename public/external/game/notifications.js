/*
var Notifications = {
    friends: FixedQueue(3, ["Mathew", "Dan", "Pwet", "John"])
}
*/

function FixedQueue (size) {
    this.size = size;
    this.initialvalues = [];
}

FixedQueue.prototype.add = function(element) {
    this.initialvalues.unshift(element);
    console.log(this.initialvalues);
    if(this.initialvalues.length > this.size) {
        console.log("Pop");
        this.initialvalues.pop();
        console.log(this.initialvalues);
    }
}

FixedQueue.prototype.trimHead = function() {
    if(this.length <= this.fixedSize) {
        return; 
    }

    Array.prototype.splice.call(this, 0, (this.length - this.fixedSize));
}

FixedQueue.prototype.trimTail = function() {
    if(this.length <= this.fixedSize) {
        return;     
    }

    Array.prototype.splice.call(this, this.fixedSize, (this.length - this.fixedSize));
}
