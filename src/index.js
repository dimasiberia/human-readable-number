module.exports = function toReadable(number) {
    let answer = '';
    if(number == 0){
        answer = 'zero'
    }
    switch (Math.floor(number / 100)) {
        case 1:
            answer += "one hundred";
            break;
        case 2:
            answer += "two hundred";
            break;
        case 3:
            answer += "three hundred";
            break;
        case 4:
            answer += "four hundred";
            break;
        case 5:
            answer += "five hundred";
            break;
        case 6:
            answer += "six hundred";
            break;
        case 7:
            answer += "seven hundred";
            break;
        case 8:
            answer += "eight hundred";
            break;
        case 9:
            answer += "nine hundred";
            break;
    }
if(Math.floor(number/100)>0  && Math.floor(number%100/10)>0){
    answer += " ";
}
    switch (Math.floor(number % 100 / 10)) {
        case 1: 
        switch (Math.floor(number % 100 % 10)) {
            case 0:
                answer += "ten";
                break;
            case 1:
                answer += "eleven";
                break;
            case 2:
                answer += "twelve";
                break;
            case 3:
                answer += "thirteen";
                break;
            case 4:
                answer += "fourteen";
                break;
            case 5:
                answer += "fifteen";
                break;
            case 6:
                answer += "sixteen";
                break;
            case 7:
                answer += "seventeen";
                break;
            case 8:
                answer += "eighteen";
                break;
            case 9:
                answer += "nineteen";
                break;

        }
        break;

        case 2:
            answer += "twenty";
            break;
        case 3:
            answer += "thirty";
            break;
        case 4:
            answer += "forty";
            break;
        case 5:
            answer += "fifty";
            break;
        case 6:
            answer += "sixty";
            break;
        case 7:
            answer += "seventy";
            break;
        case 8:
            answer += "eighty";
            break;
        case 9:
            answer += "ninety";
            break;

    }
    if( number%10>0 && Math.floor(number%100/10)!=1 && (Math.floor(number%100/10)>0 || Math.floor(number/100)>0)){
        answer += " "
    }
    if (Math.floor(number%100/10)!= 1) {
        switch (number%10) {
            case 1:
                answer += "one";
                break;
            case 2:
                answer += "two";
                break;
            case 3:
                answer += "three";
                break;
            case 4:
                answer += "four";
                break;
            case 5:
                answer += "five";
                break;
            case 6:
                answer += "six";
                break;
            case 7:
                answer += "seven";
                break;
            case 8:
                answer += "eight";
                break;
            case 9:
                answer += "nine";
                break;
        }
    }
    return answer;
}
