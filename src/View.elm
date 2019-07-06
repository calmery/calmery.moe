module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, a, div, h1, header, img, node, p, text)
import Html.Attributes exposing (alt, class, href, id, src)
import Model exposing (Model)
import Parts.Header as Header
import Route exposing (Route(..))
import Update exposing (Msg(..))


view : Model -> Document Msg
view model =
    { title = "Calmery.moe"
    , body =
        [ node "main"
            []
            [ div
                [ id "container" ]
                [ Header.view model
                ]
            ]
        ]
    }
