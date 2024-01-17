 function welComeGuest(name, greetHandle) {
     greetHandle(name);
 }
 var actorName = "Tom Hanrey";

 function greetMorning(name) {
     console.log("Good Morning", name);
 }

 function greetEvening(name) {
     console.log("Good Evening", name);
 }

 welComeGuest(actorName, greetMorning);


 //  video 19.4 = function delegation and bubling //