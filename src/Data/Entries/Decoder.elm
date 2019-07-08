module Data.Entries.Decoder exposing (decodeEntries)

import Json.Decode exposing (Decoder, Error, decodeString, field, list, map5, string)
import Model exposing (SimpleEntry)


decodeEntries : String -> Result Error (List SimpleEntry)
decodeEntries =
    decodeString entriesDecoder


entriesDecoder : Decoder (List SimpleEntry)
entriesDecoder =
    list simpleEntryDecoder


simpleEntryDecoder : Decoder SimpleEntry
simpleEntryDecoder =
    map5 SimpleEntry
        (field "date" string)
        (field "description" string)
        (field "thumbnail" string)
        (field "title" string)
        (field "url" string)
