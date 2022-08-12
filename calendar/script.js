//dates header and p
const date = new Date();
   //Wed Jul 27 2022 18:15:28 GMT-0600 (Mountain Daylight Time)
   //6
const renderCalendar = ()=>{
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    
       //Month
    document.querySelector(".date h1").innerHTML=month[date.getMonth()]
       //Date
    document.querySelector(".date p").innerHTML=new Date().toDateString()
    
    
    
    //Calendar Boxes
    const monthDays= document.querySelector(".days")
        //gets the day of curretn computer month
    const lastDay= new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
        //gets last months last day's number
    const prevLastDay= new Date(date.getFullYear(),date.getMonth(),0).getDate();
    
        //sets current date to the first
    date.setDate(1)
            //grabs the index of the name of the weekday (sun-mon) this month starts on
    const firstDayIndex=date.getDay()
        //grabs the index of the name of the weekday (sun-mon) this month ends on
    const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    //
    
    const nextDays= 7-lastDayIndex-1;
        
        let days=``;
        //adds innerHTML to the .days class according to the index of which day the month starts 
    for(let x=firstDayIndex;x>0;x--){
        
         days+=`<div class="prev-date">${prevLastDay - x + 1}</div>`
         monthDays.innerHTML=days
    }
        //adds a div with 1-until last day of currentmonth into .days class
    for(let i=1;i<=lastDay;i++){
        if(i===new Date().getDate()&& date.getMonth()=== new Date().getMonth()){
            days+=`<div class="today">${i}</div>`;
        }else{
        days+=`<div>${i}</div>`;
        monthDays.innerHTML = days;}
    }
    for(let j=1;j<=nextDays;j++){
        days+= `<div class="next-date">${j}</div>`;
        monthDays.innerHTML=days
    }
   }


// POINTERS

document.querySelector(".prev").addEventListener("click",()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar()
    
})

document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar()
})
renderCalendar()