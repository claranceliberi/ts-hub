const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// or 

const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");


const x = "hello" as number;
// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.


// so there might be time where you will face this error 
// and you have no other way or you are just seriously 
// about what you are doing.
// Or may be it might be someones code you don't want to mess ub with 
// so you can easily do as the error sugest

const y = "hello" as unknown as number; // this tricky ts compiler and it will just be like normal js, but actually it is a string


// const a = (expr as any) as T;