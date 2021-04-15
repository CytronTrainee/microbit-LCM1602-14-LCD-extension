
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
const TENDOTS = 0X04;
const EIGHTDOTS = 0X00;
const ONELINE = 0X00;
const TWOLINE = 0X08;
const EIGHTBITMODE = 0X10;
const FOURBITMODE = 0X00;     

/**
 * LCD_i2c blocks
 */

//% weight=100 color=#0fbc11 icon=""
namespace LCD_i2c {

    function command(value: number): void
    {
        let buffer = pins.createBuffer(2);
        buffer[0] = 0x80;
        buffer[1] = value;
        pins.i2cWriteBuffer(0, buffer);
        basic.pause(1);
    }

    function write(value: number): void
    {
        let buffer = pins.createBuffer(2);
        buffer[0] = 0x40;
        buffer[1] = value;
        pins.i2cWriteBuffer(0, buffer);
        basic.pause(1);
    }
    //% blockId="I2C_LCD1620_SET_ADDRESS" block="LCD initialize with Address %addr"
    //% weight=100 blockGap=8
    //% parts=LCD1602_I2C trackArgs=0
    export function LcdBegin(Addr: number) 
    {
        basic.pause(5000);
        command(FUNCTIONSET | TWOLINE);
        basic.pause(1000);
        display();
        basic.pause(4);
        clear();
        basic.pause(200);
        command(ENTRYMODESET | ENTRYLEFT | ENTRYSHIFTDECREMENT);

        setCursor(0,0);
    }
    export function display() : void 
    {
        command(DISPLAYCONTROL | DISPLAYON | CURSOROFF | BLINKOFF);
    }
    export function clear() : void
    {
        command(CLEARDISPLAY);
        basic.pause(2000);
        setCursor(0,0);
    }
    // Set cursor
    function setCursor(line: number, column: number) 
    {
        const offsets = [0x00, 0x40, 0x14, 0x54];
        command(SETDDRAMADDR | (offsets[line] + column));
    }
}
