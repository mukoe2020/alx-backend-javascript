function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        let roundedA = Math.round(a);
        let roundedB = Math.round(b);
        return roundedA + roundedB;
    }
    else if (type === 'SUBTRACT') {
        let roundedA = Math.round(a);
        let roundedB = Math.round(b);
        return roundedA - roundedB;
    }
    else if (type === 'DIVIDE') {
         let roundedA = Math.round(a);
         let roundedB = Math.round(b);
         if (roundedB === 0) {
            return 'Error';
         }
         return roundedA / roundedB;
    }
}

module.exports = calculateNumber;