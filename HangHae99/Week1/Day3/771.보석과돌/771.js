let numJewelsInStones = function(jewels, stones) {
    const stoneCounter = {};
    let totalJewels = 0;

    for (const stone of stones) {
        if (stoneCounter.hasOwnProperty(stone)) {
            stoneCounter[stone]++;
        } else {
            stoneCounter[stone] = 1;
        }
    }

    for (const jewel of jewels) {
        if (stoneCounter.hasOwnProperty(jewel)) {
            totalJewels += stoneCounter[jewel];
        }
    }

    return totalJewels;
}