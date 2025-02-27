// function setTimeAndAdd(startDate, EndDate){
//     const dateIntervals = []
//     let d = startDate;
//     // let end = EndDate;
//     // let StartTime = d.getHours();
//     // let Endtime = end.getHours();
//     // console.log(StartTime);
//     // console.log(Endtime);
//     for(i = startDate.getHours()-Number(0.5); i <= EndDate.getHours(); i+=Number(0.5)){
//         d.setMinutes(d.getMinutes() + 30);
//         if(d.getHours() !== EndDate.getHours()+1){
//             console.log(i);
//             dateIntervals.push(new Date(d));
//             // console.log(dateIntervals);
//             console.log(d);
//         }else{
//             // console.log(d);
//         }
//     }
//     return dateIntervals
// }
// let startDate = new Date("October 25, 2014 11:00")
// startDate.setMinutes(startDate.getMinutes() - 30);
// let endDate =  new Date("October 12, 2014 16:00")
// // endDate.setMinutes(startDate.getMinutes() - 30);

// const MyTimes = setTimeAndAdd(startDate, endDate);
// console.log(MyTimes);


function mergeDate(startDate, EndDate){
    const date = startDate.setHours(EndDate.getHours())
    return new Date(date)
}
let startDate = new Date("October 25, 2014 11:00")
startDate.setMinutes(startDate.getMinutes() - 30);
let endDate =  new Date("October 12, 2014 16:00")
const Mydate = mergeDate(startDate, endDate);
console.log(Mydate);