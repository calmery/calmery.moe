module View exposing (view)

import Html exposing (Html, text)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view model =
    text model
