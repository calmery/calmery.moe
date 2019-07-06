module Parts.Footer.Share exposing (view)

import Html exposing (Html, a, div, i, span, text)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view _ =
    div
        []
        [ tweetButton
        ]


tweetButton : Html Msg
tweetButton =
    div [ class "tweet" ]
        [ a [ class "button", href "https://twitter.com/intent/tweet?url=https%3A%2F%2Fcalmery.moe&text=Calmery.moe" ]
            [ i [] []
            , span
                [ class "label" ]
                [ text "Tweet" ]
            ]
        ]
