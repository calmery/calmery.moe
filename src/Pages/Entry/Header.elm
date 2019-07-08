module Pages.Entry.Header exposing (view)

import Html exposing (Html, a, div, h1, header, img, node, p, text)
import Html.Attributes exposing (alt, href, id, src)
import Markdown
import Model exposing (Entry)
import Msg exposing (Msg)


view : Entry -> Html Msg
view entry =
    header
        []
        [ div [ id "logo-and-links" ] [ title entry, returnToTop ]
        , border
        ]


title : Entry -> Html Msg
title entry =
    h1
        []
        [ text entry.title
        ]


border : Html Msg
border =
    div
        [ id "border" ]
        []


returnToTop : Html Msg
returnToTop =
    div [ id "links" ]
        [ a
            [ href "#/" ]
            [ div
                []
                [ text "トップに戻る" ]
            ]
        ]
