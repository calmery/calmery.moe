module Data.Attachment.Decoder exposing (attachmentDecoder)

import Model exposing (Attachment)
import Yaml.Decode exposing (Decoder, field, map3, string)


attachmentDecoder : Decoder Attachment
attachmentDecoder =
    map3 Attachment
        (field "thumbnail" string)
        (field "title" string)
        (field "url" string)
