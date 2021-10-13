const passDay = ["월", "화", "수", "목", "금"];
const unpassDay = ["토", "일"];

const isGoToWork = (day) => {
    for (i = 0; i < 5; i++) {
        if (day === passDay[i]) return true;
    }
    if (day === unpassDay[0] || day === unpassDay[1]) return false;
};

console.log(isGoToWork("월"));
console.log(isGoToWork("금"));
console.log(isGoToWork("토"));
console.log(isGoToWork("일"));
