module Pages.Entry exposing (view)

import Html exposing (Html, div, text)
import Model exposing (Model)
import Msg exposing (Msg)
import Pages.Loading as LoadingPage
import Pages.NotFound as NotFoundPage


view : Model -> Html Msg
view model =
    if model.entry.isFetching then
        LoadingPage.view

    else
        case model.entry.data of
            Just entry ->
                text "Entry"

            Nothing ->
                NotFoundPage.view
