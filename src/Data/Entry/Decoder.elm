module Data.Entry.Decoder exposing (decodeEntry, entryDecoder)

import Model exposing (Entry)
import Yaml.Decode exposing (Decoder, Error, field, fromString, map4, string)


decodeEntry : String -> Result Error Entry
decodeEntry =
    fromString entryDecoder


entryDecoder : Decoder Entry
entryDecoder =
    map4 Entry
        (field "body" string)
        (field "date" string)
        (field "thumbnail" string)
        (field "title" string)
