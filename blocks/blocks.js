Blockly.defineBlocksWithJsonArray([
{
  "type": "sds011_read",
  "message0": "SDS011 tx pin %1 read %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ],
        [
          "OUT1",
          "26"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "PM2.5",
          "0"
        ],
        [
          "PM10.0",
          "1"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "#2C3E50",
  "tooltip": "Read particle concentration from SDS011",
  "helpUrl": "https://www.ioxhop.com/p/1068"
}
]);
