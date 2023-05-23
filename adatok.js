function lapok() {
    const lapok = [];
    for (let index = 1; index <= 2; index++) {  
        for (let index = 1; index <= 20; index++) {
            lapok.push( `kepek/kep${index}.jpg`);
        }
    }
    return lapok;
}

export default lapok;