const convertTemp = (temp, unit) => {
    if(unit === "F"){
        let newTemp = (temp-32)*(5/9);
        return newTemp;

    } else if(unit === "C"){
        let newTemp = (temp*1.8)+32;
        return newTemp;

    }
}

module.exports = convertTemp;