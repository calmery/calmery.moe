module Parts.Footer.Profile exposing (view)

import Html exposing (Html, div, img, p, text)
import Html.Attributes exposing (alt, id, src)
import Model exposing (Model)
import Msg exposing (Msg)


view : Model -> Html Msg
view _ =
    div
        [ id "profile" ]
        [ icon
        , selfIntroduction
        ]


icon : Html Msg
icon =
    img
        [ src "assets/icon.jpg"
        , alt "Icon"
        ]
        []


selfIntroduction : Html Msg
selfIntroduction =
    div
        [ id "self-introduction" ]
        [ name
        , description
        ]


name : Html Msg
name =
    p
        [ id "name" ]
        [ text "Calmery" ]


description : Html Msg
description =
    p
        [ id "description" ]
        [ text "田舎の大学院生．JavaScript，Elm とか好き．イラストを投稿するサービスの会社でアルバイトしてます．" ]
