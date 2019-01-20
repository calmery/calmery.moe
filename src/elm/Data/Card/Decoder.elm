module Data.Card.Decoder exposing (cardDecoder)

import Model exposing (Card)
import Yaml.Decode exposing (Decoder, field, map4, string)


cardDecoder : Decoder Card
cardDecoder =
    map4 Card
        (field "title" string)
        (field "description" string)
        (field "thumbnail" string)
        (field "url" string)
