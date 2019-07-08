module Data.Entry.Decoder exposing (decodeEntry, entryDecoder)

import Data.Attachment.Decoder exposing (attachmentDecoder)
import Json.Decode exposing (Decoder, Error, decodeString, field, list, map5, string)
import Model exposing (Entry)


decodeEntry : String -> Result Error Entry
decodeEntry =
    decodeString entryDecoder


entryDecoder : Decoder Entry
entryDecoder =
    map5 Entry
        (field "attachments" (list attachmentDecoder))
        (field "body" string)
        (field "date" string)
        (field "thumbnail" string)
        (field "title" string)
