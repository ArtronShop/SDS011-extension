# Dev by Sonthaya Nongncuh, microBlock IDE
from machine import UART

uart = UART(2, 9600)

__old_value = [ 0 ] * 3
__pin = None

def b2i(x, y):
    return (x << 8 | y)

def read(pin):
    global __old_value, __pin

    if pin != __pin:
        uart.init(9600, bits=8, parity=None, stop=1, rx=pin, tx=-1)
        __pin = pin
    
    packet = uart.read()
    if not packet:
        return __old_value

    if len(packet) < 10:
        print("Packet size vaild")
        return __old_value

    if packet[0:2] != b"\xAA\xC0":
        print("Start error")
        return __old_value
    
    if packet[9] != 0xAB:
        print("Tail error")
        return __old_value

    packetSum = 0
    for ch in packet[2:8]:
        packetSum += ch
    packetSum = packetSum & 0xFF
    if packetSum != packet[8]:
        print("Checksum error")
        return __old_value

    for index in range(2):
        __old_value[index] = b2i(packet[(index * 2) + 1 + 2], packet[(index * 2) + 0 + 2]) / 10

    return __old_value
