module Data.Attachment.Decoder exposing (attachmentDecoder)

import Json.Decode exposing (Decoder, field, map3, string)
import Model exposing (Attachment)


attachmentDecoder : Decoder Attachment
attachmentDecoder =
    map3 Attachment
        (field "thumbnail" string)
        (field "title" string)
        (field "url" string)
