class MyQueue {
    constructor(){
        this.q = [];
    }

    push(x){
        let tempQueue = [];
        while(this.q.length > 0){
            tempQueue.push(this.q.pop())
        }
        this.q.push(x);
        while (tempQueue.length > 0){
            this.q.push(tempQueue.pop())
        }
    }

    pop(){
        return this.q.pop()
    }

    peek(){
        return this.q[this.q.length - 1];
    }

    empty(){
       return this.q.length === 0;
    }
};
