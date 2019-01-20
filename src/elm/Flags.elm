module Flags exposing (decodeFlags)

import Json.Decode exposing (Decoder, Error, decodeString, field, string, map)
import Model exposing (Flags)


decodeFlags : String -> Result Error Flags
decodeFlags value =
    decodeString flagsDecoder value


flagsDecoder : Decoder Flags
flagsDecoder =
    map Flags
        (field "message" string)
