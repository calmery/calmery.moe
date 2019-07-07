module Data.Entries.Decoder exposing (decodeEntries)

import Model exposing (SimpleEntry)
import Yaml.Decode exposing (Decoder, Error, field, fromString, list, map5, string)


decodeEntries : String -> Result Error (List SimpleEntry)
decodeEntries =
    fromString entriesDecoder


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
