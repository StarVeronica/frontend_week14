let grades = [];
let sm = 0;
for(let i = 0; i < 12; i++) {
    grades.push(Math.round(Math.random() * 99 + 1));
    sm += grades[i];
};
console.log(grades);

console.log(sm / 12);

let mx = 0;
grades.forEach(function(n){
    if(n > mx) {
        mx = n;
    }
});
console.log(mx);

let mn = 100;
grades.forEach(function(n){
    if(n < mn) {
        mn = n;
    }
});
console.log(mn);

console.log(grades.filter(n => n >= 60).length);

console.log(grades.filter(n => n < 60).length);

grades = grades.map(function (n) {
    if(n >= 80) {
        return "A";
    } else if(n >= 60) {
        return "B";
    } else if(n >= 40) {
        return "C";
    } else if(n >= 20) {
        return "D";
    } else {
        return "E";
    }
});
console.log(grades);
