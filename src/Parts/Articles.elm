module Parts.Articles exposing (view)

import Html exposing (Html, a, div, p, section, text)
import Html.Attributes exposing (class, href, id)
import Model exposing (Model)
import Update exposing (Msg)


view : Model -> Html Msg
view model =
    section
        [ id "articles" ]
        [ article, article, article ]


article =
    div
        [ class "article" ]
        [ div [ class "title" ] [ text "かるめりちゃんスタンプ" ]
        , div [ class "date" ] [ text "2019/01/30" ]
        , div [ class "thumbnail" ] []
        , p [ class "description" ] [ text "イラストはめたねのおくすりさん！（@metaneno）" ]
        , div [ class "readmore" ] [ a [ href "" ] [ text "続きを読む" ] ]
        ]
