module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Model exposing (Model)
import Msg exposing (Msg)
import Part.Cards exposing (viewCards)
import Part.Header exposing (viewHeader)
import Part.Profile exposing (viewProfile)


getTitle : Model -> String
getTitle model =
    let
        defaultTitle =
            "Calmery.moe"
    in
    if model.entry.isFetching then
        defaultTitle

    else
        case model.entry.data of
            Just entry ->
                if model.url.path == "/" then
                    defaultTitle

                else
                    entry.title ++ " - " ++ defaultTitle

            Nothing ->
                defaultTitle


view : Model -> Document Msg
view model =
    { title = getTitle model
    , body =
        [ div []
            [ div [ class "background" ]
                []
            , container
                [ viewHeader model
                , viewCards model
                , viewProfile model
                , div [ class "copyright" ]
                    [ text "CopyRight 2019 Calmery All Rights Reserved" ]
                ]
            ]
        ]
    }


container : List (Html Msg) -> Html Msg
container children =
    div [ class "container" ]
        [ div [ class "padding" ]
            children
        ]
