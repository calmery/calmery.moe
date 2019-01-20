module Main exposing (..)

import Browser exposing (element)
import Flags exposing (decodeFlags)
import Model exposing (Model)
import Ports exposing (setTitle)
import Update exposing (Msg, update)
import View exposing (view)


init : String -> ( Model, Cmd Msg )
init value =
    let
        decoded =
            decodeFlags value

        message =
            case decoded of
                Ok flags ->
                    flags.message

                Err _ ->
                    ""
    in
        ( message, setTitle "" )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program String Model Msg
main =
    element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
