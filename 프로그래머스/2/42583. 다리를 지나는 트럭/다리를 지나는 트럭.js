function solution(bridge_length, weight, truck_weights) {    
    let time = 0;
    let passingTruck = []; 
    let bridgeWeight = 0; 
    
    while (truck_weights.length > 0 || passingTruck.length > 0) {
        time += 1;

        if (passingTruck.length > 0 && passingTruck[0][1] === time) {
            bridgeWeight -= passingTruck.shift()[0]; 
        }

        if (truck_weights.length > 0) {
            let nextTruckWeight = truck_weights[0];
            
            if (bridgeWeight + nextTruckWeight <= weight) {
                truck_weights.shift()
                passingTruck.push([nextTruckWeight, time + bridge_length]); 
                bridgeWeight += nextTruckWeight; 
            }
        }
    }

    return time;
}
