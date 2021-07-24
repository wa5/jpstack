
/**
 * !variable named import exportr examples
 */


var name="akshita";
var gift="chocolate-silk"

export default name;
export {gift};
//diffult export and named export

/**
 * !function default  exportr examples
 */
 export default function eat(){
    console.log("i will have jamoons yammmy")
}

/**
 * !function named  exportr examples
 */
export function games(){
    console.log(" i want to play antakshiri")
}

/**
 * !export ann arry
 */

var arry=[66,89,9,0,84]
export default arry;
export {arry}

/**
 * !export ann classs
 */


export class dance {

    lungidance(){
        console.log("lungi dance lungi dance lungi dance ")
    }
}



export  default class dance1 {

    lungidance(){
        console.log("lungi dance lungi dance lungi dance ")
    }
}

var obj=new dance()


