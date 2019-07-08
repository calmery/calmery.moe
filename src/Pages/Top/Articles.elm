module Pages.Top.Articles exposing (view)

import Html exposing (Html, a, div, p, section, text)
import Html.Attributes exposing (class, href, id, style)
import Model exposing (Model, SimpleEntry)
import Msg exposing (Msg)
import Pages.Loading as LoadingPage
import Pages.NotFound as NotFoundPage


view : Model -> Html Msg
view model =
    section
        [ id "articles" ]
        (case model.route of
            Just url ->
                if model.entries.isFetching then
                    [ LoadingPage.view ]

                else
                    case model.entries.data of
                        Just data ->
                            List.map
                                articleView
                                data

                        Nothing ->
                            [ NotFoundPage.view False ]

            Nothing ->
                [ NotFoundPage.view False ]
        )


articleView : SimpleEntry -> Html Msg
articleView article =
    div
        [ class "article" ]
        [ div
            [ class "title" ]
            [ text article.title ]
        , div
            [ class "date" ]
            [ text article.date ]
        , div
            [ class "thumbnail"
            , style "background" ("url(" ++ article.thumbnail ++ ") center / cover no-repeat")
            ]
            []
        , p
            [ class "description" ]
            [ text article.description ]
        , div
            [ class "readmore" ]
            [ a
                [ href article.url ]
                [ text "続きを読む" ]
            ]
        ]
