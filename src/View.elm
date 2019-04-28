module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, div, h1, p, text)
import Html.Attributes exposing (class, id)
import Model exposing (Model)
import Pages.Example as Example
import Pages.NotFound as NotFound
import Pages.Top as Top
import Route exposing (Route(..))
import Update exposing (Msg(..))


view : Model -> Document Msg
view model =
    { title = "Elm App"
    , body =
        [ fullPage
        ]
    }


viewPage : Model -> Html Msg
viewPage model =
    case model.route of
        Just route ->
            case route of
                Top ->
                    Top.view model

                Example ->
                    Example.view model

        Nothing ->
            NotFound.view


fullPage : Html Msg
fullPage =
    let
        section =
            div
                [ class "section" ]
                ([ h1 [] [ text "Section" ] ]
                    ++ List.repeat 30 (p [] [ text "Hello World" ])
                )
    in
    div
        [ id "fullPage" ]
        [ section
        , section
        , section
        ]
