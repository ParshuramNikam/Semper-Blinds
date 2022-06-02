export const perfectFitVenetianBandChooser = (position) => {

 if (position  === 1 || position  === 2 || position  === 5 || position  === 7 || position  === 14 || position  === 17 || position  === 19 || position  === 20 || position  === 21 || position  === 23 || position  === 25 || position  === 27 || position  === 33 || position  === 36 || position  === 37 || position  === 38 || position  === 39 || position  === 40 || position  === 45 || position  === 54 || position  === 56 || position  === 63 || position  === 68 || position  === 70 || position  === 81 || position  === 83 || position  === 94 || position  === 96 || position  === 98 || position  === 100 || position  === 103 || position  === 104 || position  === 106 || position  === 107 || position  === 109 || position  === 113) {
    return "PerfectFitVenetianSp"; 
    }
    else{        
    return "PerfectFitVenetianS"; 
    }
}