module Parts.Footer exposing (view)

import Html exposing (Html, div, footer, p, text)
import Html.Attributes exposing (id)
import Model exposing (Model)
import Msg exposing (Msg)
import Parts.Footer.Profile as Profile
import Parts.Footer.Share as Share


view : Model -> Html Msg
view model =
    footer
        []
        [ Profile.view model
        , shareAndCopyright model
        ]


shareAndCopyright : Model -> Html Msg
shareAndCopyright model =
    div
        [ id "share-and-copyright" ]
        [ Share.view model
        , copyright
        ]


copyright : Html Msg
copyright =
    p
        [ id "copyright" ]
        [ text "CopyRight 2019 Calmery All Rights Reserved" ]
