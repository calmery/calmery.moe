module Parts.Footer.Share exposing (view)

import Html exposing (Html, div, text)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view _ =
    div
        []
        [ text "Share"
        ]
