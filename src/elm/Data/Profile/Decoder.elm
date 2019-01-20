module Data.Profile.Decoder exposing (decodeProfile)

import Model exposing (Profile)
import Yaml.Decode exposing (Decoder, Error, at, fromString, map3, string)


decodeProfile : String -> Result Error Profile
decodeProfile =
    fromString profileDecoder


profileDecoder : Decoder Profile
profileDecoder =
    map3 Profile
        (at [ "profile", "name" ] string)
        (at [ "profile", "description" ] string)
        (at [ "profile", "icon" ] string)
