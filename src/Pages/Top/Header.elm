module Pages.Top.Header exposing (view)

import Html exposing (Html, a, div, h1, header, img, node, p, text)
import Html.Attributes exposing (alt, href, id, src)
import Model exposing (Model)
import Msg exposing (Msg)


view : Model -> Html Msg
view model =
    header
        []
        [ div [ id "logo-and-links" ] [ logo, links ]
        , border
        , introduction model
        ]


logo : Html Msg
logo =
    h1
        []
        [ img
            [ src "assets/logo.png", alt "Calmery.moe" ]
            []
        ]


border : Html Msg
border =
    div
        [ id "border" ]
        []


introduction : Model -> Html Msg
introduction model =
    p
        []
        [ text "一次創作と同人音楽が好き！\nオタク的な活動とか好きなものはここにまとめていくよ．" ]


links : Html Msg
links =
    div [ id "links" ] [ aboutMe, booth ]


booth : Html Msg
booth =
    a
        [ href "https://calmery.booth.pm" ]
        [ div
            []
            [ text "BOOTH" ]
        ]


aboutMe : Html Msg
aboutMe =
    a
        [ href "https://calmery.me" ]
        [ div
            []
            [ text "プロフィール" ]
        ]
