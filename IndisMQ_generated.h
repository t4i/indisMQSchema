// automatically generated by the FlatBuffers compiler, do not modify

#ifndef FLATBUFFERS_GENERATED_INDISMQ_INDISMQ_H_
#define FLATBUFFERS_GENERATED_INDISMQ_INDISMQ_H_

#include "flatbuffers/flatbuffers.h"

namespace IndisMQ {

struct Imq;
struct ImqT;

struct Meta;
struct MetaT;

enum class MsgType : int8_t {
  REQ = 0,
  REP = 1,
  CAST = 2,
  MIN = REQ,
  MAX = CAST
};

inline const char **EnumNamesMsgType() {
  static const char *names[] = { "REQ", "REP", "CAST", nullptr };
  return names;
}

inline const char *EnumNameMsgType(MsgType e) { return EnumNamesMsgType()[static_cast<int>(e)]; }

enum class Action : int8_t {
  GET = 0,
  SET = 1,
  NEW = 2,
  APPEND = 3,
  REPLACE = 4,
  UPDATE = 5,
  DELETE = 6,
  SUBSCRIBE = 7,
  UNSUBSCRIBE = 8,
  CONNECT = 9,
  JOIN = 10,
  MIN = GET,
  MAX = JOIN
};

inline const char **EnumNamesAction() {
  static const char *names[] = { "GET", "SET", "NEW", "APPEND", "REPLACE", "UPDATE", "DELETE", "SUBSCRIBE", "UNSUBSCRIBE", "CONNECT", "JOIN", nullptr };
  return names;
}

inline const char *EnumNameAction(Action e) { return EnumNamesAction()[static_cast<int>(e)]; }

struct ImqT : public flatbuffers::NativeTable {
  std::string MsgId;
  MsgType MsgType;
  Action Action;
  uint16_t Status;
  std::string To;
  std::string From;
  std::string Path;
  std::string Authorization;
  std::vector<uint8_t> Body;
  std::vector<std::unique_ptr<MetaT>> Meta;
};

struct Imq FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_MSGID = 4,
    VT_MSGTYPE = 6,
    VT_ACTION = 8,
    VT_STATUS = 10,
    VT_TO = 12,
    VT_FROM = 14,
    VT_PATH = 16,
    VT_AUTHORIZATION = 18,
    VT_BODY = 20,
    VT_META = 22
  };
  const flatbuffers::String *MsgId() const { return GetPointer<const flatbuffers::String *>(VT_MSGID); }
  flatbuffers::String *mutable_MsgId() { return GetPointer<flatbuffers::String *>(VT_MSGID); }
  MsgType MsgType() const { return static_cast<MsgType>(GetField<int8_t>(VT_MSGTYPE, 0)); }
  bool mutate_MsgType(MsgType _MsgType) { return SetField(VT_MSGTYPE, static_cast<int8_t>(_MsgType)); }
  Action Action() const { return static_cast<Action>(GetField<int8_t>(VT_ACTION, 0)); }
  bool mutate_Action(Action _Action) { return SetField(VT_ACTION, static_cast<int8_t>(_Action)); }
  uint16_t Status() const { return GetField<uint16_t>(VT_STATUS, 0); }
  bool mutate_Status(uint16_t _Status) { return SetField(VT_STATUS, _Status); }
  const flatbuffers::String *To() const { return GetPointer<const flatbuffers::String *>(VT_TO); }
  flatbuffers::String *mutable_To() { return GetPointer<flatbuffers::String *>(VT_TO); }
  const flatbuffers::String *From() const { return GetPointer<const flatbuffers::String *>(VT_FROM); }
  flatbuffers::String *mutable_From() { return GetPointer<flatbuffers::String *>(VT_FROM); }
  const flatbuffers::String *Path() const { return GetPointer<const flatbuffers::String *>(VT_PATH); }
  flatbuffers::String *mutable_Path() { return GetPointer<flatbuffers::String *>(VT_PATH); }
  const flatbuffers::String *Authorization() const { return GetPointer<const flatbuffers::String *>(VT_AUTHORIZATION); }
  flatbuffers::String *mutable_Authorization() { return GetPointer<flatbuffers::String *>(VT_AUTHORIZATION); }
  const flatbuffers::Vector<uint8_t> *Body() const { return GetPointer<const flatbuffers::Vector<uint8_t> *>(VT_BODY); }
  flatbuffers::Vector<uint8_t> *mutable_Body() { return GetPointer<flatbuffers::Vector<uint8_t> *>(VT_BODY); }
  const flatbuffers::Vector<flatbuffers::Offset<Meta>> *Meta() const { return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<Meta>> *>(VT_META); }
  flatbuffers::Vector<flatbuffers::Offset<Meta>> *mutable_Meta() { return GetPointer<flatbuffers::Vector<flatbuffers::Offset<Meta>> *>(VT_META); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_MSGID) &&
           verifier.Verify(MsgId()) &&
           VerifyField<int8_t>(verifier, VT_MSGTYPE) &&
           VerifyField<int8_t>(verifier, VT_ACTION) &&
           VerifyField<uint16_t>(verifier, VT_STATUS) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_TO) &&
           verifier.Verify(To()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_FROM) &&
           verifier.Verify(From()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_PATH) &&
           verifier.Verify(Path()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_AUTHORIZATION) &&
           verifier.Verify(Authorization()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_BODY) &&
           verifier.Verify(Body()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_META) &&
           verifier.Verify(Meta()) &&
           verifier.VerifyVectorOfTables(Meta()) &&
           verifier.EndTable();
  }
  ImqT *UnPack(const flatbuffers::resolver_function_t *resolver = nullptr) const;
};

struct ImqBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_MsgId(flatbuffers::Offset<flatbuffers::String> MsgId) { fbb_.AddOffset(Imq::VT_MSGID, MsgId); }
  void add_MsgType(MsgType MsgType) { fbb_.AddElement<int8_t>(Imq::VT_MSGTYPE, static_cast<int8_t>(MsgType), 0); }
  void add_Action(Action Action) { fbb_.AddElement<int8_t>(Imq::VT_ACTION, static_cast<int8_t>(Action), 0); }
  void add_Status(uint16_t Status) { fbb_.AddElement<uint16_t>(Imq::VT_STATUS, Status, 0); }
  void add_To(flatbuffers::Offset<flatbuffers::String> To) { fbb_.AddOffset(Imq::VT_TO, To); }
  void add_From(flatbuffers::Offset<flatbuffers::String> From) { fbb_.AddOffset(Imq::VT_FROM, From); }
  void add_Path(flatbuffers::Offset<flatbuffers::String> Path) { fbb_.AddOffset(Imq::VT_PATH, Path); }
  void add_Authorization(flatbuffers::Offset<flatbuffers::String> Authorization) { fbb_.AddOffset(Imq::VT_AUTHORIZATION, Authorization); }
  void add_Body(flatbuffers::Offset<flatbuffers::Vector<uint8_t>> Body) { fbb_.AddOffset(Imq::VT_BODY, Body); }
  void add_Meta(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<Meta>>> Meta) { fbb_.AddOffset(Imq::VT_META, Meta); }
  ImqBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  ImqBuilder &operator=(const ImqBuilder &);
  flatbuffers::Offset<Imq> Finish() {
    auto o = flatbuffers::Offset<Imq>(fbb_.EndTable(start_, 10));
    return o;
  }
};

inline flatbuffers::Offset<Imq> CreateImq(flatbuffers::FlatBufferBuilder &_fbb,
    flatbuffers::Offset<flatbuffers::String> MsgId = 0,
    MsgType MsgType = MsgType::REQ,
    Action Action = Action::GET,
    uint16_t Status = 0,
    flatbuffers::Offset<flatbuffers::String> To = 0,
    flatbuffers::Offset<flatbuffers::String> From = 0,
    flatbuffers::Offset<flatbuffers::String> Path = 0,
    flatbuffers::Offset<flatbuffers::String> Authorization = 0,
    flatbuffers::Offset<flatbuffers::Vector<uint8_t>> Body = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<Meta>>> Meta = 0) {
  ImqBuilder builder_(_fbb);
  builder_.add_Meta(Meta);
  builder_.add_Body(Body);
  builder_.add_Authorization(Authorization);
  builder_.add_Path(Path);
  builder_.add_From(From);
  builder_.add_To(To);
  builder_.add_MsgId(MsgId);
  builder_.add_Status(Status);
  builder_.add_Action(Action);
  builder_.add_MsgType(MsgType);
  return builder_.Finish();
}

inline flatbuffers::Offset<Imq> CreateImqDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const char *MsgId = nullptr,
    MsgType MsgType = MsgType::REQ,
    Action Action = Action::GET,
    uint16_t Status = 0,
    const char *To = nullptr,
    const char *From = nullptr,
    const char *Path = nullptr,
    const char *Authorization = nullptr,
    const std::vector<uint8_t> *Body = nullptr,
    const std::vector<flatbuffers::Offset<Meta>> *Meta = nullptr) {
  return CreateImq(_fbb, MsgId ? _fbb.CreateString(MsgId) : 0, MsgType, Action, Status, To ? _fbb.CreateString(To) : 0, From ? _fbb.CreateString(From) : 0, Path ? _fbb.CreateString(Path) : 0, Authorization ? _fbb.CreateString(Authorization) : 0, Body ? _fbb.CreateVector<uint8_t>(*Body) : 0, Meta ? _fbb.CreateVector<flatbuffers::Offset<Meta>>(*Meta) : 0);
}

inline flatbuffers::Offset<Imq> CreateImq(flatbuffers::FlatBufferBuilder &_fbb, const ImqT *_o, const flatbuffers::rehasher_function_t *rehasher = nullptr);

struct MetaT : public flatbuffers::NativeTable {
  std::string Key;
  std::string Value;
};

struct Meta FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum {
    VT_KEY = 4,
    VT_VALUE = 6
  };
  const flatbuffers::String *Key() const { return GetPointer<const flatbuffers::String *>(VT_KEY); }
  flatbuffers::String *mutable_Key() { return GetPointer<flatbuffers::String *>(VT_KEY); }
  bool KeyCompareLessThan(const Meta *o) const { return *Key() < *o->Key(); }
  int KeyCompareWithValue(const char *val) const { return strcmp(Key()->c_str(), val); }
  const flatbuffers::String *Value() const { return GetPointer<const flatbuffers::String *>(VT_VALUE); }
  flatbuffers::String *mutable_Value() { return GetPointer<flatbuffers::String *>(VT_VALUE); }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyFieldRequired<flatbuffers::uoffset_t>(verifier, VT_KEY) &&
           verifier.Verify(Key()) &&
           VerifyField<flatbuffers::uoffset_t>(verifier, VT_VALUE) &&
           verifier.Verify(Value()) &&
           verifier.EndTable();
  }
  MetaT *UnPack(const flatbuffers::resolver_function_t *resolver = nullptr) const;
};

struct MetaBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_Key(flatbuffers::Offset<flatbuffers::String> Key) { fbb_.AddOffset(Meta::VT_KEY, Key); }
  void add_Value(flatbuffers::Offset<flatbuffers::String> Value) { fbb_.AddOffset(Meta::VT_VALUE, Value); }
  MetaBuilder(flatbuffers::FlatBufferBuilder &_fbb) : fbb_(_fbb) { start_ = fbb_.StartTable(); }
  MetaBuilder &operator=(const MetaBuilder &);
  flatbuffers::Offset<Meta> Finish() {
    auto o = flatbuffers::Offset<Meta>(fbb_.EndTable(start_, 2));
    fbb_.Required(o, Meta::VT_KEY);  // Key
    return o;
  }
};

inline flatbuffers::Offset<Meta> CreateMeta(flatbuffers::FlatBufferBuilder &_fbb,
    flatbuffers::Offset<flatbuffers::String> Key = 0,
    flatbuffers::Offset<flatbuffers::String> Value = 0) {
  MetaBuilder builder_(_fbb);
  builder_.add_Value(Value);
  builder_.add_Key(Key);
  return builder_.Finish();
}

inline flatbuffers::Offset<Meta> CreateMetaDirect(flatbuffers::FlatBufferBuilder &_fbb,
    const char *Key = nullptr,
    const char *Value = nullptr) {
  return CreateMeta(_fbb, Key ? _fbb.CreateString(Key) : 0, Value ? _fbb.CreateString(Value) : 0);
}

inline flatbuffers::Offset<Meta> CreateMeta(flatbuffers::FlatBufferBuilder &_fbb, const MetaT *_o, const flatbuffers::rehasher_function_t *rehasher = nullptr);

inline ImqT *Imq::UnPack(const flatbuffers::resolver_function_t *resolver) const {
  (void)resolver;
  auto _o = new ImqT();
  { auto _e = MsgId(); if (_e) _o->MsgId = _e->str(); };
  { auto _e = MsgType(); _o->MsgType = _e; };
  { auto _e = Action(); _o->Action = _e; };
  { auto _e = Status(); _o->Status = _e; };
  { auto _e = To(); if (_e) _o->To = _e->str(); };
  { auto _e = From(); if (_e) _o->From = _e->str(); };
  { auto _e = Path(); if (_e) _o->Path = _e->str(); };
  { auto _e = Authorization(); if (_e) _o->Authorization = _e->str(); };
  { auto _e = Body(); if (_e) { for (flatbuffers::uoffset_t _i = 0; _i < _e->size(); _i++) { _o->Body.push_back(_e->Get(_i)); } } };
  { auto _e = Meta(); if (_e) { for (flatbuffers::uoffset_t _i = 0; _i < _e->size(); _i++) { _o->Meta.push_back(std::unique_ptr<MetaT>(_e->Get(_i)->UnPack(resolver))); } } };
  return _o;
}

inline flatbuffers::Offset<Imq> CreateImq(flatbuffers::FlatBufferBuilder &_fbb, const ImqT *_o, const flatbuffers::rehasher_function_t *rehasher) {
  (void)rehasher;
  return CreateImq(_fbb,
    _o->MsgId.size() ? _fbb.CreateString(_o->MsgId) : 0,
    _o->MsgType,
    _o->Action,
    _o->Status,
    _o->To.size() ? _fbb.CreateString(_o->To) : 0,
    _o->From.size() ? _fbb.CreateString(_o->From) : 0,
    _o->Path.size() ? _fbb.CreateString(_o->Path) : 0,
    _o->Authorization.size() ? _fbb.CreateString(_o->Authorization) : 0,
    _o->Body.size() ? _fbb.CreateVector(_o->Body) : 0,
    _o->Meta.size() ? _fbb.CreateVector<flatbuffers::Offset<Meta>>(_o->Meta.size(), [&](size_t i) { return CreateMeta(_fbb, _o->Meta[i].get(), rehasher); }) : 0);
}

inline MetaT *Meta::UnPack(const flatbuffers::resolver_function_t *resolver) const {
  (void)resolver;
  auto _o = new MetaT();
  { auto _e = Key(); if (_e) _o->Key = _e->str(); };
  { auto _e = Value(); if (_e) _o->Value = _e->str(); };
  return _o;
}

inline flatbuffers::Offset<Meta> CreateMeta(flatbuffers::FlatBufferBuilder &_fbb, const MetaT *_o, const flatbuffers::rehasher_function_t *rehasher) {
  (void)rehasher;
  return CreateMeta(_fbb,
    _fbb.CreateString(_o->Key),
    _o->Value.size() ? _fbb.CreateString(_o->Value) : 0);
}

inline const IndisMQ::Imq *GetImq(const void *buf) {
  return flatbuffers::GetRoot<IndisMQ::Imq>(buf);
}

inline Imq *GetMutableImq(void *buf) {
  return flatbuffers::GetMutableRoot<Imq>(buf);
}

inline const char *ImqIdentifier() {
  return "0001";
}

inline bool ImqBufferHasIdentifier(const void *buf) {
  return flatbuffers::BufferHasIdentifier(buf, ImqIdentifier());
}

inline bool VerifyImqBuffer(flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<IndisMQ::Imq>(ImqIdentifier());
}

inline void FinishImqBuffer(flatbuffers::FlatBufferBuilder &fbb, flatbuffers::Offset<IndisMQ::Imq> root) {
  fbb.Finish(root, ImqIdentifier());
}

inline std::unique_ptr<ImqT> UnPackImq(const void *buf, const flatbuffers::resolver_function_t *resolver = nullptr) {
  return std::unique_ptr<ImqT>(GetImq(buf)->UnPack(resolver));
}

}  // namespace IndisMQ

#endif  // FLATBUFFERS_GENERATED_INDISMQ_INDISMQ_H_
