let numArr = [
// Enter Phone Numbers 
];




function goodNum(numArr){
    console.log('Success on LOAD')
        for(let i = 0; i < numArr.length; i++){
            let number = JSON.stringify(numArr[i]).split('');
        // Repeating Numbers
            if(
                number[3] === number[4] && number[4] === number[5] ||
                number[6] === number[7] && number[7] === number[8] && number[8] === number[9] ||
                number[5] === number[6] && number[6] === number[7] && number[7] === number[8] && number[8] === number[9] ||
                number[4] === number[5] && number[5] === number[6] && number[6] === number[7] && number[7] === number[8] && number[8] === number[9] ||
                number[3] === number[4] && number[4] === number[5] && number[5] === number[6] && number[6] === number[7] && number[7] === number[8] && number[8] === number[9] ||
                number[3] === number[4] && number[4] === number[5] && number[5] === number[6] && number[6] === number[7] && number[7] === number[8] ||
                number[3] === number[4] && number[4] === number[5] && number[5] === number[6] && number[6] === number[7] ||
                number[3] === number[4] && number[4] === number[5] && number[5] === number[6] ||
                number[7] === number[8] && number[8] === number[9]
            ){
                console.log(number.join(''))
            }
            
            // Incremental 1 Increase/Decrease
            if(
                parseInt(number[3]) - parseInt(number[4]) === 1 && parseInt(number[4]) - parseInt(number[5]) === 1 && parseInt(number[5]) - parseInt(number[6]) === 1 ||
                parseInt(number[3]) - parseInt(number[4]) === -1 && parseInt(number[4]) - parseInt(number[5]) === -1 && parseInt(number[5]) - parseInt(number[6]) === -1 ||

                parseInt(number[3]) - parseInt(number[4]) === 1 && parseInt(number[4]) - parseInt(number[5]) === 1 && parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 1 ||
                parseInt(number[3]) - parseInt(number[4]) === -1 && parseInt(number[4]) - parseInt(number[5]) === -1 && parseInt(number[5]) - parseInt(number[6]) === -1 && parseInt(number[6]) - parseInt(number[7]) === -1 ||

                parseInt(number[3]) - parseInt(number[4]) === 1 && parseInt(number[4]) - parseInt(number[5]) === 1 && parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 1 && parseInt(number[7]) - parseInt(number[8]) === 1 ||
                parseInt(number[3]) - parseInt(number[4]) === -1 && parseInt(number[4]) - parseInt(number[5]) === -1 && parseInt(number[5]) - parseInt(number[6]) === -1 && parseInt(number[6]) - parseInt(number[7]) === -1 && parseInt(number[7]) - parseInt(number[8]) === -1 ||
                
                parseInt(number[3]) - parseInt(number[4]) === 1 && parseInt(number[4]) - parseInt(number[5]) === 1 && parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 1 && parseInt(number[7]) - parseInt(number[8]) === 1 && parseInt(number[8]) - parseInt(number[9]) === 1 ||
                parseInt(number[3]) - parseInt(number[4]) === -1 && parseInt(number[4]) - parseInt(number[5]) === -1 && parseInt(number[5]) - parseInt(number[6]) === -1 && parseInt(number[6]) - parseInt(number[7]) === -1 && parseInt(number[7]) - parseInt(number[8]) === -1 && parseInt(number[8]) - parseInt(number[9]) === -1 ||
                
                parseInt(number[4]) - parseInt(number[5]) === 1 && parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 1 && parseInt(number[7]) - parseInt(number[8]) === 1 && parseInt(number[8]) - parseInt(number[9]) === 1 ||
                parseInt(number[4]) - parseInt(number[5]) === -1 && parseInt(number[5]) - parseInt(number[6]) === -1 && parseInt(number[6]) - parseInt(number[7]) === -1 && parseInt(number[7]) - parseInt(number[8]) === -1 && parseInt(number[8]) - parseInt(number[9]) === -1 ||
                
                parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 1 && parseInt(number[7]) - parseInt(number[8]) === 1 && parseInt(number[8]) - parseInt(number[9]) === 1 ||
                parseInt(number[5]) - parseInt(number[6]) === -1 && parseInt(number[6]) - parseInt(number[7]) === -1 && parseInt(number[7]) - parseInt(number[8]) === -1 && parseInt(number[8]) - parseInt(number[9]) === -1 ||

                parseInt(number[6]) - parseInt(number[7]) === 1 && parseInt(number[7]) - parseInt(number[8]) === 1 && parseInt(number[8]) - parseInt(number[9]) === 1 ||
                parseInt(number[6]) - parseInt(number[7]) === -1 && parseInt(number[7]) - parseInt(number[8]) === -1 && parseInt(number[8]) - parseInt(number[9]) === -1
            ){
                console.log(number.join(''))
            }

            // Incremental 2 Increase/Decrease
            if(
                parseInt(number[3]) - parseInt(number[4]) === 2 && parseInt(number[4]) - parseInt(number[5]) === 2 && parseInt(number[5]) - parseInt(number[6]) === 2 ||
                parseInt(number[3]) - parseInt(number[4]) === -2 && parseInt(number[4]) - parseInt(number[5]) === -2 && parseInt(number[5]) - parseInt(number[6]) === -2 ||

                parseInt(number[3]) - parseInt(number[4]) === 2 && parseInt(number[4]) - parseInt(number[5]) === 2 && parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 2 ||
                parseInt(number[3]) - parseInt(number[4]) === -2 && parseInt(number[4]) - parseInt(number[5]) === -2 && parseInt(number[5]) - parseInt(number[6]) === -2 && parseInt(number[6]) - parseInt(number[7]) === -2 ||

                parseInt(number[3]) - parseInt(number[4]) === 2 && parseInt(number[4]) - parseInt(number[5]) === 2 && parseInt(number[5]) - parseInt(number[6]) === 1 && parseInt(number[6]) - parseInt(number[7]) === 2 && parseInt(number[7]) - parseInt(number[8]) === 2 ||
                parseInt(number[3]) - parseInt(number[4]) === -2 && parseInt(number[4]) - parseInt(number[5]) === -2 && parseInt(number[5]) - parseInt(number[6]) === -2 && parseInt(number[6]) - parseInt(number[7]) === -2 && parseInt(number[7]) - parseInt(number[8]) === -2 ||
                
                parseInt(number[3]) - parseInt(number[4]) === 2 && parseInt(number[4]) - parseInt(number[5]) === 2 && parseInt(number[5]) - parseInt(number[6]) === 2 && parseInt(number[6]) - parseInt(number[7]) === 2 && parseInt(number[7]) - parseInt(number[8]) === 2 && parseInt(number[8]) - parseInt(number[9]) === 2 ||
                parseInt(number[3]) - parseInt(number[4]) === -2 && parseInt(number[4]) - parseInt(number[5]) === -2 && parseInt(number[5]) - parseInt(number[6]) === -2 && parseInt(number[6]) - parseInt(number[7]) === -2 && parseInt(number[7]) - parseInt(number[8]) === -2 && parseInt(number[8]) - parseInt(number[9]) === -2 ||
                
                parseInt(number[4]) - parseInt(number[5]) === 2 && parseInt(number[5]) - parseInt(number[6]) === 2 && parseInt(number[6]) - parseInt(number[7]) === 2 && parseInt(number[7]) - parseInt(number[8]) === 2 && parseInt(number[8]) - parseInt(number[9]) === 2 ||
                parseInt(number[4]) - parseInt(number[5]) === -2 && parseInt(number[5]) - parseInt(number[6]) === -2 && parseInt(number[6]) - parseInt(number[7]) === -2 && parseInt(number[7]) - parseInt(number[8]) === -2 && parseInt(number[8]) - parseInt(number[9]) === -2 ||
                
                parseInt(number[5]) - parseInt(number[6]) === 2 && parseInt(number[6]) - parseInt(number[7]) === 2 && parseInt(number[7]) - parseInt(number[8]) === 2 && parseInt(number[8]) - parseInt(number[9]) === 2 ||
                parseInt(number[5]) - parseInt(number[6]) === -2 && parseInt(number[6]) - parseInt(number[7]) === -2 && parseInt(number[7]) - parseInt(number[8]) === -2 && parseInt(number[8]) - parseInt(number[9]) === -2 ||
                
                parseInt(number[6]) - parseInt(number[7]) === 2 && parseInt(number[7]) - parseInt(number[8]) === 2 && parseInt(number[8]) - parseInt(number[9]) === 2 ||
                parseInt(number[6]) - parseInt(number[7]) === -2 && parseInt(number[7]) - parseInt(number[8]) === -2 && parseInt(number[8]) - parseInt(number[9]) === -2
            ){
                console.log(number.join(''))
            }
    }
}


goodNum(numArr);