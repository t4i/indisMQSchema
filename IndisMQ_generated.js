// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var IndisMQ = IndisMQ || {};

/**
 * @enum
 */
IndisMQ.Action = {
  ACK: 0,
  GET: 1,
  HEAD: 2,
  POST: 3,
  PUT: 4,
  DELETE: 5,
  CONNECT: 6,
  OPTIONS: 7,
  TRACE: 8,
  PATCH: 9,
  RESPONSE: 10,
  SUBSCRIBE: 11,
  UNSUBSCRIBE: 12,
  CAST: 13
};

/**
 * @enum
 */
IndisMQ.Guarantee = {
  NONE: 0,
  AT_LEAST_ONCE: 1
};

/**
 * @constructor
 */
IndisMQ.Imq = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {IndisMQ.Imq}
 */
IndisMQ.Imq.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {IndisMQ.Imq=} obj
 * @returns {IndisMQ.Imq}
 */
IndisMQ.Imq.getRootAsImq = function(bb, obj) {
  return (obj || new IndisMQ.Imq).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {boolean}
 */
IndisMQ.Imq.bufferHasIdentifier = function(bb) {
  return bb.__has_identifier('0001');
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.Imq.prototype.MsgId = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {IndisMQ.Action}
 */
IndisMQ.Imq.prototype.Action = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {IndisMQ.Action} */ (this.bb.readInt8(this.bb_pos + offset)) : IndisMQ.Action.ACK;
};

/**
 * @param {IndisMQ.Action} value
 * @returns {boolean}
 */
IndisMQ.Imq.prototype.mutate_Action = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 6)

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
}

/**
 * @returns {number}
 */
IndisMQ.Imq.prototype.Status = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
IndisMQ.Imq.prototype.mutate_Status = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 8)

  if (offset === 0) {
    return false;
  }

  this.bb.writeUint16(this.bb_pos + offset, value);
  return true;
}

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.Imq.prototype.To = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.Imq.prototype.From = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.Imq.prototype.Path = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.Imq.prototype.Authorization = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {boolean}
 */
IndisMQ.Imq.prototype.Callback = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {boolean} value
 * @returns {boolean}
 */
IndisMQ.Imq.prototype.mutate_Callback = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 18)

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, +value);
  return true;
}

/**
 * @param {number} index
 * @returns {number}
 */
IndisMQ.Imq.prototype.Body = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
IndisMQ.Imq.prototype.BodyLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
IndisMQ.Imq.prototype.BodyArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @param {IndisMQ.KeyVal=} obj
 * @returns {IndisMQ.KeyVal}
 */
IndisMQ.Imq.prototype.Meta = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? (obj || new IndisMQ.KeyVal).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
IndisMQ.Imq.prototype.MetaLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {IndisMQ.Guarantee}
 */
IndisMQ.Imq.prototype.Guarantee = function() {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? /** @type {IndisMQ.Guarantee} */ (this.bb.readInt8(this.bb_pos + offset)) : IndisMQ.Guarantee.NONE;
};

/**
 * @param {IndisMQ.Guarantee} value
 * @returns {boolean}
 */
IndisMQ.Imq.prototype.mutate_Guarantee = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 24)

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
}

/**
 * @returns {number}
 */
IndisMQ.Imq.prototype.Timeout = function() {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
IndisMQ.Imq.prototype.mutate_Timeout = function(value) {
  var offset = this.bb.__offset(this.bb_pos, 26)

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt32(this.bb_pos + offset, value);
  return true;
}

/**
 * @param {flatbuffers.Builder} builder
 */
IndisMQ.Imq.startImq = function(builder) {
  builder.startObject(12);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} MsgIdOffset
 */
IndisMQ.Imq.addMsgId = function(builder, MsgIdOffset) {
  builder.addFieldOffset(0, MsgIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {IndisMQ.Action} Action
 */
IndisMQ.Imq.addAction = function(builder, Action) {
  builder.addFieldInt8(1, Action, IndisMQ.Action.ACK);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} Status
 */
IndisMQ.Imq.addStatus = function(builder, Status) {
  builder.addFieldInt16(2, Status, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ToOffset
 */
IndisMQ.Imq.addTo = function(builder, ToOffset) {
  builder.addFieldOffset(3, ToOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} FromOffset
 */
IndisMQ.Imq.addFrom = function(builder, FromOffset) {
  builder.addFieldOffset(4, FromOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} PathOffset
 */
IndisMQ.Imq.addPath = function(builder, PathOffset) {
  builder.addFieldOffset(5, PathOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} AuthorizationOffset
 */
IndisMQ.Imq.addAuthorization = function(builder, AuthorizationOffset) {
  builder.addFieldOffset(6, AuthorizationOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} Callback
 */
IndisMQ.Imq.addCallback = function(builder, Callback) {
  builder.addFieldInt8(7, +Callback, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} BodyOffset
 */
IndisMQ.Imq.addBody = function(builder, BodyOffset) {
  builder.addFieldOffset(8, BodyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
IndisMQ.Imq.createBodyVector = function(builder, data) {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
IndisMQ.Imq.startBodyVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} MetaOffset
 */
IndisMQ.Imq.addMeta = function(builder, MetaOffset) {
  builder.addFieldOffset(9, MetaOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
IndisMQ.Imq.createMetaVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
IndisMQ.Imq.startMetaVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {IndisMQ.Guarantee} Guarantee
 */
IndisMQ.Imq.addGuarantee = function(builder, Guarantee) {
  builder.addFieldInt8(10, Guarantee, IndisMQ.Guarantee.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} Timeout
 */
IndisMQ.Imq.addTimeout = function(builder, Timeout) {
  builder.addFieldInt32(11, Timeout, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
IndisMQ.Imq.endImq = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
IndisMQ.Imq.finishImqBuffer = function(builder, offset) {
  builder.finish(offset, '0001');
};

/**
 * @constructor
 */
IndisMQ.KeyVal = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {IndisMQ.KeyVal}
 */
IndisMQ.KeyVal.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {IndisMQ.KeyVal=} obj
 * @returns {IndisMQ.KeyVal}
 */
IndisMQ.KeyVal.getRootAsKeyVal = function(bb, obj) {
  return (obj || new IndisMQ.KeyVal).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.KeyVal.prototype.Key = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
IndisMQ.KeyVal.prototype.Value = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
IndisMQ.KeyVal.startKeyVal = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} KeyOffset
 */
IndisMQ.KeyVal.addKey = function(builder, KeyOffset) {
  builder.addFieldOffset(0, KeyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ValueOffset
 */
IndisMQ.KeyVal.addValue = function(builder, ValueOffset) {
  builder.addFieldOffset(1, ValueOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
IndisMQ.KeyVal.endKeyVal = function(builder) {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // Key
  return offset;
};

// Exports for Node.js and RequireJS
this.IndisMQ = IndisMQ;
