let arr1 = [20, 30, 10, 40];
let arr2 = [0, 0];
let arr3 = [-10, 20, 10];
function trackRobot(param) {
    let x = 0;
    let y = 0;
    for (let i = 0; i < param.length; i++) {
        dir = i % 4;
        if (dir == 0) y = y + param[i];
        if (dir == 1) x = x + param[i];
        if (dir == 2) y = y - param[i];
        if (dir == 3) x = x - param[i];
    }
    console.log('(' + x + ',' + y + ')');
}
trackRobot(arr1);
trackRobot(arr2);
trackRobot(arr3);
trackRobot([20, 30, 10, 40]);