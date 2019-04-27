module Pages.Example exposing (view)

import Html exposing (Html, a, div, text)
import Html.Attributes exposing (href)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view model =
    div
        []
        [ a [ href "/#/" ] [ text "Go to Top" ]
        ]
