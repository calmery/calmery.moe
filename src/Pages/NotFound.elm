module Pages.NotFound exposing (view)

import Html exposing (Html, a, div, img, p, text)
import Html.Attributes exposing (alt, href, id, src)
import Msg exposing (Msg)


view : Html Msg
view =
    div
        [ id "not-found" ]
        [ div []
            [ img [ src "/assets/sorry.png", alt "読み込みに失敗しました" ] []
            , p [] [ text "読み込みに失敗しました..." ]
            , a
                [ href "/#/" ]
                [ div
                    [ id "return-to-top" ]
                    [ text "トップに戻る" ]
                ]
            ]
        ]
