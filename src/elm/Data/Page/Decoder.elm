module Data.Page.Decoder exposing (decodePage)

import Data.Card.Decoder exposing (cardDecoder)
import Model exposing (Page)
import Yaml.Decode exposing (Decoder, Error, at, fromString, list, map4, string)


decodePage : String -> Result Error Page
decodePage =
    fromString entryDecoder


entryDecoder : Decoder Page
entryDecoder =
    map4 Page
        (at [ "entry", "title" ] string)
        (at [ "entry", "description" ] (list string))
        (at [ "entry", "thumbnail" ] string)
        (at [ "entry", "cards" ] (list cardDecoder))
