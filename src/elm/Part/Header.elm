module Part.Header exposing (viewHeader)

import Html exposing (Html, a, br, div, img, text)
import Html.Attributes exposing (class, href, src)
import Model exposing (Model)
import Msg exposing (Msg)
import Part.Empty exposing (empty)
import Part.Flex exposing (flex)


getHeaderClass : Bool -> String
getHeaderClass isTopPage =
    if isTopPage then
        "header"

    else
        "header entry"


viewHeader : Model -> Html Msg
viewHeader model =
    let
        isTopPage =
            model.url.path == "/"
    in
    if model.entry.isFetching then
        empty

    else
        case model.entry.data of
            Just entry ->
                div
                    [ class <| getHeaderClass isTopPage
                    ]
                    [ div [ class "name" ]
                        [ text entry.title ]
                    , div [ class "description" ]
                        (List.map (\description -> div [] [ text description ]) entry.description)
                    , div [ class "line" ]
                        []
                    , if isTopPage then
                        a [ class "go-to-calmery-me-button", href "https://calmery.me" ]
                            [ div [ class "button" ]
                                [ flex
                                    [ div [ class "label" ] [ text "Calmery.me" ]
                                    , div [] [ img [ src "/assets/images/more.svg" ] [] ]
                                    ]
                                ]
                            ]

                      else
                        div [ class "icon" ]
                            [ img [ src entry.thumbnail ] [] ]
                    ]

            Nothing ->
                empty
