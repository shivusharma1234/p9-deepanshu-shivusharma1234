function createIncrement(){
    let count=0;
    function increment(){
        count= count + 1;
      
    }
    let message=`Count is ${count}`;
    function log(){
        console.log(message);
    }
    return[increment,log];
}
const[increment,log]= createIncrement();
increment();
increment();
increment();
log();

//Out put is= Count is 0. 