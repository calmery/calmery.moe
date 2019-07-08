module Pages.Loading exposing (view)

import Html exposing (Html, a, div, img, p, text)
import Html.Attributes exposing (alt, href, id, src)
import Msg exposing (Msg)


view : Html Msg
view =
    div
        [ id "loading" ]
        [ div []
            [ p [] [ text "読み込み中..." ]
            ]
        ]
