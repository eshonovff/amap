//  task 1
// function halloween(dat) {
//     if (dat.getMonth() == 9 && dat.getDate() == 31) return 'Bonfire toffee'

//     return 'toffee'
// }
// let dat = new Date("2012/07/31")
// console.log(halloween(dat));


//  task 2
// function get(date) {

//     return Math.ceil(date.getFullYear() / 100)

// }
// console.log(get(new Date("2005")));


//  task 3
// function monthName(num) {
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];


//     return months[num - 1]


// }
// console.log(monthName(4));


// //  task 4
// function get(date)
// {
//     return date.getFullYear()+Math.floor(date.getMonth()/12)
// }
// console.log(get(new Date(1832,24)));


// //  task 5
// function formatDate(date) {
//     return date.getFullYear() + "" + date.getMonth() + "" + date.getDate()


// }
// console.log(formatDate(new Date("11/12/2019")));



//  task 6
// function get(month, year) {

//     return new Date(year, month - 1, 13).getDay() == 5;

// }
// console.log(get(10, 2017));

//  task 7
// function get(Date) {

//     return Date.getMonth() == 11 && Date.getDate() == 24

// }
// console.log(get(new Date(2013, 11, 24)));

//  task 8
// function get(h, m, s) {
//     let map = new Map();
//     map.set("Houre", h * 3600);
//     map.set("Munit", m * 60);
//     map.set("Secon", s);

//     if (
//         map.get("Houre") > map.get("Munit") &&
//         map.get("Houre") > map.get("Secon")
//     ) {
//         return h;
//     }
//     if (
//         map.get("Munit") > map.get("Houre") &&
//         map.get("Munit") > map.get("Secon")
//     ) {
//         return m;
//     }
//     return s;
// }
// console.log(get(2, 300, 15000));




//  task 9

// function get(month, year) {

//     let dat = new Date(year, month, 0)
//     return dat.getDate()

// }
// console.log(get(4,654));



//  task 10

// function days(day, month, year) {
//     let dat = new Date(year, month, day)

//     return dat.getMonth() == month
// }
// console.log(days(2, 2, 2020));



// function formatDate(date) {
//     let date2 = date.split("/");
//     let year = date2[2];
//     let month = "";
//     let day = "";
//     for (let i = date2[0].length - 1; i >= 0; i--) {
//         month += date2[1][i];
//         day += date2[0][i];
//     }
//     let month1 = year[1] + "" + year[0]
//     let day2 = year[3] + "" + year[2]
//     let a = new Date(date);
//     let b = new Date(month + day,);
// }
// console.log(formatDate("02/02/2020"));




