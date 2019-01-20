module Part.Cards exposing (viewCards)

import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (alt, class, href, src)
import Model exposing (Card, Model)
import Msg exposing (Msg)
import Part.Flex exposing (flex, flexSpaceBetween)
import Part.Loading exposing (loading)
import Part.NotFound exposing (notFound)


getCardsClass : Bool -> String
getCardsClass isTopPage =
    if isTopPage then
        "cards"

    else
        "cards entry"


viewCards : Model -> Html Msg
viewCards model =
    let
        isTopPage =
            model.url.path == "/"
    in
    if model.entry.isFetching then
        loading True

    else
        case model.entry.data of
            Just entry ->
                div [ class <| getCardsClass isTopPage ]
                    [ flex
                        (List.map
                            (\card -> viewCard isTopPage card)
                            (List.take 3 entry.cards)
                        )
                    ]

            Nothing ->
                notFound True


viewCard : Bool -> Card -> Html Msg
viewCard isTopPage card =
    div [ class "card" ]
        (if isTopPage then
            [ text card.title
            , div [ class "thumbnail" ]
                []
            , div [ class "description" ]
                [ text card.description ]
            , a [ href card.url ]
                [ div [ class "more" ]
                    [ text "続きを読む" ]
                ]
            ]

         else
            [ flexSpaceBetween
                [ text card.title
                , a [ href card.url ]
                    [ img [ src "/assets/images/more.svg", alt "External Link", class "link" ]
                        []
                    ]
                ]
            , div [ class "thumbnail" ] []
            ]
        )
