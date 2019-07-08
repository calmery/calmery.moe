module Data.Entry.Decoder exposing (decodeEntry, entryDecoder)

import Data.Attachment.Decoder exposing (attachmentDecoder)
import Model exposing (Entry)
import Yaml.Decode exposing (Decoder, Error, field, fromString, list, map5, string)


decodeEntry : String -> Result Error Entry
decodeEntry =
    fromString entryDecoder


entryDecoder : Decoder Entry
entryDecoder =
    map5 Entry
        (field "attachments" (list attachmentDecoder))
        (field "body" string)
        (field "date" string)
        (field "thumbnail" string)
        (field "title" string)
