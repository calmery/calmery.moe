module Update exposing (Msg(..), update)

import Model exposing (Model)


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )
