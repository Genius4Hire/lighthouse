const talkingCalendar = function(date) {
  // Your code here
};

const months = ["January", "February", "March", "April", "May", "June", "July", "Auguat", "September", "October", "Nevoember", "December"];

const addSuffix = function (number){
  switch (number & 10){
    case 1 : return number.toString(number) + (number > 10 && number < 21) ? "th" : "st"; break;
    case 2 : return number.toString(number) + "nd"; break;
    case 3 : return number.toString(number) + "rd"; break;
    default : return number.toString(number) + "th"; break;
  }
}

class date {
  constructor(dateString){
    this.year = ~~dateString.substr(0,4);
    this.month = ~~dateString.substr(5,2);
    this.day = ~~dateString.substr(8,2);
    this.talkingCalendar = months[this.month - 1] + " " + addSuffix(this.day) + ", " + this.year;
    console.log(this.talkingCalendar);
    console.log(this.year + " : " + this.month + " : " + this.day);
  }


}

let someDate = new date("2017/12/02");

for (x = 0; x < 100; x++){
  console.log(addSuffix(x));

}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));