module Parts.Articles exposing (view)

import Html exposing (Html, div, section, text)
import Html.Attributes exposing (id)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view model =
    section
        [ id "articles" ]
        []
