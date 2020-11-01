export const cleanTextFromBlankLines = (textToConvert) => {
    return textToConvert.replace(/^\s*[\r\n]/gm, "");
};

export const convertTextToArray = (textToConvert) => {
    return textToConvert.split(/\r?\n/);
};

export const convertArrayToObject = (importData, fields) => {
    //const number = 8;
    const newobj = importData.dataTable.map((element, index) => {
        const objTemp = {[element]: {
            
        }};
        return objTemp
       /*  if(v != ' ' && v != '- 1' && v != '0'){
            if(v == '+ 1') newobj.push(tempobj);
            else {
                
            }
        } */
        //const obj = Object.fromEntries(keys.map((_, i) => [keys[i], v2[i]]));
        //console.log( obj );
    });
    console.log(newobj);
    return newobj;
    //return textToConvert.split(/\r?\n/);
};


/* export const addItemToCart = (carItems, cartItemToAdd) => {
    const existingCartItem = carItems.find(
        carItem => carItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return carItems.map(carItem => 
            carItem.id === cartItemToAdd.id
            ? {...carItem, quantity: carItem.quantity + 1 }
            : carItem
        );
    }

    return [...carItems, { ...cartItemToAdd, quantity: 1 }];
}; */