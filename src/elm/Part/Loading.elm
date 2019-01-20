module Part.Loading exposing (loading)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Msg exposing (Msg)


loading : Bool -> Html Msg
loading isFullScreen =
    div
        [ class <|
            "loading"
                ++ (if isFullScreen then
                        " fullscreen"

                    else
                        ""
                   )
        ]
        [ text "Loading" ]
