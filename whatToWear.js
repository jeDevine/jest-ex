const whatToWear = (eventType, weather) => {
    if(eventType === "casual"){
        if(weather < 54){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear something comfy and a coat`)
            return "something comfy and a coat"
        } else if(weather > 54 && weather < 70){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear something comfy and a jacket`)
            return "something comfy and a jacket"; 
        } else if(weather > 70){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear something comfy and no jacket`)
            return "something comfy and no jacket"; 
        }
    } else if(eventType === "semi-formal"){
        if(weather < 54){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear a polo and a coat`)
            return "a polo and a coat";            
        } else if(weather > 54 && weather < 70){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear a polo and a jacket`)
            return "a polo and a jacket"; 
        } else if(weather > 70){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear a polo and no jacket`)
            return "a polo and no jacket"; 
        }
    } else if(eventType === "formal"){
        if(weather < 54){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear a suit and a coat`)
            return "a suit and a coat";            
        } else if(weather > 54 && weather < 70){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear a suit and a jacket`)
            return "a suit and a jacket"; 
        } else if(weather > 70){
            console.log(`Since it is ${weather} degrees and you are going to a ${eventType} event, you should wear a suit and no jacket`)
            return "a suit and no jacket"; 
        }
    }
}
whatToWear("semi-formal", 60);

module.exports = whatToWear;