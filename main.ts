/*！
 * @file pxt-red_motor/main.ts
 * @brief Zhengbledore's microbit red motor drive makecode library.
 * @n [Get the module here](wait)
 * @n This is the microbit special red motor drive library, which realizes control
 *    of the motor, servo.
 *
 * @copyright	[Zhengbledore](), 2019
 * @copyright	GNU Lesser General Public License
 *
 * @author [email](18806639898@139.com)
 * @version  V1.0
 * @date  2019-04-08
 */

/**
 *This is red motor user motor and steering control function.
 */
//% weight=10 color=#ff3300 icon="\uf013" block="红色电机驱动模块"
namespace motor {

    /**
     * 两个电机.
     */
    export enum Motors {
        M1 = 0x1,
        M2 = 0x2,
    }

    /**
     * 电机电流方向.
     */
    export enum Dir {
        //% blockId="CW" block="CW"
        CW = 1,
            //% blockId="CCW" block="CCW"
        CCW = -1,
    }

    /**
     * open the dc motor.
     */
    //% weight=20
    //% blockId=motor_openMotor block="Motor open|%index"
    export function openMotor(): void{
        pins.digitalWritePin(DigitalPin.P14, 1)
    }

    /**
     * close the dc motor.
     */
    //% weight=20
    //% blockId=motor_closeMotor block="关闭电机模式|%index"
    export function closeMotor(): void{
        pins.digitalWritePin(DigitalPin.P14, 0)
    }

    let initialized = false

    let motorStatus = false

    /**
     * Execute a motor
     * M1~M4.
     * speed(0~255).
     */
    //% weight=90
    //% blockId=motor_executeMotor block="运行电机|%index|dir|%Dir|speed|%speed"
    //% speed.min=0 speed.max=100
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function executeMotor(index: Motors, direction:Dir, speed: number): void {

        if(!motorStatus){
            speed = speed * 10
            if(index == 0x1){
                pins.analogWritePin(AnalogPin.P1, speed)

                if(direction == 1){
                    pins.digitalWritePin(DigitalPin.P12, 1)
                    pins.digitalWritePin(DigitalPin.P13, 0)
                }else if(direction == -1){
                    pins.digitalWritePin(DigitalPin.P12, 0)
                    pins.digitalWritePin(DigitalPin.P13, 1)
                }

            }else if(index == 0x2){
                pins.analogWritePin(AnalogPin.P2, speed)

                if(direction == 1){
                    pins.digitalWritePin(DigitalPin.P15, 1)
                    pins.digitalWritePin(DigitalPin.P16, 0)
                }else if(direction == -1){
                    pins.digitalWritePin(DigitalPin.P15, 0)
                    pins.digitalWritePin(DigitalPin.P16, 1)
                }
            }
        }
    }
}