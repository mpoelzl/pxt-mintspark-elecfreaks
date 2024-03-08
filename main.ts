//% weight=100 color=#DC22E1 block="MINTspark Elecfreaks" blockId="MINTspark Elecfreaks" icon="\f0e7"
namespace mintspark {
    export enum DriveDirection {
        //%block="forward"
        Forward = 1,
        //%block="reverse"
        Backward = 0
    }

    //% blockId=sonarbit block="Ultrasonic sensor %Rjpin distance %distance_unit"
    //% Rjpin.fieldEditor="gridpicker"
    //% Rjpin.fieldOptions.columns=2
    //% distance_unit.fieldEditor="gridpicker"
    //% distance_unit.fieldOptions.columns=2
    //% subcategory=Sensor group="Digital" color=#EA5532
    export function ultrasoundSensor(Rjpin: PlanetX_Basic.DigitalRJPin, distance_unit: PlanetX_Basic.Distance_Unit_List): number {
        return PlanetX_Basic.ultrasoundSensor(Rjpin, distance_unit);
    }
}
