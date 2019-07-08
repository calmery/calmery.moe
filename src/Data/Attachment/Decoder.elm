module Data.Attachment.Decoder exposing (attachmentDecoder)

import Json.Decode exposing (Decoder, field, map, string, succeed)
import Json.Decode.Pipeline exposing (optional, required)
import Model exposing (Attachment)


attachmentDecoder : Decoder Attachment
attachmentDecoder =
    succeed Attachment
        |> required "thumbnail" string
        |> required "title" string
        |> optional "url" (map Just string) Nothing
