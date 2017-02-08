// automatically generated by the FlatBuffers compiler, do not modify

import {flatbuffers} from "./flatbuffers"
/**
 * @enum
 */
export namespace IndisMQ{
export enum MsgType{
  REQ= 0,
  REP= 1,
  CAST= 2
}}

/**
 * @enum
 */
export namespace IndisMQ{
export enum Action{
  GET= 0,
  SET= 1,
  NEW= 2,
  APPEND= 3,
  REPLACE= 4,
  UPDATE= 5,
  DELETE= 6,
  SUBSCRIBE= 7,
  UNSUBSCRIBE= 8,
  CONNECT= 9,
  JOIN= 10
}}

/**
 * @constructor
 */
export namespace IndisMQ{
export class Imq {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Imq}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Imq {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Imq=} obj
 * @returns {Imq}
 */
static getRootAsImq(bb:flatbuffers.ByteBuffer, obj?:Imq):Imq {
  return (obj || new Imq).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {boolean}
 */
static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('0001');
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
MsgId():string
MsgId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
MsgId(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {IndisMQ.MsgType}
 */
MsgType():IndisMQ.MsgType {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {IndisMQ.MsgType} */ (this.bb.readInt8(this.bb_pos + offset)) : IndisMQ.MsgType.REQ;
};

/**
 * @param {IndisMQ.MsgType} value
 * @returns {boolean}
 */
mutate_MsgType(value:IndisMQ.MsgType):boolean {
  var offset = this.bb.__offset(this.bb_pos, 6)

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
}

/**
 * @returns {IndisMQ.Action}
 */
Action():IndisMQ.Action {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? /** @type {IndisMQ.Action} */ (this.bb.readInt8(this.bb_pos + offset)) : IndisMQ.Action.GET;
};

/**
 * @param {IndisMQ.Action} value
 * @returns {boolean}
 */
mutate_Action(value:IndisMQ.Action):boolean {
  var offset = this.bb.__offset(this.bb_pos, 8)

  if (offset === 0) {
    return false;
  }

  this.bb.writeInt8(this.bb_pos + offset, value);
  return true;
}

/**
 * @returns {number}
 */
Status():number {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} value
 * @returns {boolean}
 */
mutate_Status(value:number):boolean {
  var offset = this.bb.__offset(this.bb_pos, 10)

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
To():string
To(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
To(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
From():string
From(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
From(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Path():string
Path(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
Path(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Authorization():string
Authorization(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
Authorization(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Body(index: number):number {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
BodyLength():number {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
BodyArray():Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @param {IndisMQ.Meta=} obj
 * @returns {IndisMQ.Meta}
 */
Meta(index: number, obj?:IndisMQ.Meta):IndisMQ.Meta {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? (obj || new IndisMQ.Meta).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
MetaLength():number {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startImq(builder:flatbuffers.Builder) {
  builder.startObject(10);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} MsgIdOffset
 */
static addMsgId(builder:flatbuffers.Builder, MsgIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, MsgIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {IndisMQ.MsgType} MsgType
 */
static addMsgType(builder:flatbuffers.Builder, MsgType:IndisMQ.MsgType) {
  builder.addFieldInt8(1, MsgType, IndisMQ.MsgType.REQ);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {IndisMQ.Action} Action
 */
static addAction(builder:flatbuffers.Builder, Action:IndisMQ.Action) {
  builder.addFieldInt8(2, Action, IndisMQ.Action.GET);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} Status
 */
static addStatus(builder:flatbuffers.Builder, Status:number) {
  builder.addFieldInt16(3, Status, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ToOffset
 */
static addTo(builder:flatbuffers.Builder, ToOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, ToOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} FromOffset
 */
static addFrom(builder:flatbuffers.Builder, FromOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, FromOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} PathOffset
 */
static addPath(builder:flatbuffers.Builder, PathOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, PathOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} AuthorizationOffset
 */
static addAuthorization(builder:flatbuffers.Builder, AuthorizationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, AuthorizationOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} BodyOffset
 */
static addBody(builder:flatbuffers.Builder, BodyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, BodyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
static createBodyVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
if(!data){
  return null
}
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
static startBodyVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} MetaOffset
 */
static addMeta(builder:flatbuffers.Builder, MetaOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, MetaOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
static createMetaVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
if(!data){
  return null
}
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
static startMetaVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endImq (builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
static finishImqBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '0001');
};

}
}
/**
 * @constructor
 */
export namespace IndisMQ{
export class Meta {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  bb: flatbuffers.ByteBuffer= null;

  /**
   * @type {number}
   */
  bb_pos:number = 0;
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Meta}
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Meta {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Meta=} obj
 * @returns {Meta}
 */
static getRootAsMeta(bb:flatbuffers.ByteBuffer, obj?:Meta):Meta {
  return (obj || new Meta).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Key():string
Key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
Key(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
Value():string
Value(optionalEncoding:flatbuffers.Encoding):string|Uint8Array
Value(optionalEncoding?:any):string|Uint8Array {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
static startMeta(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} KeyOffset
 */
static addKey(builder:flatbuffers.Builder, KeyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, KeyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} ValueOffset
 */
static addValue(builder:flatbuffers.Builder, ValueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, ValueOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
static endMeta (builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 4); // Key
  return offset;
};

}
}
