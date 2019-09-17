function solve(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let dayFound = days.indexOf(day);
    if (dayFound === -1 ){
        console.log("error");
    }else{
        console.log(dayFound + 1);
    }

}
