Blockly.Python['sds011_read'] = function(block) {
  Blockly.Python.definitions_['import_tm1637'] = 'import sds011';

  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_type = block.getFieldValue('type');

  var code = `sds011.read(${dropdown_pin})[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};
