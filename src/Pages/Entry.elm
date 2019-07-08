module Pages.Entry exposing (view)

import Html exposing (Html, article, div, text)
import Model exposing (Model)
import Msg exposing (Msg)
import Pages.Entry.Body as Body
import Pages.Entry.Header as Header
import Pages.Loading as LoadingPage
import Pages.NotFound as NotFoundPage


view : Model -> Html Msg
view model =
    if model.entry.isFetching then
        LoadingPage.view

    else
        case model.entry.data of
            Just entry ->
                article []
                    [ Header.view entry
                    , Body.view entry
                    ]

            Nothing ->
                NotFoundPage.view True
