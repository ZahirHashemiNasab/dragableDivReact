//helper function for determining grids element style
export const gridAreaCalculation = (elementNumber:number) : string =>{

    switch (elementNumber) {
        case 1:
            return'span 2/ span 6';           
        case 2:
            return'span 2/ span 3';          
        case 3:
            return'span 1/ span 3';          
        case 4:
            return'span 1/ span 3';            
        case 5:
            return'span 1/ span 2';           
        case 6:
            return'span 1/ span 2';           
        case 7:
            return'span 1/ span 1';           
        case 8:
            return'span 1/ span 1';            
        case 9:
            return'span 1/ span 1';          
        case 10:
            return'span 1/ span 1';           
        case 11:
            return'span 1/ span 1';         
        case 12:
            return'span 1/ span 1';
        default:
            return'';

            
    }

}