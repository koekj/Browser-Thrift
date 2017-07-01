export enum ThriftType {
    STOP = 0,
    VOID = 1,
    BOOL = 2,
    BYTE = 3,
    I08 = 3,
    DOUBLE = 4,
    I16 = 6,
    I32 = 8,
    I64 = 10,
    STRING = 11,
    UTF7 = 11,
    STRUCT = 12,
    MAP = 13,
    SET = 14,
    LIST = 15,
    UTF8 = 16,
    UTF16 = 17
}

export enum MessageType {
    CALL = 1,
    REPLY,
    EXCEPTION,
    ONEWAY
}

export enum TApplicationExceptionType {
    UNKNOWN,
    UNKNOWN_METHOD,
    INVALID_MESSAGE_TYPE,
    WRONG_METHOD_NAME,
    BAD_SEQUENCE_ID,
    MISSING_RESULT,
    INTERNAL_ERROR,
    PROTOCOL_ERROR,
    INVALID_TRANSFORM,
    INVALID_PROTOCOL,
    UNSUPPORTED_CLIENT_TYPE,
    MISSING_SERVICE_CLIENT
}