module Parts.Header exposing (view)

import Html exposing (Html, a, div, h1, header, img, node, p, text)
import Html.Attributes exposing (alt, href, id, src)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view model =
    header
        []
        [ div [ id "logo-and-about-me" ] [ logo, aboutMe ]
        , border
        , introduction
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


introduction : Html Msg
introduction =
    p
        []
        [ text "一次創作と同人音楽が好き！\nオタク的な活動とか好きなものはここにまとめていくよ．" ]


aboutMe : Html Msg
aboutMe =
    a
        [ href "https://calmery.me" ]
        [ div
            [ id "about-me" ]
            [ text "About me" ]
        ]
