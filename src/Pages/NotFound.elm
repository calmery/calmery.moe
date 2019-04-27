module Pages.NotFound exposing (view)

import Html exposing (Html, div, text)
import Update exposing (Msg)


view : Html Msg
view =
    div
        []
        [ text "Not Found" ]
