module Data.EnvironmentVariables exposing (EnvironmentVariables, get, parse)

import Dict exposing (Dict, empty, fromList)
import Json.Decode exposing (Error, decodeString, keyValuePairs, string)


type alias EnvironmentVariables =
    Dict String String


parse : String -> EnvironmentVariables
parse flags =
    let
        parser : String -> Result Error (List ( String, String ))
        parser =
            decodeString (keyValuePairs string)
    in
    case parser flags of
        Ok result ->
            fromList result

        Err _ ->
            empty


get : EnvironmentVariables -> String -> Maybe String
get environmentVariables key =
    Dict.get key environmentVariables
