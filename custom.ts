
/**
 * Board initialization and helper function.
 */

//Instruction Set
const CLEARDISPLAY = 0x01;
const CURSORSHIFT = 0x10;


//Display Entry Mode
const ENTRYMODESET = 0x04;
const ENTRYLEFT = 0x02;
const ENTRYRIGHT = 0x00;
const ENTRYSHIFTINCREAMENT = 0x01;
const ENTRYSHIFTDECREMENT = 0x00;

//Flags for display/cursor shift 
const DISPLAYMOVE = 0x08;
const CURSORMOVE = 0X00;
const MOVERIGHT = 0X04;
const MOVELEFT = 0X00;

//display control
const DISPLAYCONTROL = 0X08;
const DISPLAYON = 0X04;
const DISPLAYOFF = 0X00;
const CURSORON = 0X02;
const CURSOROFF = 0X00;
const BLINKON = 0X01;
const BLINKOFF = 0X00;
const SETCGRAMADDR = 0X40;
const SETDDRAMADDR = 0X80;

//for functionset
const FUNCTIONSET = 0X20;
const _5x10DOTS = 0X04;
const _5x8DOTS = 0X00;
const _1LINE = 0X00;
const _2LINE = 0X08;
const _8BITMODE = 0X10;
const  _4BITMODE = 0X00;     

//% weight=100 color=#0fbc11 icon=""
namespace LCD_i2c {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
