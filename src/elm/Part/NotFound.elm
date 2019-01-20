module Part.NotFound exposing (notFound)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Msg exposing (Msg)


notFound : Bool -> Html Msg
notFound isFullScreen =
    div
        [ class <|
            "not-found"
                ++ (if isFullScreen then
                        " fullscreen"

                    else
                        ""
                   )
        ]
        [ text "Not Found" ]
