let car = {
    engine: "working",
    fuel: 15,
    battery: 80,
    temperature: 95
};

let problem = "start";

switch (problem) {

    case "start":

        if (car.engine !== "working") {
            console.log("Dvigatelda muammo");
        } 
        else if (car.fuel === 0) {
            console.log("Benzin tugagan");
        } 
        else if (car.battery < 20) {
            console.log("Akkumulyator kuchsiz");
        } 
        else {
            console.log("Avtomobil ishga tushishi mumkin");
        }

        break;


    case "fuel":

        if (car.fuel === 0) {
            console.log("Benzin tugagan");
        } 
        else {
            console.log("Benzin mavjud");
        }

        break;


    case "battery":

        if (car.battery < 20) {
            console.log("Akkumulyator kuchsiz");
        } 
        else {
            console.log("Akkumulyator yaxshi");
        }

        break;


    case "temperature":

        if (car.temperature > 100) {
            console.log("Dvigatel qizib ketgan");
        } 
        else {
            console.log("Harorat normal");
        }

        break;


    default:
        console.log("Bunday muammo turi mavjud emas");
} 